<div>
    <button
        class="fi-icon-btn fi-size-md fi-topbar-database-notifications-btn"
        tooltip="Ringa Data"
        color="gray"
        size="md"
        x-on:click.prevent="$dispatch('open-modal', { id: 'global-ringa-data-search' })"
    >
        <x-filament::icon
            icon="heroicon-o-phone-arrow-up-right"
            class="fi-icon fi-size-md"
        />
    </button>

    @livewire(\App\Livewire\GlobalRingaDataSearch::class)
</div>
