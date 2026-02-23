import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
const KommunerMap = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap.url(args, options),
    method: 'get',
})

KommunerMap.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
KommunerMap.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return KommunerMap.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
KommunerMap.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
KommunerMap.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: KommunerMap.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
const KommunerMapForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
KommunerMapForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\KommunerMap::__invoke
* @see app/Filament/App/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}'
*/
KommunerMapForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

KommunerMap.form = KommunerMapForm

export default KommunerMap