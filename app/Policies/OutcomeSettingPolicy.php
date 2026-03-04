<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\OutcomeSetting;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class OutcomeSettingPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:OutcomeSetting');
    }

    public function view(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('View:OutcomeSetting');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:OutcomeSetting');
    }

    public function update(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Update:OutcomeSetting');
    }

    public function delete(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Delete:OutcomeSetting');
    }

    public function restore(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Restore:OutcomeSetting');
    }

    public function forceDelete(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('ForceDelete:OutcomeSetting');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:OutcomeSetting');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:OutcomeSetting');
    }

    public function replicate(User $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Replicate:OutcomeSetting');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:OutcomeSetting');
    }
}
