<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Auth\User as AuthUser;
use TallCms\Cms\Models\CmsComment;

class CmsCommentPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $authUser): bool
    {
        return $authUser->can('ViewAny:CmsComment');
    }

    public function view(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('View:CmsComment');
    }

    public function create(User $authUser): bool
    {
        return $authUser->can('Create:CmsComment');
    }

    public function update(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('Update:CmsComment');
    }

    public function delete(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('Delete:CmsComment');
    }

    public function restore(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('Restore:CmsComment');
    }

    public function forceDelete(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('ForceDelete:CmsComment');
    }

    public function forceDeleteAny(User $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:CmsComment');
    }

    public function restoreAny(User $authUser): bool
    {
        return $authUser->can('RestoreAny:CmsComment');
    }

    public function replicate(User $authUser, CmsComment $cmsComment): bool
    {
        return $authUser->can('Replicate:CmsComment');
    }

    public function reorder(User $authUser): bool
    {
        return $authUser->can('Reorder:CmsComment');
    }
}
