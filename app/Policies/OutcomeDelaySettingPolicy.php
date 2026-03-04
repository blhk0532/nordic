<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\OutcomeDelaySetting;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class OutcomeDelaySettingPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:OutcomeDelaySetting');
    }

    public function view(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('View:OutcomeDelaySetting');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:OutcomeDelaySetting');
    }

    public function update(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Update:OutcomeDelaySetting');
    }

    public function delete(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Delete:OutcomeDelaySetting');
    }

    public function restore(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Restore:OutcomeDelaySetting');
    }

    public function forceDelete(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('ForceDelete:OutcomeDelaySetting');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:OutcomeDelaySetting');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:OutcomeDelaySetting');
    }

    public function replicate(AuthUser $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Replicate:OutcomeDelaySetting');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:OutcomeDelaySetting');
    }
}
