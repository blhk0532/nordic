<?php

use BezhanSalleh\FilamentShield\Resources\Roles\RoleResource;

test('filament-shield role resource has correct tenancy configuration', function () {
    expect(RoleResource::getTenantOwnershipRelationshipName())->toBe('users');
    expect(RoleResource::isScopedToTenant())->toBeFalse();
});
