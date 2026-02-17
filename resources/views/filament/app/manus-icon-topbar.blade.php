{{-- Placeholder view to avoid missing view exceptions from FilamentBookingPlugin --}}
<div class="filament-manus-topbar-icon" style="display:none;"></div>
@php
$isSidebarCollapsibleOnDesktop = filament()->isSidebarCollapsibleOnDesktop();
$anderia = \Andreia\FilamentUiSwitcher\Support\UiPreferenceManager::get('ui.layout', 'sidebar');
$aSiderbar = $anderia === 'sidebar-no-topbar' ? true : false;
@endphp
<div class="fi-no-database" x-data>
<div>
<div class="fi-modal-trigger">
<button
    color="gray"
    icon="heroicon-c-information-circle"
    icon-size="lg"
    label="Kalender"
    @if($anderia === 'sidebar-no-topbar')
    class="fi-sidebar-database-notifications-btn"
    @else
    class="fi-icon-btn fi-size-md fi-topbar-database-notifications-btn"
    @endif
    wire:click="$dispatch('open-modal', { id: 'manus-notes-modal' })"
>

        <x-filament::icon
            icon="heroicon-o-document-text"
            class="fi-icon fi-size-lg"
        />
@php
// dd($anderia);
@endphp

  @if($anderia === 'sidebar-no-topbar')



    <span

            x-show="$store.sidebar.isOpen"
            x-transition:enter="fi-transition-enter"
            x-transition:enter-start="fi-transition-enter-start"
            x-transition:enter-end="fi-transition-enter-end"

        class="fi-sidebar-database-notifications-btn-label"
    >

    </span>
@endif

</button>
 </div>
</div>
</div>

<x-filament::modal
id="manus-notes-modal"
class="manus-notes-modal"
slide-over
width="4xl"
teleport="body"
    x-transition:enter="ease-out duration-300"
    x-transition:enter-start="opacity-0 translate-x-full"
    x-transition:enter-end="opacity-100 translate-x-0"
    x-transition:leave="ease-in-out duration-300"
    x-transition:leave-start="opacity-100 translate-x-0"
    x-transition:leave-end="opacity-0 translate-x-full"
            >
    <x-slot name="heading">

    </x-slot>
     @livewire('manus-icon-modal', [], key('user-notes-modal-' . Auth::id()))

</x-filament::modal>
