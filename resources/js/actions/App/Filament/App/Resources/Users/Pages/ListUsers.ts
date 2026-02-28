import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
const ListUsers1ce1b653f15922f49f9de0f446c3aaae = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, options),
    method: 'get',
})

ListUsers1ce1b653f15922f49f9de0f446c3aaae.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
ListUsers1ce1b653f15922f49f9de0f446c3aaae.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListUsers1ce1b653f15922f49f9de0f446c3aaae.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
ListUsers1ce1b653f15922f49f9de0f446c3aaae.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
ListUsers1ce1b653f15922f49f9de0f446c3aaae.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
const ListUsers1ce1b653f15922f49f9de0f446c3aaaeForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
ListUsers1ce1b653f15922f49f9de0f446c3aaaeForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/users'
*/
ListUsers1ce1b653f15922f49f9de0f446c3aaaeForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1ce1b653f15922f49f9de0f446c3aaae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers1ce1b653f15922f49f9de0f446c3aaae.form = ListUsers1ce1b653f15922f49f9de0f446c3aaaeForm
/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
const ListUsersa4dd35ae7bf304225b262c5978619c90 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, options),
    method: 'get',
})

ListUsersa4dd35ae7bf304225b262c5978619c90.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersa4dd35ae7bf304225b262c5978619c90.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListUsersa4dd35ae7bf304225b262c5978619c90.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersa4dd35ae7bf304225b262c5978619c90.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersa4dd35ae7bf304225b262c5978619c90.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
const ListUsersa4dd35ae7bf304225b262c5978619c90Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersa4dd35ae7bf304225b262c5978619c90Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/App/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/app/team/{tenant}/users'
*/
ListUsersa4dd35ae7bf304225b262c5978619c90Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersa4dd35ae7bf304225b262c5978619c90.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsersa4dd35ae7bf304225b262c5978619c90.form = ListUsersa4dd35ae7bf304225b262c5978619c90Form

const ListUsers = {
    '/admin/tenant/{tenant}/users': ListUsers1ce1b653f15922f49f9de0f446c3aaae,
    '/nds/app/team/{tenant}/users': ListUsersa4dd35ae7bf304225b262c5978619c90,
}

export default ListUsers