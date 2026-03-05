<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ImportSwedenPostnummerCsv extends Command
{
    protected $signature = 'app:import-sweden-postnummer-csv
        {path? : Absolute or relative path to CSV file}
        {--truncate : Truncate sweden_postnummer before import}';

    protected $description = 'Import postnummer data from CSV into sweden_postnummer';

    public function handle(): int
    {
        if (! Schema::hasTable('sweden_postnummer')) {
            $this->error('Table sweden_postnummer does not exist. Run migrations first.');

            return self::FAILURE;
        }

        $pathArgument = $this->argument('path');
        $filePath = is_string($pathArgument) && $pathArgument !== ''
            ? $pathArgument
            : base_path('sweden_postnummer.csv');

        if (! is_file($filePath) || ! is_readable($filePath)) {
            $this->error("CSV file not found or not readable: {$filePath}");

            return self::FAILURE;
        }

        if ((bool) $this->option('truncate')) {
            DB::table('sweden_postnummer')->truncate();
            $this->info('Truncated sweden_postnummer table.');
        }

        $file = new \SplFileObject($filePath, 'r');
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY);
        $file->setCsvControl(',');

        $header = $file->fgetcsv();
        if (! is_array($header) || $header === [null] || $header === false) {
            $this->error('CSV header is missing or invalid.');

            return self::FAILURE;
        }

        $headerMap = array_flip(array_map(static fn ($column) => trim((string) $column), $header));
        $requiredColumns = [
            'id', 'post_nummer', 'post_ort', 'lan', 'kommun', 'country',
            'latitude', 'longitude', 'personer', 'foretag', 'created_at', 'updated_at',
        ];

        $missingColumns = array_values(array_filter(
            $requiredColumns,
            static fn (string $column): bool => ! array_key_exists($column, $headerMap),
        ));

        if ($missingColumns !== []) {
            $this->error('CSV is missing required columns: '.implode(', ', $missingColumns));

            return self::FAILURE;
        }

        $batch = [];
        $batchSize = 1000;
        $processed = 0;
        $skipped = 0;
        $now = now();

        foreach ($file as $row) {
            if (! is_array($row) || $row === [null]) {
                continue;
            }

            $postNummer = $this->valueFromRow($row, $headerMap, 'post_nummer');
            if ($postNummer === null) {
                $skipped++;

                continue;
            }

            if (! preg_match('/\d/', $postNummer) || strcasecmp($postNummer, 'post_nummer') === 0) {
                $skipped++;

                continue;
            }

            $batch[] = [
                'csv_id' => $this->toInt($this->valueFromRow($row, $headerMap, 'id')),
                'post_nummer' => $postNummer,
                'post_ort' => $this->valueFromRow($row, $headerMap, 'post_ort'),
                'lan' => $this->valueFromRow($row, $headerMap, 'lan'),
                'kommun' => $this->valueFromRow($row, $headerMap, 'kommun'),
                'country' => $this->normalizeCountry($this->valueFromRow($row, $headerMap, 'country')),
                'latitude' => $this->toFloat($this->valueFromRow($row, $headerMap, 'latitude')),
                'longitude' => $this->toFloat($this->valueFromRow($row, $headerMap, 'longitude')),
                'personer' => $this->toInt($this->valueFromRow($row, $headerMap, 'personer')),
                'foretag' => $this->toInt($this->valueFromRow($row, $headerMap, 'foretag')),
                'personer_saved' => $this->toTimestamp($this->valueFromRow($row, $headerMap, 'created_at')),
                'foretag_saved' => $this->toTimestamp($this->valueFromRow($row, $headerMap, 'updated_at')),
                'created_at' => $now,
                'updated_at' => $now,
            ];

            if (count($batch) >= $batchSize) {
                $processed += $this->flushBatch($batch);
                $batch = [];
            }
        }

        if ($batch !== []) {
            $processed += $this->flushBatch($batch);
        }

        $this->info("Imported/updated {$processed} rows into sweden_postnummer.");
        $this->info("Skipped {$skipped} rows with missing post_nummer.");

        return self::SUCCESS;
    }

    /**
     * @param  array<int, array<string, mixed>>  $batch
     */
    private function flushBatch(array $batch): int
    {
        DB::table('sweden_postnummer')->upsert(
            $batch,
            ['post_nummer'],
            [
                'csv_id',
                'post_ort',
                'lan',
                'kommun',
                'country',
                'latitude',
                'longitude',
                'personer',
                'foretag',
                'personer_saved',
                'foretag_saved',
                'updated_at',
            ],
        );

        return count($batch);
    }

    /**
     * @param  array<int, mixed>  $row
     * @param  array<string, int>  $headerMap
     */
    private function valueFromRow(array $row, array $headerMap, string $column): ?string
    {
        $index = $headerMap[$column] ?? null;

        if ($index === null || ! array_key_exists($index, $row)) {
            return null;
        }

        $value = trim((string) $row[$index]);

        return $value === '' ? null : $value;
    }

    private function toInt(?string $value): ?int
    {
        if ($value === null || $value === '') {
            return null;
        }

        return is_numeric($value) ? (int) $value : null;
    }

    private function toFloat(?string $value): ?float
    {
        if ($value === null || $value === '') {
            return null;
        }

        return is_numeric($value) ? (float) $value : null;
    }

    private function toTimestamp(?string $value): ?Carbon
    {
        if ($value === null || $value === '') {
            return null;
        }

        try {
            return Carbon::parse($value);
        } catch (\Throwable) {
            return null;
        }
    }

    private function normalizeCountry(?string $value): ?string
    {
        if ($value === null || $value === '') {
            return null;
        }

        return strtoupper(substr(trim($value), 0, 2));
    }
}
