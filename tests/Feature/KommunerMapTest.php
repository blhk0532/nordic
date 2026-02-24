<?php

use App\Filament\Data\Pages\KommunerMap;
use Filament\Schemas\Components\Component as SchemaComponent;

it('returns widgets content component', function () {
    $page = app(KommunerMap::class);

    $component = $page->getWidgetsContentComponent();

    expect($component)->toBeInstanceOf(SchemaComponent::class);
});
