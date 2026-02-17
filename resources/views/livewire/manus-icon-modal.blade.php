<div
    class="w-full"
    x-init="$nextTick(() => window.dispatchEvent(new Event('resize')))"
    x-on:calendar-resize.window="window.dispatchEvent(new Event('resize'))">
    <div class="manus-widget-wrapper m-1" id="manus-widget-wrapper">
            <form class="space-y-6" wire:submit="save" @submit.prevent>
                {{ $this->form }}

                <div class="flex justify-end">
                    <x-filament::button type="submit">
                        Spara Anteckningar
                    </x-filament::button>
                </div>
            </form>
    </div>
</div>
