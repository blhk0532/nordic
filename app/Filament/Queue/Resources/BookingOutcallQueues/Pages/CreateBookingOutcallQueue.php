<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\BookingOutcallQueues\Pages;

use App\Filament\Queue\Resources\BookingOutcallQueues\BookingOutcallQueueResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateBookingOutcallQueue extends CreateRecord
{
    protected static string $resource = BookingOutcallQueueResource::class;
}
