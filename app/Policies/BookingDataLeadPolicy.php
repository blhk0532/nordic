<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\BookingDataLead;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class BookingDataLeadPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:BookingDataLead');
    }

    public function view(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('View:BookingDataLead');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:BookingDataLead');
    }

    public function update(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Update:BookingDataLead');
    }

    public function delete(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Delete:BookingDataLead');
    }

    public function restore(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Restore:BookingDataLead');
    }

    public function forceDelete(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('ForceDelete:BookingDataLead');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:BookingDataLead');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:BookingDataLead');
    }

    public function replicate(AuthUser $authUser, BookingDataLead $bookingDataLead): bool
    {
        return $authUser->can('Replicate:BookingDataLead');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:BookingDataLead');
    }
}
