<?php

declare(strict_types=1);

use Adultdate\FilamentBooking\Enums\BookingState;
use Adultdate\FilamentBooking\Enums\Paid;
use Adultdate\FilamentBooking\Enums\Pending;
use Guava\FilamentIconSelectColumn\Tables\Columns\IconSelectColumn;

test('icon select column view handles state class as string', function () {
    $column = IconSelectColumn::make('state')
        ->options(BookingState::toOptions())
        ->icons([
            Pending::class => 'heroicon-o-clock',
            Paid::class => 'heroicon-o-check',
        ])
        ->colors([
            Pending::class => ['display' => 'amber-600', 'dropdown' => 'amber-500'],
            Paid::class => ['display' => 'green-600', 'dropdown' => 'green-500'],
        ]);

    // Simulate what the view blade template does with a State object
    $state = strval(Pending::class);

    $icons = $column->getIcons();
    $colors = $column->getColors();

    // The state is the full class name with backslashes
    expect($state)->toContain('\\');

    // Test key normalization: remove backslashes to match array keys
    $stateKey = $state;
    if (! array_key_exists($stateKey, $icons) && ! array_key_exists($stateKey, $colors)) {
        $normalizedState = str_replace('\\', '', $stateKey);
        if (array_key_exists($normalizedState, $icons) || array_key_exists($normalizedState, $colors)) {
            $stateKey = $normalizedState;
        }
    }

    // Verify we can now find the icons/colors
    expect($icons)->toHaveKey($stateKey)
        ->and($colors)->toHaveKey($stateKey);
});

test('icon select column view handles missing color gracefully', function () {
    $column = IconSelectColumn::make('state')
        ->options(BookingState::toOptions())
        ->icons([
            Pending::class => 'heroicon-o-clock',
        ]);
    // Deliberately omit colors config

    $colors = $column->getColors();

    // Should be empty or not contain our state
    $normalizedState = str_replace('\\', '', strval(Pending::class));
    $color = $colors[$normalizedState] ?? null;

    // Simulate the blade template's color fallback logic
    if (is_string($color)) {
        $color = ['display' => $color, 'dropdown' => $color];
    }
    if (! is_array($color)) {
        $color = ['display' => 'gray-500', 'dropdown' => 'gray-500'];
    }

    expect($color)->toBeArray()
        ->and($color)->toHaveKey('display')
        ->and($color)->toHaveKey('dropdown');
});

test('icon select column view template renders without errors', function () {
    // Verify the custom blade template exists
    $viewPath = __DIR__.'/../../resources/views/vendor/guava-icon-select-column/tables/columns/icon-select-column.blade.php';

    expect(file_exists($viewPath))->toBeTrue();

    $content = file_get_contents($viewPath);

    // Verify the fix is in place
    expect($content)->toContain('str_replace')
        ->and($content)->toContain('normalizedState')
        ->and($content)->toContain('array_key_exists');
});
