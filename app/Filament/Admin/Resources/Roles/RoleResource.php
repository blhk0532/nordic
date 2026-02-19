<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Roles;

use BezhanSalleh\FilamentShield\Resources\Roles\RoleResource as ShieldRoleResource;

class RoleResource extends ShieldRoleResource
{
    /**
     * Disable tenant scoping for roles since the Role model from Spatie\Permission
     * doesn't have a 'user' relationship for tenant ownership.
     */
    protected static bool $isScopedToTenant = false;
}
