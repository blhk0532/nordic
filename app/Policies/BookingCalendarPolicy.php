<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\BookingCalendar;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingCalendarPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:BookingCalendar');
    }

    public function view(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('View:BookingCalendar');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:BookingCalendar');
    }

    public function update(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Update:BookingCalendar');
    }

    public function delete(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Delete:BookingCalendar');
    }

    public function restore(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Restore:BookingCalendar');
    }

    public function forceDelete(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('ForceDelete:BookingCalendar');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingCalendar');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingCalendar');
    }

    public function replicate(User $authUser, BookingCalendar $bookingCalendar): bool
    {
        return $authUser->can('Replicate:BookingCalendar');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:BookingCalendar');
    }
}
