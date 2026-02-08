<?php

declare(strict_types=1);

namespace Filament\Actions\Exports;

use Carbon\CarbonInterface;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\Exports\Enums\Contracts\ExportFormat as ExportFormatInterface;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Schemas\Components\Component;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use OpenSpout\Common\Entity\Row;
use OpenSpout\Common\Entity\Style\Style;
use OpenSpout\Writer\XLSX\Options;
use OpenSpout\Writer\XLSX\Writer;

abstract class Exporter
{
    /** @var array<ExportColumn> */
    protected array $cachedColumns;

    protected ?Model $record;

    /**
     * @var class-string<Model>|null
     */
    protected static ?string $model = null;

    /**
     * @param  array<string, string>  $columnMap
     * @param  array<string, mixed>  $options
     */
    public function __construct(
        protected Export $export,
        protected array $columnMap,
        protected array $options,
    ) {}

    /**
     * @return array<mixed>
     */
    public function __invoke(Model $record): array
    {
        $this->record = $record;

        $columns = $this->getCachedColumns();

        $data = [];

        foreach (array_keys($this->columnMap) as $column) {
            $data[] = $columns[$column]->getFormattedState();
        }

        return $data;
    }

    /**
     * @return array<ExportColumn>
     */
    abstract public static function getColumns(): array;

    abstract public static function getCompletedNotificationBody(Export $export): string;

    /**
     * @return array<Component | Action | ActionGroup>
     */
    final public static function getOptionsFormComponents(): array
    {
        return [];
    }

    /**
     * @return class-string<Model>
     */
    final public static function getModel(): string
    {
        return static::$model ?? (string) str(class_basename(static::class))
            ->beforeLast('Exporter')
            ->prepend(app()->getNamespace().'Models\\');
    }

    final public static function getCompletedNotificationTitle(Export $export): string
    {
        return __('filament-actions::export.notifications.completed.title');
    }

    final public static function getCsvDelimiter(): string
    {
        return ',';
    }

    /**
     * @template TModel of Model
     *
     * @param  Builder<TModel>  $query
     * @return Builder<TModel>
     */
    final public static function modifyQuery(Builder $query): Builder
    {
        return $query;
    }

    /**
     * @return array<int, object>
     */
    final public function getJobMiddleware(): array
    {
        return [
            (new WithoutOverlapping("export{$this->export->getKey()}"))->expireAfter(600),
        ];
    }

    final public function getJobRetryUntil(): ?CarbonInterface
    {
        return now()->addDay();
    }

    /**
     * @return int | array<int> | null
     */
    final public function getJobBackoff(): int|array|null
    {
        return [60, 120, 300, 600];
    }

    /**
     * @return array<int, string>
     */
    final public function getJobTags(): array
    {
        return ["export{$this->export->getKey()}"];
    }

    final public function getJobQueue(): ?string
    {
        return null;
    }

    final public function getJobConnection(): ?string
    {
        return null;
    }

    final public function getJobBatchName(): ?string
    {
        return null;
    }

    /**
     * @return array<ExportColumn>
     */
    final public function getCachedColumns(): array
    {
        return $this->cachedColumns ??= array_reduce(static::getColumns(), function (array $carry, ExportColumn $column): array {
            $carry[$column->getName()] = $column->exporter($this);

            return $carry;
        }, []);
    }

    final public function getRecord(): ?Model
    {
        return $this->record;
    }

    /**
     * @return array<string, mixed>
     */
    final public function getOptions(): array
    {
        return $this->options;
    }

    final public function getFileDisk(): string
    {
        $disk = config('filament.default_filesystem_disk');

        if (($disk === 'public') && array_key_exists('local', config('filesystems.disks'))) {
            return 'local';
        }

        return $disk;
    }

    final public function getFileName(Export $export): string
    {
        return __('filament-actions::export.file_name', [
            'export_id' => $export->getKey(),
            'model' => (string) str(static::getModel())
                ->classBasename()
                ->beforeLast('Exporter')
                ->kebab()
                ->replace('-', ' ')
                ->plural()
                ->replace(' ', '-'),
        ]);
    }

    /**
     * @return array<ExportFormatInterface>
     */
    final public function getFormats(): array
    {
        return [ExportFormat::Csv, ExportFormat::Xlsx];
    }

    final public function getXlsxCellStyle(): ?Style
    {
        return null;
    }

    final public function getXlsxHeaderCellStyle(): ?Style
    {
        return null;
    }

    final public function getXlsxWriterOptions(): ?Options
    {
        return null;
    }

    /**
     * @param  array<mixed>  $values
     */
    final public function makeXlsxHeaderRow(array $values, ?Style $style = null): Row
    {
        return $this->makeXlsxRow($values, $style);
    }

    /**
     * @param  array<mixed>  $values
     */
    final public function makeXlsxRow(array $values, ?Style $style = null): Row
    {
        return Row::fromValues($values, $style);
    }

    final public function configureXlsxWriterBeforeClose(Writer $writer): Writer
    {
        return $writer;
    }
}
