<?php

declare(strict_types=1);

use Adultdate\FilamentBooking\Enums\BookingStatus as PackageBookingStatus;
use App\Enums\BookingStatus as AppBookingStatus;

it('uses booking status values that match the database enum', function (): void {
    $expectedValues = [
        'booked',
        'processing',
        'confirmed',
        'updated',
        'cancelled',
        'complete',
    ];

    expect(array_map(fn (PackageBookingStatus $status): string => $status->value, PackageBookingStatus::cases()))
        ->toBe($expectedValues);

    expect(array_map(fn (AppBookingStatus $status): string => $status->value, AppBookingStatus::cases()))
        ->toBe($expectedValues);
});

it('builds keyed status options by stored value', function (): void {
    expect(PackageBookingStatus::toOptions())->toHaveKeys([
        'booked',
        'processing',
        'confirmed',
        'updated',
        'cancelled',
        'complete',
    ]);

    expect(AppBookingStatus::toOptions())->toHaveKeys([
        'booked',
        'processing',
        'confirmed',
        'updated',
        'cancelled',
        'complete',
    ]);
});

it('returns calendar event colors by booking status', function (): void {
    expect(PackageBookingStatus::Booked->getCalendarColor())->toBe('#6366f1');
    expect(PackageBookingStatus::Pending->getCalendarColor())->toBe('#6b7280');
    expect(PackageBookingStatus::Confirmed->getCalendarColor())->toBe('#f59e0b');
    expect(PackageBookingStatus::Updated->getCalendarColor())->toBe('#06b6d4');
    expect(PackageBookingStatus::Cancelled->getCalendarColor())->toBe('#ef4444');
    expect(PackageBookingStatus::Complete->getCalendarColor())->toBe('#22c55e');

    expect(AppBookingStatus::Booked->getCalendarColor())->toBe('#6366f1');
    expect(AppBookingStatus::Pending->getCalendarColor())->toBe('#6b7280');
    expect(AppBookingStatus::Confirmed->getCalendarColor())->toBe('#f59e0b');
    expect(AppBookingStatus::Updated->getCalendarColor())->toBe('#06b6d4');
    expect(AppBookingStatus::Cancelled->getCalendarColor())->toBe('#ef4444');
    expect(AppBookingStatus::Complete->getCalendarColor())->toBe('#22c55e');
});
