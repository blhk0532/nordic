<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\BookingCalendar;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingCalendarPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:BookingCalendar');
    }

    public function view(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('View:BookingCalendar');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:BookingCalendar');
    }

    public function update(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Update:BookingCalendar');
    }

    public function delete(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Delete:BookingCalendar');
    }

    public function restore(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Restore:BookingCalendar');
    }

    public function forceDelete(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('ForceDelete:BookingCalendar');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingCalendar');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingCalendar');
    }

    public function replicate(AuthUser $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Replicate:BookingCalendar');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:BookingCalendar');
    }
}
