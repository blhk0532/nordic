<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use Illuminate\Database\Eloquent\Builder;
use App\Models\RingaData;
use Filament\Widgets\Widget;
use Livewire\Attributes\On;
use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaDatas\RingaDatasResource;

class RingaDataOutcomeFormWidget extends Widget
{
    public ?RingaData $record = null;

    public ?string $tenant = null;

    protected static ?string $heading = 'Call Outcomes';

    protected int|string|array $columnSpan = '1/2';

    protected static ?int $sort = 2;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-outcome-form-widget';

    public function mount(): void
    {
        // Get tenant from Filament (uses slug for routing)
        $tenant = filament()->getTenant();
        $this->tenant = $tenant ? $tenant->slug : null;
        logger('Widget tenant set from Filament', ['tenant' => $this->tenant, 'tenant_id' => $tenant?->id, 'tenant_slug' => $tenant?->slug]);

        // Load initial record - the page will send record-selected event if it has a different record
        $this->loadInitialRecord();
    }

    #[On('record-selected')]
    public function updateRecord(int $recordId): void
    {
        $this->record = RingaData::find($recordId);
        logger('Widget updated record via event', ['recordId' => $recordId, 'found' => (bool) $this->record]);
    }

    private function loadInitialRecord(): void
    {

        logger('Widget loaded initial record', ['recordId' => $this->record?->id, 'user_id' => auth()->id(), 'tenant_id' => filament()->getTenant()?->id]);
    }
}
