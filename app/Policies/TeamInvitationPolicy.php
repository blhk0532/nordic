<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\TeamInvitation;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class TeamInvitationPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:TeamInvitation');
    }

    public function view(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('View:TeamInvitation');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:TeamInvitation');
    }

    public function update(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Update:TeamInvitation');
    }

    public function delete(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Delete:TeamInvitation');
    }

    public function restore(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Restore:TeamInvitation');
    }

    public function forceDelete(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('ForceDelete:TeamInvitation');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:TeamInvitation');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:TeamInvitation');
    }

    public function replicate(AuthUser $authUser, TeamInvitation $teamInvitation): bool
    {
        return $authUser->can('Replicate:TeamInvitation');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:TeamInvitation');
    }
}
