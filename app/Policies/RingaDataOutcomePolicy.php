<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\RingaDataOutcome;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RingaDataOutcomePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:RingaDataOutcome');
    }

    public function view(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('View:RingaDataOutcome');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:RingaDataOutcome');
    }

    public function update(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('Update:RingaDataOutcome');
    }

    public function delete(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('Delete:RingaDataOutcome');
    }

    public function restore(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('Restore:RingaDataOutcome');
    }

    public function forceDelete(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('ForceDelete:RingaDataOutcome');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:RingaDataOutcome');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:RingaDataOutcome');
    }

    public function replicate(User $authUser, RingaDataOutcome $ringaDataOutcome): bool
    {
        return $authUser->can('Replicate:RingaDataOutcome');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:RingaDataOutcome');
    }
}
