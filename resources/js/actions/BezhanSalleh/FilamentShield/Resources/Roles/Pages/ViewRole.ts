import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
const ViewRolec705897da64992a66b3431c59afb9b50 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRolec705897da64992a66b3431c59afb9b50.url(args, options),
    method: 'get',
})

ViewRolec705897da64992a66b3431c59afb9b50.definition = {
    methods: ["get","head"],
    url: '/nds/admin/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
ViewRolec705897da64992a66b3431c59afb9b50.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRolec705897da64992a66b3431c59afb9b50.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
ViewRolec705897da64992a66b3431c59afb9b50.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRolec705897da64992a66b3431c59afb9b50.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
ViewRolec705897da64992a66b3431c59afb9b50.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRolec705897da64992a66b3431c59afb9b50.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
const ViewRolec705897da64992a66b3431c59afb9b50Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRolec705897da64992a66b3431c59afb9b50.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
ViewRolec705897da64992a66b3431c59afb9b50Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRolec705897da64992a66b3431c59afb9b50.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/admin/shield/roles/{record}'
*/
ViewRolec705897da64992a66b3431c59afb9b50Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRolec705897da64992a66b3431c59afb9b50.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRolec705897da64992a66b3431c59afb9b50.form = ViewRolec705897da64992a66b3431c59afb9b50Form
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
    '/nds/admin/shield/roles/{record}': ViewRolec705897da64992a66b3431c59afb9b50,
    '/nds/super/shield/roles/{record}': ViewRole5e9081f7016bfe540266d3bf96b54521,
}

export default ViewRole