import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
const KommunerMap5ef0b49f3da561375da0dbfbbda516f2 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, options),
    method: 'get',
})

KommunerMap5ef0b49f3da561375da0dbfbbda516f2.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/kommuner-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return KommunerMap5ef0b49f3da561375da0dbfbbda516f2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
KommunerMap5ef0b49f3da561375da0dbfbbda516f2.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
KommunerMap5ef0b49f3da561375da0dbfbbda516f2.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
const KommunerMap5ef0b49f3da561375da0dbfbbda516f2Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
KommunerMap5ef0b49f3da561375da0dbfbbda516f2Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/app/team/{tenant}/kommuner-map'
*/
KommunerMap5ef0b49f3da561375da0dbfbbda516f2Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap5ef0b49f3da561375da0dbfbbda516f2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

KommunerMap5ef0b49f3da561375da0dbfbbda516f2.form = KommunerMap5ef0b49f3da561375da0dbfbbda516f2Form
/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
const KommunerMap53ae9ad1964db23fcb7be8592df64ac8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url(options),
    method: 'get',
})

KommunerMap53ae9ad1964db23fcb7be8592df64ac8.definition = {
    methods: ["get","head"],
    url: '/nds/data/kommuner-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url = (options?: RouteQueryOptions) => {
    return KommunerMap53ae9ad1964db23fcb7be8592df64ac8.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap53ae9ad1964db23fcb7be8592df64ac8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap53ae9ad1964db23fcb7be8592df64ac8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
const KommunerMap53ae9ad1964db23fcb7be8592df64ac8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap53ae9ad1964db23fcb7be8592df64ac8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap53ae9ad1964db23fcb7be8592df64ac8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap53ae9ad1964db23fcb7be8592df64ac8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

KommunerMap53ae9ad1964db23fcb7be8592df64ac8.form = KommunerMap53ae9ad1964db23fcb7be8592df64ac8Form

const KommunerMap = {
    '/nds/app/team/{tenant}/kommuner-map': KommunerMap5ef0b49f3da561375da0dbfbbda516f2,
    '/nds/data/kommuner-map': KommunerMap53ae9ad1964db23fcb7be8592df64ac8,
}

export default KommunerMap