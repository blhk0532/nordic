<div
    class="w-full"
    x-init="$nextTick(() => window.dispatchEvent(new Event('resize')))"
    x-on:calendar-resize.window="window.dispatchEvent(new Event('resize'))"
    x-transition:enter="ease-out duration-300"
    x-transition:enter-start="opacity-0 translate-x-full"
    x-transition:enter-end="opacity-100 translate-x-0"
    x-transition:leave="ease-in-out duration-300"
    x-transition:leave-start="opacity-100 translate-x-0"
    x-transition:leave-end="opacity-0 translate-x-full"
>
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
