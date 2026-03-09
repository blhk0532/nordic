<?php

declare(strict_types=1);

it('uses outcome settings instead of Outcomes2 enum in ringa data infolist', function () {
    $file = file_get_contents(app_path('Filament/App/Resources/RingaListan/Schemas/RingaDataInfolist.php'));
    $outcomesFile = file_get_contents(app_path('Filament/App/Resources/RingaListan/Schemas/RingaDataInfolistOutcomes.php'));

    expect($file)
        ->toContain('RingaDataInfolistPrimary::make()')
        ->toContain('RingaDataInfolistOutcomes::make($record, $component)')
        ->toContain('RingaDataInfolistPhoneNumbers::make($record)')
        ->toContain('RingaDataInfolistNotes::make()')
        ->not->toContain('\\App\\Enums\\Outcomes2::cases()');

    expect($outcomesFile)
        ->toContain('OutcomeSetting::query()')
        ->toContain('->button()')
        ->toContain("'style' =>")
        ->toContain('!important')
        ->toContain('getFallbackIcon(')
        ->toContain('->action(function (array $data, $record)')
        ->toContain('->modal()')
        ->toContain('getSpecialModalSchema(')
        ->toContain("request()->header('referer')")
        ->not->toContain('\\App\\Enums\\Outcomes2::cases()');
});
