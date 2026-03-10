<?php

declare(strict_types=1);

use Adultdate\FilamentBooking\Enums\BookingStatus;

it('uses canonical booking status values in app booking tabs', function () {
    $files = [
        'app/Filament/App/Resources/Bookings/Pages/ListBookings.php',
        'app/Filament/App/Clusters/Services/Resources/Bookings/Pages/ListBookings.php',
        'app/Filament/Clients/Clusters/Services/Resources/Bookings/Pages/ListBookings.php',
        'app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/ListBookings.php',
    ];

    foreach ($files as $path) {
        $file = file_get_contents(base_path($path));

        expect($file)->toContain('BookingStatus::Booked->value')
            ->and($file)->toContain('BookingStatus::Cancelled->value')
            ->and($file)->toContain('BookingStatus::Confirmed->value')
            ->and($file)->toContain('BookingStatus::Complete->value')
            ->and($file)->not->toContain("where('status', 'completed')");
    }
});

it('keeps completed booking value as complete', function () {
    expect(BookingStatus::Complete->value)->toBe('complete');
});
