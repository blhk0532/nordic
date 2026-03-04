import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
const ListRolesf8049ed97fc7127920f60959ae69d12a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, options),
    method: 'get',
})

ListRolesf8049ed97fc7127920f60959ae69d12a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
ListRolesf8049ed97fc7127920f60959ae69d12a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return ListRolesf8049ed97fc7127920f60959ae69d12a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
ListRolesf8049ed97fc7127920f60959ae69d12a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
ListRolesf8049ed97fc7127920f60959ae69d12a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
const ListRolesf8049ed97fc7127920f60959ae69d12aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
ListRolesf8049ed97fc7127920f60959ae69d12aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/admin/tenant/{tenant}/shield/roles'
*/
ListRolesf8049ed97fc7127920f60959ae69d12aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolesf8049ed97fc7127920f60959ae69d12a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRolesf8049ed97fc7127920f60959ae69d12a.form = ListRolesf8049ed97fc7127920f60959ae69d12aForm
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.url = (options?: RouteQueryOptions) => {
    return ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.form = ListRoles97ea2592ad6e707738ae83b8eefbf74dForm

const ListRoles = {
    '/admin/tenant/{tenant}/shield/roles': ListRolesf8049ed97fc7127920f60959ae69d12a,
    '/nds/super/shield/roles': ListRoles97ea2592ad6e707738ae83b8eefbf74d,
}

export default ListRoles