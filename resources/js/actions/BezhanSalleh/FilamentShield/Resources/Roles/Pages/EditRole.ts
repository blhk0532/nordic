import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
const EditRolecf75203911c0f266f20727a4513f2e60 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRolecf75203911c0f266f20727a4513f2e60.url(args, options),
    method: 'get',
})

EditRolecf75203911c0f266f20727a4513f2e60.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/shield/roles/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
EditRolecf75203911c0f266f20727a4513f2e60.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditRolecf75203911c0f266f20727a4513f2e60.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
EditRolecf75203911c0f266f20727a4513f2e60.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRolecf75203911c0f266f20727a4513f2e60.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
EditRolecf75203911c0f266f20727a4513f2e60.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRolecf75203911c0f266f20727a4513f2e60.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
const EditRolecf75203911c0f266f20727a4513f2e60Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRolecf75203911c0f266f20727a4513f2e60.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
EditRolecf75203911c0f266f20727a4513f2e60Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRolecf75203911c0f266f20727a4513f2e60.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}/edit'
*/
EditRolecf75203911c0f266f20727a4513f2e60Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRolecf75203911c0f266f20727a4513f2e60.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRolecf75203911c0f266f20727a4513f2e60.form = EditRolecf75203911c0f266f20727a4513f2e60Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
const EditRole8da8545fa8d4a8244eecbf8cbb516792 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

EditRole8da8545fa8d4a8244eecbf8cbb516792.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditRole8da8545fa8d4a8244eecbf8cbb516792.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
const EditRole8da8545fa8d4a8244eecbf8cbb516792Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRole8da8545fa8d4a8244eecbf8cbb516792.form = EditRole8da8545fa8d4a8244eecbf8cbb516792Form

const EditRole = {
    '/admin/tenant/{tenant}/shield/roles/{record}/edit': EditRolecf75203911c0f266f20727a4513f2e60,
    '/nds/super/shield/roles/{record}/edit': EditRole8da8545fa8d4a8244eecbf8cbb516792,
}

export default EditRole