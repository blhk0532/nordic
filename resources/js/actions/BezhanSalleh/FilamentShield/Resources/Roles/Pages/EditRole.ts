import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
const EditRole61f9c02ea4903bb76446836dcad16832 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole61f9c02ea4903bb76446836dcad16832.url(args, options),
    method: 'get',
})

EditRole61f9c02ea4903bb76446836dcad16832.definition = {
    methods: ["get","head"],
    url: '/nds/admin/shield/roles/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
EditRole61f9c02ea4903bb76446836dcad16832.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRole61f9c02ea4903bb76446836dcad16832.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
EditRole61f9c02ea4903bb76446836dcad16832.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole61f9c02ea4903bb76446836dcad16832.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
EditRole61f9c02ea4903bb76446836dcad16832.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRole61f9c02ea4903bb76446836dcad16832.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
const EditRole61f9c02ea4903bb76446836dcad16832Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole61f9c02ea4903bb76446836dcad16832.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
EditRole61f9c02ea4903bb76446836dcad16832Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole61f9c02ea4903bb76446836dcad16832.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/admin/shield/roles/{record}/edit'
*/
EditRole61f9c02ea4903bb76446836dcad16832Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole61f9c02ea4903bb76446836dcad16832.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRole61f9c02ea4903bb76446836dcad16832.form = EditRole61f9c02ea4903bb76446836dcad16832Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
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
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
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
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
const EditRole8da8545fa8d4a8244eecbf8cbb516792Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
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
    '/nds/admin/shield/roles/{record}/edit': EditRole61f9c02ea4903bb76446836dcad16832,
    '/nds/super/shield/roles/{record}/edit': EditRole8da8545fa8d4a8244eecbf8cbb516792,
}

export default EditRole