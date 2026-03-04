<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\BookingServicePeriod;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingServicePeriodPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:BookingServicePeriod');
    }

    public function view(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('View:BookingServicePeriod');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:BookingServicePeriod');
    }

    public function update(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Update:BookingServicePeriod');
    }

    public function delete(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Delete:BookingServicePeriod');
    }

    public function restore(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Restore:BookingServicePeriod');
    }

    public function forceDelete(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('ForceDelete:BookingServicePeriod');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingServicePeriod');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingServicePeriod');
    }

    public function replicate(AuthUser $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Replicate:BookingServicePeriod');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:BookingServicePeriod');
    }
}
