<?php

declare(strict_types=1);

namespace App\Filament\Dialer\Resources\BookingOutcallQueues\Pages;

use App\Filament\Dialer\Resources\BookingOutcallQueues\BookingOutcallQueueResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateBookingOutcallQueue extends CreateRecord
{
    protected static string $resource = BookingOutcallQueueResource::class;
}
