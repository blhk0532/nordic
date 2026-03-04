<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Team;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:Team');
    }

    public function view(User $authUser, Team $team): bool
    {
        return $authUser->can('View:Team');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:Team');
    }

    public function update(User $authUser, Team $team): bool
    {
        return $authUser->can('Update:Team');
    }

    public function delete(User $authUser, Team $team): bool
    {
        return $authUser->can('Delete:Team');
    }

    public function restore(User $authUser, Team $team): bool
    {
        return $authUser->can('Restore:Team');
    }

    public function forceDelete(User $authUser, Team $team): bool
    {
        return $authUser->can('ForceDelete:Team');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:Team');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:Team');
    }

    public function replicate(User $authUser, Team $team): bool
    {
        return $authUser->can('Replicate:Team');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:Team');
    }
}
