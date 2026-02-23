<div>
    <button
        class="fi-icon-btn fi-size-md fi-topbar-database-notifications-btn"
        tooltip="AI Assistant"
        color="gray"
        size="lg"
        x-on:click.prevent="$dispatch('open-modal', { id: 'global-ai-search' })"
    >
        <x-filament::icon
            icon="heroicon-o-chat-bubble-left-ellipsis"
            class="fi-icon fi-size-lg"
        />
    </button>
</div>
@livewire(\App\Livewire\GlobalAISearch::class)
