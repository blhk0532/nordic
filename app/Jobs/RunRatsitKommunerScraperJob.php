<?php

declare(strict_types=1);

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;

class RunRatsitKommunerScraperJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @param array<int,string>|null $kommuner
     */
    public function __construct(public ?array $kommuner = null)
    {
    }

    public function handle(): void
    {
        $script = base_path('jobs/ratsit_person_postorter.mjs');

        $command = ['node', $script];
        if (is_array($this->kommuner) && count($this->kommuner) > 0) {
            foreach ($this->kommuner as $k) {
                $command[] = (string) $k;
            }
        }

        $process = new Process($command);
        $process->setWorkingDirectory(base_path());
        $process->setTimeout(null);

        $exitCode = $process->run(function (string $type, string $buffer): void {
            if ($type === Process::ERR) {
                Log::error('RunRatsitKommunerScraperJob stderr: '.$buffer);
            } else {
                Log::info('RunRatsitKommunerScraperJob stdout: '.$buffer);
            }
        });

        if ($exitCode !== 0 || !$process->isSuccessful()) {
            Log::error('RunRatsitKommunerScraperJob failed', [
                'exit_code' => $process->getExitCode(),
                'output' => $process->getErrorOutput() ?: $process->getOutput(),
            ]);

            throw new \RuntimeException('Ratsit kommuner scraper process failed with exit code '.$process->getExitCode());
        }

        Log::info('RunRatsitKommunerScraperJob finished successfully.');
    }
}
