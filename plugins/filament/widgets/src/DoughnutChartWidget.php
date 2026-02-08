<?php

declare(strict_types=1);

namespace Filament\Widgets;

/**
 * @deprecated Extend `ChartWidget` instead and define the `getType()` method.
 */
class DoughnutChartWidget extends ChartWidget
{
    protected function getType(): string
    {
        return 'doughnut';
    }
}
