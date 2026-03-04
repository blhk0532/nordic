<?php

declare(strict_types=1);

namespace App\Policies;

use Adultdate\FilamentBooking\Models\Booking\DailyLocation;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class DailyLocationPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:DailyLocation');
    }

    public function view(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('View:DailyLocation');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:DailyLocation');
    }

    public function update(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Update:DailyLocation');
    }

    public function delete(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Delete:DailyLocation');
    }

    public function restore(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Restore:DailyLocation');
    }

    public function forceDelete(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('ForceDelete:DailyLocation');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:DailyLocation');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:DailyLocation');
    }

    public function replicate(AuthUser $authUser, DailyLocation $dailyLocation): bool
    {
        return $authUser->can('Replicate:DailyLocation');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:DailyLocation');
    }
}
