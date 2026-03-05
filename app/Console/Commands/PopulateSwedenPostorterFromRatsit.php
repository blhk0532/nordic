<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class PopulateSwedenPostorterFromRatsit extends Command
{
    protected $signature = 'app:populate-sweden-postorter-from-ratsit
        {--truncate : Truncate sweden_postorter before populating}';

    protected $description = 'Populate sweden_postorter with unique post_ort data from ratsit_postorter';

    public function handle(): int
    {
        if (! Schema::hasTable('ratsit_postorter') || ! Schema::hasTable('sweden_postorter')) {
            $this->error('Required tables (ratsit_postorter, sweden_postorter) were not found.');

            return self::FAILURE;
        }

        if ((bool) $this->option('truncate')) {
            DB::table('sweden_postorter')->truncate();
            $this->info('Truncated sweden_postorter table.');
        }

        $lanByPostort = collect();

        if (Schema::hasTable('sweden_postnummer') && Schema::hasColumn('sweden_postnummer', 'post_ort') && Schema::hasColumn('sweden_postnummer', 'lan')) {
            $lanByPostort = DB::table('sweden_postnummer')
                ->whereNotNull('post_ort')
                ->whereNotNull('lan')
                ->whereRaw("TRIM(post_ort) != ''")
                ->whereRaw("TRIM(lan) != ''")
                ->selectRaw('TRIM(post_ort) as post_ort, MAX(TRIM(lan)) as lan')
                ->groupByRaw('TRIM(post_ort)')
                ->get()
                ->keyBy(fn (object $row): string => $this->normalizePostort((string) $row->post_ort));
        }

        $existingByPostort = DB::table('sweden_postorter')
            ->select('id', 'post_ort')
            ->get()
            ->keyBy(fn (object $row): string => $this->normalizePostort((string) $row->post_ort));

        $aggregatedRows = DB::table('ratsit_postorter')
            ->whereNotNull('post_ort')
            ->whereRaw("TRIM(post_ort) != ''")
            ->selectRaw('TRIM(post_ort) as post_ort')
            ->selectRaw("MAX(NULLIF(TRIM(kommun), '')) as kommun")
            ->selectRaw('AVG(lat) as latitude')
            ->selectRaw('AVG(lng) as longitude')
            ->selectRaw('SUM(COALESCE(personer_count, 0)) as personer')
            ->selectRaw('SUM(COALESCE(foretag_count, 0)) as foretag')
            ->groupByRaw('TRIM(post_ort)')
            ->get();

        $now = now();
        $created = 0;
        $updated = 0;

        foreach ($aggregatedRows as $row) {
            $normalizedPostort = $this->normalizePostort((string) $row->post_ort);
            $lan = $lanByPostort->get($normalizedPostort)?->lan;

            $payload = [
                'post_ort' => (string) $row->post_ort,
                'kommun' => $row->kommun !== null ? (string) $row->kommun : null,
                'lan' => is_string($lan) && trim($lan) !== '' ? trim($lan) : null,
                'latitude' => $row->latitude !== null ? (string) $row->latitude : null,
                'longitude' => $row->longitude !== null ? (string) $row->longitude : null,
                'personer' => (int) $row->personer,
                'foretag' => (int) $row->foretag,
                'updated_at' => $now,
            ];

            $existing = $existingByPostort->get($normalizedPostort);

            if ($existing) {
                DB::table('sweden_postorter')
                    ->where('id', $existing->id)
                    ->update($payload);

                $updated++;

                continue;
            }

            DB::table('sweden_postorter')->insert([
                ...$payload,
                'created_at' => $now,
            ]);

            $created++;
        }

        $this->info("Created {$created} postorter and updated {$updated} postorter.");

        return self::SUCCESS;
    }

    private function normalizePostort(string $postort): string
    {
        return (string) Str::of($postort)
            ->lower()
            ->ascii()
            ->replaceMatches('/\s+/u', ' ')
            ->trim();
    }
}
