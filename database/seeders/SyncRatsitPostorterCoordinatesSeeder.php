<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class SyncRatsitPostorterCoordinatesSeeder extends Seeder
{
    public function run(): void
    {
        if (! Schema::hasTable('ratsit_postorter') || ! Schema::hasTable('post_nums')) {
            $this->command?->warn('Required tables (ratsit_postorter, post_nums) were not found.');

            return;
        }

        $requiredPostNumsColumns = ['post_nummer', 'postort_latitude', 'postort_longitude'];
        $missingPostNumsColumns = array_filter(
            $requiredPostNumsColumns,
            fn (string $column): bool => ! Schema::hasColumn('post_nums', $column),
        );

        if ($missingPostNumsColumns !== []) {
            $this->command?->warn('Missing required post_nums columns: '.implode(', ', $missingPostNumsColumns));

            return;
        }

        $requiredRatsitColumns = ['id', 'post_nummer', 'lat', 'lng'];
        $missingRatsitColumns = array_filter(
            $requiredRatsitColumns,
            fn (string $column): bool => ! Schema::hasColumn('ratsit_postorter', $column),
        );

        if ($missingRatsitColumns !== []) {
            $this->command?->warn('Missing required ratsit_postorter columns: '.implode(', ', $missingRatsitColumns));

            return;
        }

        $coordinatesByPostnummer = DB::table('post_nums')
            ->whereNotNull('postort_latitude')
            ->whereNotNull('postort_longitude')
            ->select('post_nummer', 'postort_latitude', 'postort_longitude')
            ->get()
            ->mapWithKeys(function (object $row): array {
                $normalizedPostnummer = $this->normalizePostnummer((string) $row->post_nummer);

                if ($normalizedPostnummer === '') {
                    return [];
                }

                return [
                    $normalizedPostnummer => [
                        'lat' => (float) $row->postort_latitude,
                        'lng' => (float) $row->postort_longitude,
                    ],
                ];
            });

        if ($coordinatesByPostnummer->isEmpty()) {
            $this->command?->warn('No source postort coordinates found in post_nums.');

            return;
        }

        $updated = 0;

        DB::table('ratsit_postorter')
            ->where(function ($query) {
                $query->whereNull('lat')
                    ->orWhereNull('lng');
            })
            ->orderBy('id')
            ->chunkById(500, function ($rows) use ($coordinatesByPostnummer, &$updated): void {
                foreach ($rows as $row) {
                    $normalizedPostnummer = $this->normalizePostnummer((string) $row->post_nummer);
                    $coordinates = $coordinatesByPostnummer->get($normalizedPostnummer);

                    if (! $coordinates) {
                        continue;
                    }

                    DB::table('ratsit_postorter')
                        ->where('id', $row->id)
                        ->update([
                            'lat' => $row->lat ?? $coordinates['lat'],
                            'lng' => $row->lng ?? $coordinates['lng'],
                        ]);

                    $updated++;
                }
            });

        $remaining = DB::table('ratsit_postorter')
            ->where(function ($query) {
                $query->whereNull('lat')
                    ->orWhereNull('lng');
            })
            ->count();

        $this->command?->info("Synced coordinates for {$updated} rows in ratsit_postorter.");
        $this->command?->info("Rows still missing coordinates: {$remaining}.");
    }

    private function normalizePostnummer(string $postnummer): string
    {
        return (string) Str::of($postnummer)
            ->replaceMatches('/\D+/u', '')
            ->trim();
    }
}
