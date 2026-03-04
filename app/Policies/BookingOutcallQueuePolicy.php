<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\BookingOutcallQueue;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingOutcallQueuePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:BookingOutcallQueue');
    }

    public function view(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('View:BookingOutcallQueue');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:BookingOutcallQueue');
    }

    public function update(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Update:BookingOutcallQueue');
    }

    public function delete(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Delete:BookingOutcallQueue');
    }

    public function restore(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Restore:BookingOutcallQueue');
    }

    public function forceDelete(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('ForceDelete:BookingOutcallQueue');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingOutcallQueue');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingOutcallQueue');
    }

    public function replicate(User $authUser, BookingOutcallQueue $bookingOutcallQueue): bool
    {
        return $authUser->can('Replicate:BookingOutcallQueue');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:BookingOutcallQueue');
    }
}
