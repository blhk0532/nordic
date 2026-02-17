<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Jobs\ProcessPostNummer;
use App\Models\Postnummer;
use Illuminate\Console\Command;

use App\Models\PostNum;
use Exception;
use Illuminate\Bus\Batchable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class RunRatsitHittaCommand extends Command implements ShouldQueue
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    use Batchable;
    use Queueable;

    protected $postNumId;

    protected $signature = 'ratsit:hitta {post_nummer* : One or more post nummer to search for} {--sync : Run synchronously instead of queuing}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Queue ratsit_hitta.mjs script for a specific post nummer';


    /**
     * Custom serialization for PHP 8.1+ compatibility
     */
    public function __serialize(): array
    {
        return [
            'postNumId' => $this->postNumId,
        ];
    }

    /**
     * Custom unserialization for PHP 8.1+ compatibility
     */
    public function __unserialize(array $data): void
    {
        $this->postNumId = $data['postNumId'];
    }

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        /** @var array<int, string> $postNummers */
        $postNummers = (array) $this->argument('post_nummer');
        $sync = $this->option('sync');

        $dispatched = 0;

        foreach ($postNummers as $postNummer) {
            $postNummer = mb_trim((string) $postNummer);

            if ($postNummer === '') {
                continue;
            }

            $record = Postnummer::where('post_nummer', $postNummer)->first();

            if (! $record) {
                $this->error("Post nummer {$postNummer} not found");

                continue;
            }

            if ($record->status === 'running') {
                $this->warn("Post nummer {$postNummer} is already running");

                continue;
            }

            if ($sync) {
                $this->info("Running synchronously for post nummer: {$postNummer}");
                ProcessPostNummer::dispatchSync($postNummer);
                $this->info('Job completed');
                $dispatched++;
            } else {
                $this->info("Queuing job for post nummer: {$postNummer}");
                ProcessPostNummer::dispatch($postNummer);
                $dispatched++;
            }
        }

                try {
            // Find the PostNum record
            $postNum = PostNum::find($this->postNumId);
            if (! $postNum) {
                throw new Exception("PostNum with ID {$this->postNumId} not found");
            }

            $postNummer = $postNum->post_nummer;

            Log::info("Starting ratsitSearchPersonsQueue job for: {$postNummer}");

            // Build the command
            $scriptPath = base_path('jobs/ratsit_hitta.mjs');
            $command = "node {$scriptPath} \"{$postNummer}\"";

            Log::info("Executing ratsitSearchPersonsQueue command: {$command}");

            // Execute the script
            $output = shell_exec($command);

            Log::info('ratsitSearchPersonsQueue script completed', [
                'output' => $output,
                'postNummer' => $postNummer,
            ]);

            // Update the PostNum record to indicate completion
            $postNum->update([
                'status' => 'complete',
                'ratsit_personer_queue' => true,
                'updated_at' => now(),
            ]);

        } catch (Exception $e) {
            Log::error('RunRatsitSearchPersonsJob failed', [
                'postNumId' => $this->postNumId,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            // Update status to failed
            if ($postNum = PostNum::find($this->postNumId)) {
                $postNum->update(['status' => 'failed']);
            }

            throw $e;
        }

        if ($dispatched === 0) {
            $this->warn('No jobs dispatched.');

            return self::FAILURE;
        }

        if (! $sync) {
            $this->info("Queued {$dispatched} job(s) successfully");
        }

        return self::SUCCESS;
    }
}
