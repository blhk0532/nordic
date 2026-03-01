<div>
    <x-filament-panels::page.simple>
        @props([
            'heading' => null,
            'subheading' => null,
        ])

        {{ $this->content }}

    </x-filament-panels::page.simple>

    <form id="logout-form" action="{{ url(filament()->getCurrentPanel()?->getLogoutUrl() ?? route('logout')) }}" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>

</div>

