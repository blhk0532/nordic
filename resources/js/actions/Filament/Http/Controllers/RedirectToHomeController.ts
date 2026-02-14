import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
const RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, options),
    method: 'get',
})

RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
const RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5cForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5cForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/admin/tenant/{tenant}'
*/
RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5cForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c.form = RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5cForm
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
const RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.definition = {
    methods: ["get","head"],
    url: '/nds/adm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
const RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/adm'
*/
RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe.form = RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efeForm
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeController8c64bc6fca39405dd2e574c532b93366 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.definition = {
    methods: ["get","head"],
    url: '/nds/chat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController8c64bc6fca39405dd2e574c532b93366.form = RedirectToHomeController8c64bc6fca39405dd2e574c532b93366Form

const RedirectToHomeController = {
    '/admin/tenant/{tenant}': RedirectToHomeController3dbbb1464e719e717fa4718d2d3d2c5c,
    '/nds/adm': RedirectToHomeController0aadf6e031dee37bd5bbb3fe17382efe,
    '/nds/chat': RedirectToHomeController8c64bc6fca39405dd2e574c532b93366,
}

export default RedirectToHomeController