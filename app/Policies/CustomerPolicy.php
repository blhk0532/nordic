<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\Booking\Customer;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class CustomerPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:Customer');
    }

    public function view(User $authUser, Customer $customer): bool
    {
        return $authUser->can('View:Customer');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:Customer');
    }

    public function update(User $authUser, Customer $customer): bool
    {
        return $authUser->can('Update:Customer');
    }

    public function delete(User $authUser, Customer $customer): bool
    {
        return $authUser->can('Delete:Customer');
    }

    public function restore(User $authUser, Customer $customer): bool
    {
        return $authUser->can('Restore:Customer');
    }

    public function forceDelete(User $authUser, Customer $customer): bool
    {
        return $authUser->can('ForceDelete:Customer');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:Customer');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:Customer');
    }

    public function replicate(User $authUser, Customer $customer): bool
    {
        return $authUser->can('Replicate:Customer');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:Customer');
    }
}
