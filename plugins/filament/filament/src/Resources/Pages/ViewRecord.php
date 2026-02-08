<?php

declare(strict_types=1);

namespace Filament\Resources\Pages;

use BackedEnum;
use Closure;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Facades\Filament;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\EmbeddedSchema;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Facades\FilamentIcon;
use Filament\Support\Icons\Heroicon;
use Filament\View\PanelsIconAlias;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;

/**
 * @template TModel of Model = Model
 *
 * @property-read Schema $form
 */
class ViewRecord extends Page
{
    use Concerns\HasRelationManagers {
        getContentTabComponent as getBaseContentTabComponent;
    }
    use Concerns\InteractsWithRecord {
        getRecord as getBaseRecord;
    }

    /**
     * @var array<string, mixed> | null
     */
    public ?array $data = [];

    public static function getNavigationIcon(): string|BackedEnum|Htmlable|null
    {
        return self::$navigationIcon
            ?? FilamentIcon::resolve(PanelsIconAlias::RESOURCES_PAGES_VIEW_RECORD_NAVIGATION_ITEM)
            ?? Heroicon::OutlinedEye;
    }

    public static function getNavigationLabel(): string
    {
        if (filled(self::$navigationLabel)) {
            return self::$navigationLabel;
        }

        return __('filament-panels::resources/pages/view-record.navigation_label');
    }

    public static function shouldRegisterNavigation(array $parameters = []): bool
    {
        return parent::shouldRegisterNavigation($parameters) && self::getResource()::canView($parameters['record']);
    }

    public function getBreadcrumb(): string
    {
        return self::$breadcrumb ?? __('filament-panels::resources/pages/view-record.breadcrumb');
    }

    public function getContentTabLabel(): ?string
    {
        return __('filament-panels::resources/pages/view-record.content.tab.label');
    }

    public function mount(int|string $record): void
    {
        $this->record = $this->resolveRecord($record);

        $this->authorizeAccess();

        if (! $this->hasInfolist()) {
            $this->fillForm();
        }
    }

    /**
     * @param  array<string>  $statePaths
     */
    public function refreshFormData(array $statePaths): void
    {
        $this->form->fillPartially(
            $this->mutateFormDataBeforeFill($this->getRecord()->attributesToArray()),
            $statePaths,
        );
    }

    public function getDefaultActionSchemaResolver(Action $action): ?Closure
    {
        return match (true) {
            $action instanceof CreateAction, $action instanceof EditAction => fn (Schema $schema): Schema => self::getResource()::form($schema->columns(2)),
            $action instanceof ViewAction => fn (Schema $schema): Schema => $this->hasInfolist() ? $schema->components([EmbeddedSchema::make('infolist')]) : $schema->components([EmbeddedSchema::make('form')]),
            default => null,
        };
    }

    public function getTitle(): string|Htmlable
    {
        if (filled(self::$title)) {
            return self::$title;
        }

        return __('filament-panels::resources/pages/view-record.title', [
            'label' => $this->getRecordTitle(),
        ]);
    }

    public function defaultForm(Schema $schema): Schema
    {
        return $schema
            ->columns($this->hasInlineLabels() ? 1 : 2)
            ->disabled()
            ->inlineLabel($this->hasInlineLabels())
            ->model($this->getRecord())
            ->operation('view')
            ->statePath('data');
    }

    public function form(Schema $schema): Schema
    {
        return self::getResource()::form($schema);
    }

    public function defaultInfolist(Schema $schema): Schema
    {
        return $schema
            ->columns($this->hasInlineLabels() ? 1 : 2)
            ->inlineLabel($this->hasInlineLabels())
            ->record($this->getRecord());
    }

    public function infolist(Schema $schema): Schema
    {
        return self::getResource()::infolist($schema);
    }

    public function content(Schema $schema): Schema
    {
        if ($this->hasCombinedRelationManagerTabsWithContent()) {
            return $schema
                ->components([
                    $this->getRelationManagersContentComponent(),
                ]);
        }

        return $schema
            ->components([
                $this->hasInfolist()
                    ? $this->getInfolistContentComponent()
                    : $this->getFormContentComponent(),
                $this->getRelationManagersContentComponent(),
            ]);
    }

    public function getFormContentComponent(): Component
    {
        return EmbeddedSchema::make('form');
    }

    public function getInfolistContentComponent(): Component
    {
        return EmbeddedSchema::make('infolist');
    }

    public function getContentTabComponent(): Tab
    {
        return $this->getBaseContentTabComponent()
            ->schema([
                $this->hasInfolist()
                    ? $this->getInfolistContentComponent()
                    : $this->getFormContentComponent(),
            ]);
    }

    /**
     * @return array<string>
     */
    public function getPageClasses(): array
    {
        return [
            'fi-resource-view-record-page',
            'fi-resource-'.str_replace('/', '-', $this->getResource()::getSlug(Filament::getCurrentOrDefaultPanel())),
            "fi-resource-record-{$this->getRecord()->getKey()}",
        ];
    }

    public function getDefaultTestingSchemaName(): ?string
    {
        return $this->hasInfolist() ? 'infolist' : parent::getDefaultTestingSchemaName();
    }

    /**
     * @return TModel
     */
    public function getRecord(): Model
    {
        return $this->getBaseRecord();
    }

    protected function authorizeAccess(): void
    {
        abort_unless(self::getResource()::canView($this->getRecord()), 403);
    }

    protected function hasInfolist(): bool
    {
        return (bool) count($this->getSchema('infolist')->getComponents());
    }

    protected function fillForm(): void
    {
        /** @internal Read the DocBlock above the following method. */
        $this->fillFormWithDataAndCallHooks($this->getRecord());
    }

    /**
     * @internal Never override or call this method. If you completely override `fillForm()`, copy the contents of this method into your override.
     *
     * @param  array<string, mixed>  $extraData
     */
    protected function fillFormWithDataAndCallHooks(Model $record, array $extraData = []): void
    {
        $this->callHook('beforeFill');

        $data = $this->mutateFormDataBeforeFill([
            ...$record->attributesToArray(),
            ...$extraData,
        ]);

        $this->form->fill($data);

        $this->callHook('afterFill');
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    protected function mutateFormDataBeforeFill(array $data): array
    {
        return $data;
    }
}
