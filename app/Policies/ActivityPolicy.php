<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;
use Spatie\Activitylog\Models\Activity;

class ActivityPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:Activity');
    }

    public function view(User $authUser, Activity $activity): bool
    {
        return $authUser->can('View:Activity');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:Activity');
    }

    public function update(User $authUser, Activity $activity): bool
    {
        return $authUser->can('Update:Activity');
    }

    public function delete(User $authUser, Activity $activity): bool
    {
        return $authUser->can('Delete:Activity');
    }

    public function restore(User $authUser, Activity $activity): bool
    {
        return $authUser->can('Restore:Activity');
    }

    public function forceDelete(User $authUser, Activity $activity): bool
    {
        return $authUser->can('ForceDelete:Activity');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:Activity');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:Activity');
    }

    public function replicate(User $authUser, Activity $activity): bool
    {
        return $authUser->can('Replicate:Activity');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:Activity');
    }
}
