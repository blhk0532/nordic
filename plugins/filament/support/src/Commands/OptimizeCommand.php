<?php

declare(strict_types=1);

namespace Filament\Support\Commands;

use Closure;
use Filament\Support\Commands\Concerns\CanCachePanelComponents;
use Illuminate\Console\Command;
use Symfony\Component\Console\Attribute\AsCommand;

#[AsCommand(name: 'filament:optimize')]
class OptimizeCommand extends Command
{
    use CanCachePanelComponents;

    protected $description = 'Cache components and Blade icons to increase performance';

    protected $name = 'filament:optimize';

    public function handle(): int
    {
        $this->components->info('Caching components and Blade icons.');

        $tasks = collect();

        if ($this->canCachePanelComponents()) {
            $tasks->put(
                'Caching components',
                fn (): bool => $this->callSilent('filament:cache-components') === self::SUCCESS
            );
        }

        $tasks->put('Caching Blade icons', fn (): bool => $this->callSilent('icons:cache') === self::SUCCESS);

        $tasks->each(fn (Closure $task, string $description) => $this->components->task($description, $task));

        $this->newLine();

        return self::SUCCESS;
    }
}
