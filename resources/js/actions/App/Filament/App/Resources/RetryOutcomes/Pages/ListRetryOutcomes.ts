import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
const ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, options),
    method: 'get',
})

ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/retry-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
const ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes'
*/
ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764.form = ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764Form
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
const ListRetryOutcomesa1886604c692220ba75b4900596df6e0 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, options),
    method: 'get',
})

ListRetryOutcomesa1886604c692220ba75b4900596df6e0.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRetryOutcomesa1886604c692220ba75b4900596df6e0.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesa1886604c692220ba75b4900596df6e0.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesa1886604c692220ba75b4900596df6e0.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
const ListRetryOutcomesa1886604c692220ba75b4900596df6e0Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesa1886604c692220ba75b4900596df6e0Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
ListRetryOutcomesa1886604c692220ba75b4900596df6e0Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRetryOutcomesa1886604c692220ba75b4900596df6e0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRetryOutcomesa1886604c692220ba75b4900596df6e0.form = ListRetryOutcomesa1886604c692220ba75b4900596df6e0Form

const ListRetryOutcomes = {
    '/admin/tenant/{tenant}/retry-outcomes': ListRetryOutcomes40e2c853c42058eed5aaf0525bf49764,
    '/nds/app/team/{tenant}/retry-outcomes': ListRetryOutcomesa1886604c692220ba75b4900596df6e0,
}

export default ListRetryOutcomes