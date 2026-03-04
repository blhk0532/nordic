<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\WhatsappAgent;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;

class WhatsappAgentPolicy
{
    use HandlesAuthorization;

    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:WhatsappAgent');
    }

    public function view(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('View:WhatsappAgent');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:WhatsappAgent');
    }

    public function update(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Update:WhatsappAgent');
    }

    public function delete(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Delete:WhatsappAgent');
    }

    public function restore(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Restore:WhatsappAgent');
    }

    public function forceDelete(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('ForceDelete:WhatsappAgent');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:WhatsappAgent');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:WhatsappAgent');
    }

    public function replicate(AuthUser $authUser, WhatsappAgent $whatsappAgent): bool
    {
        return $authUser->can('Replicate:WhatsappAgent');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:WhatsappAgent');
    }
}
