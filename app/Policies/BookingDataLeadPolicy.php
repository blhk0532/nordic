<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\BookingDataLead;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingDataLeadPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:BookingDataLead');
    }

    public function view(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('View:BookingDataLead');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:BookingDataLead');
    }

    public function update(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Update:BookingDataLead');
    }

    public function delete(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Delete:BookingDataLead');
    }

    public function restore(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Restore:BookingDataLead');
    }

    public function forceDelete(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('ForceDelete:BookingDataLead');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingDataLead');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingDataLead');
    }

    public function replicate(User $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Replicate:BookingDataLead');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:BookingDataLead');
    }
}
