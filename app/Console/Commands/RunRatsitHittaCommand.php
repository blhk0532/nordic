<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Postnummer;
use Exception;
use Illuminate\Bus\Batchable;
use Illuminate\Console\Command;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class RunRatsitHittaCommand extends Command implements ShouldQueue
{
    use Batchable;
    use Queueable;

    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 3600;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 3;

    /**
     * Indicate if the job should be marked as failed on timeout.
     *
     * @var bool
     */
    public $failOnTimeout = false;

    /**
     * When the command is queued (instantiated programmatically) we store
     * any provided post numbers here because the Console input is not
     * available when the job is processed.
     *
     * @var array<int,string>
     */
    protected array $queuedPostNummers = [];

    protected $signature = 'ratsit:hitta {post_nummer* : One or more post nummer to search for} {--sync : Run synchronously instead of queuing}';

    protected $description = 'Run ratsit_hitta.mjs script for specific post nummer';

    /**
     * Custom serialization for PHP 8.1+ compatibility
     */
    public function __serialize(): array
    {
        return [
            'queuedPostNummers' => $this->queuedPostNummers,
        ];
    }

    /**
     * Custom unserialization for PHP 8.1+ compatibility
     */
    public function __unserialize(array $data): void
    {
        $this->queuedPostNummers = $data['queuedPostNummers'] ?? [];
    }

    /**
     * Accept optional post nummer(s) when instantiating programmatically
     * (for example when creating jobs via a UI). Always call parent::__construct().
     *
     * @param  string|array<string>|null  $postNummers
     */
    public function __construct($postNummers = null)
    {
        parent::__construct();

        if ($postNummers !== null) {
            $this->queuedPostNummers = is_array($postNummers) ? $postNummers : [(string) $postNummers];
        }
    }

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        /** @var array<int, string> $postNummers */
        if ($this->input !== null) {
            $postNummers = (array) $this->argument('post_nummer');
        } else {
            // When executed from the queue the Console input is not available,
            // use any stored post numbers provided at instantiation instead.
            $postNummers = $this->queuedPostNummers ?? [];
        }

        $dispatched = 0;

        foreach ($postNummers as $postNummer) {
            $postNummer = mb_trim((string) $postNummer);

            if ($postNummer === '') {
                continue;
            }

            try {
                Log::info("Starting ratsit_hitta script for: {$postNummer}");

                // Build and execute the command
                $scriptPath = base_path('jobs/ratsit_hitta.mjs');
                $command = "node {$scriptPath} \"{$postNummer}\"";

                Log::info("Executing command: {$command}");

                $output = shell_exec($command);

                Log::info('ratsit_hitta script completed', [
                    'output' => $output,
                    'postNummer' => $postNummer,
                ]);

                // Update the Postnummer record
                $record = Postnummer::where('post_nummer', $postNummer)->first();
                if ($record) {
                    $record->update([
                        'status' => 'complete',
                        'updated_at' => now(),
                    ]);
                }

                $dispatched++;
            } catch (Exception $e) {
                Log::error('ratsit_hitta script failed', [
                    'postNummer' => $postNummer,
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                ]);

                // Update status to failed
                $record = Postnummer::where('post_nummer', $postNummer)->first();
                if ($record) {
                    $record->update(['status' => 'failed']);
                }
            }
        }

        if ($dispatched === 0) {
            Log::warning('No post nummers processed');

            return self::FAILURE;
        }

        Log::info("Processed {$dispatched} post nummer(s) successfully");

        return self::SUCCESS;
    }
}
