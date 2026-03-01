import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
const ListAdminseeb2e848e14122d25379d7141a622b76 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, options),
    method: 'get',
})

ListAdminseeb2e848e14122d25379d7141a622b76.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
ListAdminseeb2e848e14122d25379d7141a622b76.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListAdminseeb2e848e14122d25379d7141a622b76.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
ListAdminseeb2e848e14122d25379d7141a622b76.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
ListAdminseeb2e848e14122d25379d7141a622b76.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
const ListAdminseeb2e848e14122d25379d7141a622b76Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
ListAdminseeb2e848e14122d25379d7141a622b76Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/admin/tenant/{tenant}/admins'
*/
ListAdminseeb2e848e14122d25379d7141a622b76Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdminseeb2e848e14122d25379d7141a622b76.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdminseeb2e848e14122d25379d7141a622b76.form = ListAdminseeb2e848e14122d25379d7141a622b76Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.url = (options?: RouteQueryOptions) => {
    return ListAdmins5357cae38e08fe81d984649f532c1237.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.form = ListAdmins5357cae38e08fe81d984649f532c1237Form

const ListAdmins = {
    '/admin/tenant/{tenant}/admins': ListAdminseeb2e848e14122d25379d7141a622b76,
    '/nds/super/admins': ListAdmins5357cae38e08fe81d984649f532c1237,
}

export default ListAdmins