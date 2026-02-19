<style>
    div.fi-input-wrp.fi-fo-rich-editor{
        min-height: 80vh;
    }
</style>
<div
    class="w-full"
    x-init="$nextTick(() => window.dispatchEvent(new Event('resize')))"
    x-on:calendar-resize.window="window.dispatchEvent(new Event('resize'))"
    x-on:open-modal.window="if ($event.detail && $event.detail.id === 'calendar-modal') { setTimeout(() => window.dispatchEvent(new Event('resize')), 50); setTimeout(() => window.dispatchEvent(new Event('resize')), 250); setTimeout(() => window.dispatchEvent(new Event('resize')), 400); }"
        >
    <div class="manus-widget-wrapper m-1" id="manus-widget-wrapper">
            <form class="space-y-6" wire:submit="save" @submit.prevent>
                {{ $this->form }}

                <div class="flex justify-end">
                    <x-filament::button type="submit">
                        Spara
                    </x-filament::button>
                </div>
            </form>
    </div>
</div>
