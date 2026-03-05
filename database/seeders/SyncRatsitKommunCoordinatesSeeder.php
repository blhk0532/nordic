<?php

namespace Database\Seeders;

use App\Models\RatsitKommun;
use App\Models\SwedishKommun;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SyncRatsitKommunCoordinatesSeeder extends Seeder
{
    public function run(): void
    {
        if (SwedishKommun::query()->whereNotNull('lat')->whereNotNull('lng')->doesntExist()) {
            $this->call(SwedishKommunerSeeder::class);
        }

        $swedishKommunCoordinates = SwedishKommun::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->get(['kommun', 'lat', 'lng'])
            ->mapWithKeys(function (SwedishKommun $kommun): array {
                return [
                    $this->normalizeKommunName($kommun->kommun) => [
                        'lat' => (float) $kommun->lat,
                        'lng' => (float) $kommun->lng,
                    ],
                ];
            });

        $updated = 0;
        $unmatched = 0;

        RatsitKommun::query()
            ->where(function ($query) {
                $query->whereNull('lat')
                    ->orWhereNull('lng');
            })
            ->orderBy('id')
            ->chunkById(500, function ($kommuner) use ($swedishKommunCoordinates, &$updated, &$unmatched): void {
                foreach ($kommuner as $kommun) {
                    $coordinates = $this->findCoordinatesForRatsitKommun(
                        (string) $kommun->kommun,
                        $swedishKommunCoordinates->all(),
                    );

                    if (! $coordinates) {
                        $unmatched++;

                        continue;
                    }

                    RatsitKommun::query()
                        ->whereKey($kommun->id)
                        ->update([
                            'lat' => $coordinates['lat'],
                            'lng' => $coordinates['lng'],
                        ]);

                    $updated++;
                }
            });

        $fallbackCoordinates = collect([
            'Älvkarleby' => ['lat' => 60.5500, 'lng' => 17.4333],
            'Borås' => ['lat' => 57.7211, 'lng' => 12.9401],
            'Falu' => ['lat' => 60.6036, 'lng' => 15.6300],
            'Heby' => ['lat' => 59.9500, 'lng' => 16.8833],
            'Ljusnarsbergs' => ['lat' => 59.8333, 'lng' => 14.8833],
            'Östhammars' => ['lat' => 60.2500, 'lng' => 18.3167],
            'Oxelösunds' => ['lat' => 58.6667, 'lng' => 17.1167],
            'Göteborgs-Centrum' => ['lat' => 57.7089, 'lng' => 11.9746],
            'Göteborgs-Hisingen' => ['lat' => 57.7500, 'lng' => 11.9500],
            'Göteborgs-Nordost' => ['lat' => 57.7333, 'lng' => 12.0500],
            'Göteborgs-Öster' => ['lat' => 57.7167, 'lng' => 12.0000],
            'Göteborgs-Väster' => ['lat' => 57.7000, 'lng' => 11.9333],
            'Malmö-Öster' => ['lat' => 55.5833, 'lng' => 13.0500],
            'Malmö-Väster' => ['lat' => 55.6333, 'lng' => 12.9667],
            'Stockholms-Bandhagen-Mfl' => ['lat' => 59.2444, 'lng' => 18.0667],
            'Stockholms-Bromma' => ['lat' => 59.3444, 'lng' => 17.9667],
            'Stockholms-Essingeöarna-Mm' => ['lat' => 59.3500, 'lng' => 17.9333],
            'Stockholms-Farsta-Mfl' => ['lat' => 59.2444, 'lng' => 18.1000],
            'Stockholms-Hägersten-Mfl' => ['lat' => 59.2833, 'lng' => 18.0833],
            'Stockholms-Norrmalm-Mm' => ['lat' => 59.3367, 'lng' => 18.0683],
            'Stockholms-Södermalm-Mm' => ['lat' => 59.3167, 'lng' => 18.0750],
            'Stockholms-Spånga-Mfl' => ['lat' => 59.3500, 'lng' => 17.9167],
        ])->mapWithKeys(fn (array $coords, string $name): array => [
            $this->normalizeKommunName($name) => $coords,
        ])->all();

        $fallbackUpdated = 0;

        RatsitKommun::query()
            ->where(function ($query) {
                $query->whereNull('lat')
                    ->orWhereNull('lng');
            })
            ->orderBy('id')
            ->chunkById(500, function ($kommuner) use (&$fallbackUpdated, $fallbackCoordinates): void {
                foreach ($kommuner as $kommun) {
                    $normalized = $this->normalizeKommunName((string) $kommun->kommun);

                    if (! array_key_exists($normalized, $fallbackCoordinates)) {
                        continue;
                    }

                    RatsitKommun::query()
                        ->whereKey($kommun->id)
                        ->update([
                            'lat' => $fallbackCoordinates[$normalized]['lat'],
                            'lng' => $fallbackCoordinates[$normalized]['lng'],
                        ]);

                    $fallbackUpdated++;
                }
            });

        $updated += $fallbackUpdated;
        $unmatched = RatsitKommun::query()
            ->where(function ($query) {
                $query->whereNull('lat')
                    ->orWhereNull('lng');
            })
            ->count();

        $this->command?->info("Synced coordinates for {$updated} rows in ratsit_kommuner.");
        $this->command?->info("Rows still unmatched: {$unmatched}.");
    }

    /**
     * @param  array<string, array{lat: float, lng: float}>  $coordinatesByNormalizedName
     * @return array{lat: float, lng: float}|null
     */
    private function findCoordinatesForRatsitKommun(string $ratsitKommun, array $coordinatesByNormalizedName): ?array
    {
        $candidates = [
            $ratsitKommun,
            Str::before($ratsitKommun, ' - '),
            Str::replace('-', ' ', $ratsitKommun),
            preg_replace('/s$/u', '', $ratsitKommun) ?? $ratsitKommun,
            Str::replace('-', ' ', Str::before($ratsitKommun, ' - ')),
            preg_replace('/s$/u', '', Str::before($ratsitKommun, ' - ')) ?? Str::before($ratsitKommun, ' - '),
        ];

        foreach ($candidates as $candidate) {
            $normalized = $this->normalizeKommunName($candidate);

            if ($normalized === '') {
                continue;
            }

            if (array_key_exists($normalized, $coordinatesByNormalizedName)) {
                return $coordinatesByNormalizedName[$normalized];
            }
        }

        return null;
    }

    private function normalizeKommunName(string $name): string
    {
        return (string) Str::of($name)
            ->lower()
            ->ascii()
            ->replaceMatches('/[^a-z0-9]+/u', ' ')
            ->replaceMatches('/\s+/u', ' ')
            ->trim();
    }
}
