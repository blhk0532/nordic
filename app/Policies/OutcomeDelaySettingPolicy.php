<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\OutcomeDelaySetting;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class OutcomeDelaySettingPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:OutcomeDelaySetting');
    }

    public function view(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('View:OutcomeDelaySetting');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:OutcomeDelaySetting');
    }

    public function update(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Update:OutcomeDelaySetting');
    }

    public function delete(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Delete:OutcomeDelaySetting');
    }

    public function restore(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Restore:OutcomeDelaySetting');
    }

    public function forceDelete(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('ForceDelete:OutcomeDelaySetting');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:OutcomeDelaySetting');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:OutcomeDelaySetting');
    }

    public function replicate(User $authUser, OutcomeDelaySetting $outcomeDelaySetting): bool
    {
        return $authUser->can('Replicate:OutcomeDelaySetting');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:OutcomeDelaySetting');
    }
}
