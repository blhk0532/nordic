<?php

declare(strict_types=1);

namespace Filament\Tables;

use Filament\Support\Components\ViewComponent;
use Filament\Support\Concerns\HasDefaultDataFormattingSettings;
use Filament\Support\Concerns\HasExtraAttributes;
use Filament\Tables\Contracts\HasTable;

class Table extends ViewComponent
{
    use HasDefaultDataFormattingSettings;
    use HasExtraAttributes;
    use Table\Concerns\BelongsToLivewire;
    use Table\Concerns\CanBeStackedOnMobile;
    use Table\Concerns\CanBeStriped;
    use Table\Concerns\CanDeferLoading;
    use Table\Concerns\CanGroupRecords;
    use Table\Concerns\CanPaginateRecords;
    use Table\Concerns\CanPollRecords;
    use Table\Concerns\CanReorderRecords;
    use Table\Concerns\CanSearchRecords;
    use Table\Concerns\CanSortRecords;
    use Table\Concerns\CanSummarizeRecords;
    use Table\Concerns\HasActions;
    use Table\Concerns\HasArguments;
    use Table\Concerns\HasBulkActions;
    use Table\Concerns\HasColumnManager;
    use Table\Concerns\HasColumns;
    use Table\Concerns\HasContent;
    use Table\Concerns\HasEmptyState;
    use Table\Concerns\HasFilterIndicators;
    use Table\Concerns\HasFilters;
    use Table\Concerns\HasHeader;
    use Table\Concerns\HasHeaderActions;
    use Table\Concerns\HasHeadings;
    use Table\Concerns\HasQuery;
    use Table\Concerns\HasQueryStringIdentifier;
    use Table\Concerns\HasRecordAction;
    use Table\Concerns\HasRecordActions;
    use Table\Concerns\HasRecordClasses;
    use Table\Concerns\HasRecords;
    use Table\Concerns\HasRecordUrl;
    use Table\Concerns\HasToolbarActions;

    public const LOADING_TARGETS = [
        'gotoPage',
        'nextPage',
        'previousPage',
        'removeTableFilter',
        'removeTableFilters',
        'reorderTable',
        'resetTableFiltersForm',
        'sortTable',
        'tableColumnSearches',
        'tableFilters',
        'tableRecordsPerPage',
        'tableSearch',
    ];

    /**
     * @var view-string
     */
    protected string $view = 'filament-tables::index';

    protected string $viewIdentifier = 'table';

    protected string $evaluationIdentifier = 'table';

    public function __construct(HasTable $livewire)
    {
        $this->livewire($livewire);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->emptyStateDescription(function (Table $table): ?string {
            if (! $table->hasAction('create')) {
                return null;
            }

            return __('filament-tables::table.empty.description', [
                'model' => $table->getModelLabel(),
            ]);
        });
    }

    public static function make(HasTable $livewire): static
    {
        $static = app(self::class, ['livewire' => $livewire]);
        $static->configure();

        return $static;
    }

    /**
     * @return array<mixed>
     */
    protected function resolveDefaultClosureDependencyForEvaluationByName(string $parameterName): array
    {
        return match ($parameterName) {
            'livewire' => [$this->getLivewire()],
            default => parent::resolveDefaultClosureDependencyForEvaluationByName($parameterName),
        };
    }
}
