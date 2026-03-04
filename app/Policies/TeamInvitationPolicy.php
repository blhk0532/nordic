<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\TeamInvitation;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class TeamInvitationPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:TeamInvitation');
    }

    public function view(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('View:TeamInvitation');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:TeamInvitation');
    }

    public function update(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Update:TeamInvitation');
    }

    public function delete(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Delete:TeamInvitation');
    }

    public function restore(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Restore:TeamInvitation');
    }

    public function forceDelete(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('ForceDelete:TeamInvitation');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:TeamInvitation');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:TeamInvitation');
    }

    public function replicate(User $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Replicate:TeamInvitation');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:TeamInvitation');
    }
}
