<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class PopulateSwedenPostorterCoordinates extends Command
{
    protected $signature = 'app:populate-sweden-postorter-coordinates';

    protected $description = 'Populate sweden_postorter latitude/longitude from first matching sweden_postnummer row';

    public function handle(): int
    {
        if (! Schema::hasTable('sweden_postorter') || ! Schema::hasTable('sweden_postnummer')) {
            $this->error('Required tables (sweden_postorter, sweden_postnummer) were not found.');

            return self::FAILURE;
        }

        $sourceCoordinatesByPostort = [];

        DB::table('sweden_postnummer')
            ->select('id', 'post_ort', 'latitude', 'longitude')
            ->whereNotNull('post_ort')
            ->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->whereRaw("TRIM(post_ort) != ''")
            ->orderBy('id')
            ->chunkById(1000, function ($rows) use (&$sourceCoordinatesByPostort): void {
                foreach ($rows as $row) {
                    $normalizedPostort = $this->normalizePostort((string) $row->post_ort);

                    if (isset($sourceCoordinatesByPostort[$normalizedPostort])) {
                        continue;
                    }

                    $sourceCoordinatesByPostort[$normalizedPostort] = [
                        'latitude' => (string) $row->latitude,
                        'longitude' => (string) $row->longitude,
                    ];
                }
            });

        if ($sourceCoordinatesByPostort === []) {
            $this->warn('No source coordinates found in sweden_postnummer.');

            return self::SUCCESS;
        }

        $updated = 0;

        DB::table('sweden_postorter')
            ->select('id', 'post_ort')
            ->whereNotNull('post_ort')
            ->whereRaw("TRIM(post_ort) != ''")
            ->orderBy('id')
            ->chunkById(1000, function ($rows) use ($sourceCoordinatesByPostort, &$updated): void {
                foreach ($rows as $row) {
                    $normalizedPostort = $this->normalizePostort((string) $row->post_ort);
                    $coordinates = $sourceCoordinatesByPostort[$normalizedPostort] ?? null;

                    if ($coordinates === null) {
                        continue;
                    }

                    $affected = DB::table('sweden_postorter')
                        ->where('id', $row->id)
                        ->update([
                            'latitude' => $coordinates['latitude'],
                            'longitude' => $coordinates['longitude'],
                            'updated_at' => now(),
                        ]);

                    $updated += $affected;
                }
            });

        $this->info("Updated {$updated} sweden_postorter rows with coordinates.");

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
