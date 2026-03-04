<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\OutcomeSetting;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class OutcomeSettingPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:OutcomeSetting');
    }

    public function view(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('View:OutcomeSetting');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:OutcomeSetting');
    }

    public function update(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Update:OutcomeSetting');
    }

    public function delete(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Delete:OutcomeSetting');
    }

    public function restore(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Restore:OutcomeSetting');
    }

    public function forceDelete(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('ForceDelete:OutcomeSetting');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:OutcomeSetting');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:OutcomeSetting');
    }

    public function replicate(AuthUser $authUser, OutcomeSetting $outcomeSetting): bool
    {
        return $authUser->can('Replicate:OutcomeSetting');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:OutcomeSetting');
    }
}
