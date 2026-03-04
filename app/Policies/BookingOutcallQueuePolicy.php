<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\BookingOutcallQueue;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingOutcallQueuePolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:BookingOutcallQueue');
    }

    public function view(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('View:BookingOutcallQueue');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:BookingOutcallQueue');
    }

    public function update(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Update:BookingOutcallQueue');
    }

    public function delete(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Delete:BookingOutcallQueue');
    }

    public function restore(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Restore:BookingOutcallQueue');
    }

    public function forceDelete(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('ForceDelete:BookingOutcallQueue');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingOutcallQueue');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingOutcallQueue');
    }

    public function replicate(AuthUser $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Replicate:BookingOutcallQueue');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:BookingOutcallQueue');
    }
}
