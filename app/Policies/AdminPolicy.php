<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class AdminPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:Admin');
    }

    public function view(User $authUser): bool
    {
        return $authUser->can('View:Admin');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:Admin');
    }

    public function update(User $authUser): bool
    {
        return $authUser->can('Update:Admin');
    }

    public function delete(User $authUser): bool
    {
        return $authUser->can('Delete:Admin');
    }

    public function restore(User $authUser): bool
    {
        return $authUser->can('Restore:Admin');
    }

    public function forceDelete(User $authUser): bool
    {
        return $authUser->can('ForceDelete:Admin');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:Admin');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:Admin');
    }

    public function replicate(User $authUser): bool
    {
        return $authUser->can('Replicate:Admin');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:Admin');
    }
}
