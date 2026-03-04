<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;
use MWGuerra\WebTerminal\Models\TerminalLog;

class TerminalLogPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:TerminalLog');
    }

    public function view(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('View:TerminalLog');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:TerminalLog');
    }

    public function update(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('Update:TerminalLog');
    }

    public function delete(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('Delete:TerminalLog');
    }

    public function restore(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('Restore:TerminalLog');
    }

    public function forceDelete(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('ForceDelete:TerminalLog');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:TerminalLog');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:TerminalLog');
    }

    public function replicate(User $authUser, TerminalLog $terminalLog): bool
    {
        return $authUser->can('Replicate:TerminalLog');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:TerminalLog');
    }
}
