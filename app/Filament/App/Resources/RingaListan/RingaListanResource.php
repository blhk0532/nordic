<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan;

use App\Enums\Outcomes;
use App\Filament\App\Resources\RingaListan\Pages\CreateRingaData;
use App\Filament\App\Resources\RingaListan\Pages\EditRingaData;
use App\Filament\App\Resources\RingaListan\Pages\ListRingaData;
use App\Filament\App\Resources\RingaListan\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaListan\Pages\ViewRingaData;
use App\Filament\App\Resources\RingaListan\Schemas\RingaDataForm;
use App\Filament\App\Resources\RingaListan\Schemas\RingaDataInfolist;
use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use App\Models\RingaData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class RingaListanResource extends Resource
{
    public static bool $shouldRegisterNavigation = true;

    protected static ?string $model = RingaData::class;

    protected static string|BackedEnum|null $navigationIcon = Remix::RiTimerFlashLine;

    protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiTimerFlashFill;

    protected static ?string $navigationLabel = 'Ringlistor';

    protected static UnitEnum|string|null $navigationGroup = '';

    protected static ?string $slug = 'ringa/listor';

    protected static ?int $navigationSort = 12;

    protected static bool $isDiscovered = true;

    // Make this resource global (not tenant-scoped) since Ringa data is public information
    protected static ?string $tenantOwnershipRelationshipName = null;

    protected static bool $isScopedToTenant = false;

    public static function form(Schema $schema): Schema
    {
        return RingaDataForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return RingaDataInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RingaDataTable::configure($table);
    }

    public static function getTabs(): array
    {
        return [
            'all' => Tab::make('All')
                ->badge(fn () => self::getEloquentQuery()->count()),
            'pending' => Tab::make('Pending')
                ->modifyQueryUsing(fn (Builder $query) => $query->whereIn('outcome', self::getTrackedOutcomes()))
                ->badge(fn () => self::getEloquentQuery()->whereIn('outcome', self::getTrackedOutcomes())->count()),
            'completed' => Tab::make('Completed')
                ->modifyQueryUsing(fn (Builder $query) => $query->whereNotIn('outcome', self::getTrackedOutcomes()))
                ->badge(fn () => self::getEloquentQuery()->whereNotIn('outcome', self::getTrackedOutcomes())->count()),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id;

        return parent::getEloquentQuery()
            ->where(function (Builder $query) use ($userId, $tenantId) {
                $query->where('user_id', $userId)
                    ->whereNotNull('aterkom_at');
                if ($tenantId) {
                    $query->where('team_id', $tenantId);
                }
            });
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRingaData::route('/'),
            'create' => CreateRingaData::route('/create'),
            'queue' => QueueRingaData::route('/queue'),
            'view' => ViewRingaData::route('/{record}'),
            'edit' => EditRingaData::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadgeColor(): ?string
    {
        $count = self::getEloquentQuery()
            ->whereIn('outcome', self::getTrackedOutcomes())
            ->count();

        return $count ? 'warning' : 'success';
    }

    public static function getNavigationBadge(): ?string
    {
        $count = self::getEloquentQuery()
            ->whereIn('outcome', self::getTrackedOutcomes())
            ->count();

        return $count ? (string) $count : '❍';
    }

    public static function getTrackedOutcomes(): array
    {
        return [
            Outcomes::Aterkommer->value,
            Outcomes::RingTillbaka->value,
        ];
    }
}
