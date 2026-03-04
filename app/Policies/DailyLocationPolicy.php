<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\Booking\DailyLocation;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class DailyLocationPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:DailyLocation');
    }

    public function view(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('View:DailyLocation');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:DailyLocation');
    }

    public function update(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Update:DailyLocation');
    }

    public function delete(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Delete:DailyLocation');
    }

    public function restore(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Restore:DailyLocation');
    }

    public function forceDelete(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('ForceDelete:DailyLocation');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:DailyLocation');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:DailyLocation');
    }

    public function replicate(User $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Replicate:DailyLocation');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:DailyLocation');
    }
}
