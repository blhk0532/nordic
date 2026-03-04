<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\WhatsappAgent;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class WhatsappAgentPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:WhatsappAgent');
    }

    public function view(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('View:WhatsappAgent');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:WhatsappAgent');
    }

    public function update(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Update:WhatsappAgent');
    }

    public function delete(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Delete:WhatsappAgent');
    }

    public function restore(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Restore:WhatsappAgent');
    }

    public function forceDelete(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('ForceDelete:WhatsappAgent');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:WhatsappAgent');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:WhatsappAgent');
    }

    public function replicate(User $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Replicate:WhatsappAgent');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:WhatsappAgent');
    }
}
