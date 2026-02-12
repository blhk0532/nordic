<x-filament::icon-button
    :badge="$unreadNotificationsCount ?: null"
    color="gray"
    :icon="\Filament\Support\Icons\Heroicon::OutlinedBell"
    :icon-alias="\Filament\View\PanelsIconAlias::TOPBAR_OPEN_DATABASE_NOTIFICATIONS_BUTTON"
    icon-size="lg"
    :label="__('filament-panels::layout.actions.open_database_notifications.label')"
    class="fi-topbar-database-notifications-btn"
/>

{{-- Mount user notes slide-over globally so it can receive open-modal/open events on any page --}}
@livewire('user-notes-working', [], key('user-notes-working-' . Auth::id()))
