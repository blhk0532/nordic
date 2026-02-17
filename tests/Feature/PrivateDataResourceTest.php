<?php

declare(strict_types=1);

use App\Models\PrivateData;

it('has correct fillable attributes', function (): void {
    $privateData = new PrivateData;
    $fillable = $privateData->getFillable();

    expect($fillable)->toContain('personnamn')
        ->toContain('fornamn')
        ->toContain('efternamn')
        ->toContain('personnummer')
        ->toContain('gatuadress')
        ->toContain('postnummer')
        ->toContain('postort')
        ->toContain('is_active')
        ->toContain('is_update');
});

it('has correct casts', function (): void {
    $privateData = new PrivateData;
    $casts = $privateData->getCasts();

    expect($casts)->toHaveKey('telfonnummer', 'array')
        ->toHaveKey('telefon', 'array')
        ->toHaveKey('ps_telefon', 'array')
        ->toHaveKey('ps_epost_adress', 'array')
        ->toHaveKey('is_active', 'boolean')
        ->toHaveKey('is_update', 'boolean');
});

it('has correct table name', function (): void {
    $privateData = new PrivateData;

    expect($privateData->getTable())->toBe('private_data');
});

it('has timestamps enabled', function (): void {
    $privateData = new PrivateData;

    expect($privateData->timestamps)->toBeTrue();
});
