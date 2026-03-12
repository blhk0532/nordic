<?php

namespace App\Console\Commands;

use App\Actions\ImportSwedenKommunerCountsFromRatsit as ImportSwedenKommunerCountsFromRatsitAction;
use Illuminate\Console\Command;

class ImportSwedenKommunerCountsFromRatsit extends Command
{
    protected $signature = 'app:import-sweden-kommuner-counts-from-ratsit';

    protected $description = 'Import personer and foretag counts into sweden_kommuner from ratsit_kommuner without deleting data';

    public function __construct(private readonly ImportSwedenKommunerCountsFromRatsitAction $importSwedenKommunerCountsFromRatsit)
    {
        parent::__construct();
    }

    public function handle(): int
    {
        $stats = $this->importSwedenKommunerCountsFromRatsit->handle();

        $this->info("Processed {$stats['processed']} Sweden kommuner.");
        $this->info("Matched {$stats['matched']} kommuner from Ratsit.");
        $this->info("Updated {$stats['updated']} rows.");
        $this->info("Left {$stats['unchanged']} rows unchanged.");
        $this->info("Skipped {$stats['unmatched']} unmatched rows.");

        return self::SUCCESS;
    }
}
