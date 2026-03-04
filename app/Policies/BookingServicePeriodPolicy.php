<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\BookingServicePeriod;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingServicePeriodPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:BookingServicePeriod');
    }

    public function view(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('View:BookingServicePeriod');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:BookingServicePeriod');
    }

    public function update(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Update:BookingServicePeriod');
    }

    public function delete(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Delete:BookingServicePeriod');
    }

    public function restore(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Restore:BookingServicePeriod');
    }

    public function forceDelete(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('ForceDelete:BookingServicePeriod');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingServicePeriod');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingServicePeriod');
    }

    public function replicate(User $authUser, BookingServicePeriod $bookingServicePeriod): bool
    {
        return $authUser->can('Replicate:BookingServicePeriod');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:BookingServicePeriod');
    }
}
