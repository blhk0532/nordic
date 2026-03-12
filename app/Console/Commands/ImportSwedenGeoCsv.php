<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ImportSwedenGeoCsv extends Command
{
    protected $signature = 'app:import-sweden-geo-csv
        {path? : Absolute or relative path to CSV file}';

    protected $description = 'Import sweden_geo.csv data into sweden_geo without deleting existing data';

    public function handle(): int
    {
        if (! Schema::hasTable('sweden_geo')) {
            $this->error('Table sweden_geo does not exist. Run migrations first.');

            return self::FAILURE;
        }

        $pathArgument = $this->argument('path');
        $filePath = is_string($pathArgument) && $pathArgument !== ''
            ? $pathArgument
            : base_path('sweden_geo.csv');

        if (! is_file($filePath) || ! is_readable($filePath)) {
            $this->error("CSV file not found or not readable: {$filePath}");

            return self::FAILURE;
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
        $requiredColumns = ['postnummer', 'postort', 'kommun', 'lan', 'latitude', 'longitude'];

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

            $postnummer = $this->valueFromRow($row, $headerMap, 'postnummer');

            if ($postnummer === null || strcasecmp($postnummer, 'postnummer') === 0) {
                $skipped++;

                continue;
            }

            $batch[] = [
                'postnummer' => $postnummer,
                'postort' => $this->valueFromRow($row, $headerMap, 'postort'),
                'kommun' => $this->valueFromRow($row, $headerMap, 'kommun'),
                'lan' => $this->valueFromRow($row, $headerMap, 'lan'),
                'latitude' => $this->toFloat($this->valueFromRow($row, $headerMap, 'latitude')),
                'longitude' => $this->toFloat($this->valueFromRow($row, $headerMap, 'longitude')),
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

        $this->info("Imported/updated {$processed} rows into sweden_geo.");
        $this->info("Skipped {$skipped} rows with missing postnummer.");

        return self::SUCCESS;
    }

    /**
     * @param  array<int, array<string, mixed>>  $batch
     */
    private function flushBatch(array $batch): int
    {
        DB::table('sweden_geo')->upsert(
            $batch,
            ['postnummer'],
            ['postort', 'kommun', 'lan', 'latitude', 'longitude', 'updated_at'],
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

    private function toFloat(?string $value): ?float
    {
        if ($value === null || $value === '') {
            return null;
        }

        return is_numeric($value) ? (float) $value : null;
    }
}
