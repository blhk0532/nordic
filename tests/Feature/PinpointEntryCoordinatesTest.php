<?php

declare(strict_types=1);

use Fahiem\FilamentPinpoint\PinpointEntry;

it('casts string coordinates from record to floats', function () {
    $entry = PinpointEntry::make('location')
        ->latField('latitude')
        ->lngField('longitude')
        ->record([
            'latitude' => '59.329300',
            'longitude' => '18.068600',
        ]);

    expect($entry->getLat())
        ->toBeFloat()
        ->toBe(59.3293);

    expect($entry->getLng())
        ->toBeFloat()
        ->toBe(18.0686);
});

it('falls back to defaults when coordinates are not numeric', function () {
    $entry = PinpointEntry::make('location')
        ->latField('latitude')
        ->lngField('longitude')
        ->defaultLocation(57.7, 11.97)
        ->record([
            'latitude' => '',
            'longitude' => 'not-a-number',
        ]);

    expect($entry->getLat())->toBe(57.7);
    expect($entry->getLng())->toBe(11.97);
});

it('returns configured map type', function () {
    $entry = PinpointEntry::make('location')
        ->mapType('satellite');

    expect($entry->getMapType())->toBe('satellite');
});
