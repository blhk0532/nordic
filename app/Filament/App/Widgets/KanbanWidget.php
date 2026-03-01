<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use Filament\Widgets\Widget;

class KanbanWidget extends Widget
{
    protected string $view = 'filament.widgets.kanban-widget';

    public function getViewData(): array
    {
        // Render the TaskBoard page inside the widget
        return [
            'taskBoard' => app(\App\Filament\App\Pages\TaskBoard::class),
        ];
    }
}
