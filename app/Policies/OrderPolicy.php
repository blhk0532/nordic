<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\Booking\Order;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class OrderPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:Order');
    }

    public function view(User $authUser, Order $order): bool
    {
        return $authUser->can('View:Order');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:Order');
    }

    public function update(User $authUser, Order $order): bool
    {
        return $authUser->can('Update:Order');
    }

    public function delete(User $authUser, Order $order): bool
    {
        return $authUser->can('Delete:Order');
    }

    public function restore(User $authUser, Order $order): bool
    {
        return $authUser->can('Restore:Order');
    }

    public function forceDelete(User $authUser, Order $order): bool
    {
        return $authUser->can('ForceDelete:Order');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:Order');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:Order');
    }

    public function replicate(User $authUser, Order $order): bool
    {
        return $authUser->can('Replicate:Order');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:Order');
    }
}
