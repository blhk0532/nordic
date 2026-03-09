<?php

declare(strict_types=1);

it('uses outcome settings instead of Outcomes2 enum in ringa data infolist', function () {
    $file = file_get_contents(app_path('Filament/App/Resources/RingaListan/Schemas/RingaDataInfolist.php'));

    expect($file)
        ->toContain('OutcomeSetting::query()')
        ->toContain('->button()')
        ->toContain("'style' =>")
        ->toContain('!important')
        ->toContain('getFallbackIcon(')
        ->toContain('->action(function (array $data, $record)')
        ->toContain('->modal()')
        ->toContain('getSpecialModalSchema(')
        ->toContain('redirect(request()->fullUrl(), navigate: true)')
        ->not->toContain('\\App\\Enums\\Outcomes2::cases()');
});
