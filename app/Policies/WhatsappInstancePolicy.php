<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;
use WallaceMartinss\FilamentEvolution\Models\WhatsappInstance;

class WhatsappInstancePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:WhatsappInstance');
    }

    public function view(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('View:WhatsappInstance');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:WhatsappInstance');
    }

    public function update(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('Update:WhatsappInstance');
    }

    public function delete(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('Delete:WhatsappInstance');
    }

    public function restore(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('Restore:WhatsappInstance');
    }

    public function forceDelete(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('ForceDelete:WhatsappInstance');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:WhatsappInstance');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:WhatsappInstance');
    }

    public function replicate(User $authUser, WhatsappInstance $whatsappInstance): bool
    {
        return $authUser->can('Replicate:WhatsappInstance');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:WhatsappInstance');
    }
}
