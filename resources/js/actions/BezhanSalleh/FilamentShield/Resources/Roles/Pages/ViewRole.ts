import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
const ViewRole90450831673b0ca28fffdfb5860261a2 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, options),
    method: 'get',
})

ViewRole90450831673b0ca28fffdfb5860261a2.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
ViewRole90450831673b0ca28fffdfb5860261a2.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewRole90450831673b0ca28fffdfb5860261a2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
ViewRole90450831673b0ca28fffdfb5860261a2.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
ViewRole90450831673b0ca28fffdfb5860261a2.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
const ViewRole90450831673b0ca28fffdfb5860261a2Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
ViewRole90450831673b0ca28fffdfb5860261a2Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/{record}'
*/
ViewRole90450831673b0ca28fffdfb5860261a2Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole90450831673b0ca28fffdfb5860261a2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRole90450831673b0ca28fffdfb5860261a2.form = ViewRole90450831673b0ca28fffdfb5860261a2Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
const ViewRoleea2f3552cdaeb37981ea15512ab83877 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, options),
    method: 'get',
})

ViewRoleea2f3552cdaeb37981ea15512ab83877.definition = {
    methods: ["get","head"],
    url: '/nds/adm/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
ViewRoleea2f3552cdaeb37981ea15512ab83877.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRoleea2f3552cdaeb37981ea15512ab83877.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
ViewRoleea2f3552cdaeb37981ea15512ab83877.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
ViewRoleea2f3552cdaeb37981ea15512ab83877.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
const ViewRoleea2f3552cdaeb37981ea15512ab83877Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
ViewRoleea2f3552cdaeb37981ea15512ab83877Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/adm/shield/roles/{record}'
*/
ViewRoleea2f3552cdaeb37981ea15512ab83877Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoleea2f3552cdaeb37981ea15512ab83877.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRoleea2f3552cdaeb37981ea15512ab83877.form = ViewRoleea2f3552cdaeb37981ea15512ab83877Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
const ViewRole5e9081f7016bfe540266d3bf96b54521 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

ViewRole5e9081f7016bfe540266d3bf96b54521.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRole5e9081f7016bfe540266d3bf96b54521.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
const ViewRole5e9081f7016bfe540266d3bf96b54521Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRole5e9081f7016bfe540266d3bf96b54521.form = ViewRole5e9081f7016bfe540266d3bf96b54521Form

const ViewRole = {
    '/admin/tenant/{tenant}/shield/roles/{record}': ViewRole90450831673b0ca28fffdfb5860261a2,
    '/nds/adm/shield/roles/{record}': ViewRoleea2f3552cdaeb37981ea15512ab83877,
    '/nds/super/shield/roles/{record}': ViewRole5e9081f7016bfe540266d3bf96b54521,
}

export default ViewRole