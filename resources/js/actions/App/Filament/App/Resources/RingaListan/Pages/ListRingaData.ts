import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
const ListRingaData506b3e65b395452196916dbbc029f621 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData506b3e65b395452196916dbbc029f621.url(args, options),
    method: 'get',
})

ListRingaData506b3e65b395452196916dbbc029f621.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/listor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
ListRingaData506b3e65b395452196916dbbc029f621.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaData506b3e65b395452196916dbbc029f621.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
ListRingaData506b3e65b395452196916dbbc029f621.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData506b3e65b395452196916dbbc029f621.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
ListRingaData506b3e65b395452196916dbbc029f621.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaData506b3e65b395452196916dbbc029f621.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
const ListRingaData506b3e65b395452196916dbbc029f621Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData506b3e65b395452196916dbbc029f621.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
ListRingaData506b3e65b395452196916dbbc029f621Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData506b3e65b395452196916dbbc029f621.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor'
*/
ListRingaData506b3e65b395452196916dbbc029f621Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData506b3e65b395452196916dbbc029f621.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaData506b3e65b395452196916dbbc029f621.form = ListRingaData506b3e65b395452196916dbbc029f621Form
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
const ListRingaDatab275e86b0a736a2f77b003788cf77208 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, options),
    method: 'get',
})

ListRingaDatab275e86b0a736a2f77b003788cf77208.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/listor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
ListRingaDatab275e86b0a736a2f77b003788cf77208.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDatab275e86b0a736a2f77b003788cf77208.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
ListRingaDatab275e86b0a736a2f77b003788cf77208.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
ListRingaDatab275e86b0a736a2f77b003788cf77208.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
const ListRingaDatab275e86b0a736a2f77b003788cf77208Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
ListRingaDatab275e86b0a736a2f77b003788cf77208Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor'
*/
ListRingaDatab275e86b0a736a2f77b003788cf77208Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatab275e86b0a736a2f77b003788cf77208.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDatab275e86b0a736a2f77b003788cf77208.form = ListRingaDatab275e86b0a736a2f77b003788cf77208Form

const ListRingaData = {
    '/admin/tenant/{tenant}/ringa/listor': ListRingaData506b3e65b395452196916dbbc029f621,
    '/nds/app/team/{tenant}/ringa/listor': ListRingaDatab275e86b0a736a2f77b003788cf77208,
}

export default ListRingaData