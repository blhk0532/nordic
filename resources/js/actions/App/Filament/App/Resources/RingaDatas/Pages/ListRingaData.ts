import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
const ListRingaData4d7df706d76391924c2cd8bead668b0d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, options),
    method: 'get',
})

ListRingaData4d7df706d76391924c2cd8bead668b0d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
ListRingaData4d7df706d76391924c2cd8bead668b0d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaData4d7df706d76391924c2cd8bead668b0d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
ListRingaData4d7df706d76391924c2cd8bead668b0d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
ListRingaData4d7df706d76391924c2cd8bead668b0d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
const ListRingaData4d7df706d76391924c2cd8bead668b0dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
ListRingaData4d7df706d76391924c2cd8bead668b0dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data'
*/
ListRingaData4d7df706d76391924c2cd8bead668b0dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData4d7df706d76391924c2cd8bead668b0d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaData4d7df706d76391924c2cd8bead668b0d.form = ListRingaData4d7df706d76391924c2cd8bead668b0dForm
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
const ListRingaData0046d32553a4140d61e609bcb95329d4 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, options),
    method: 'get',
})

ListRingaData0046d32553a4140d61e609bcb95329d4.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
ListRingaData0046d32553a4140d61e609bcb95329d4.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaData0046d32553a4140d61e609bcb95329d4.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
ListRingaData0046d32553a4140d61e609bcb95329d4.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
ListRingaData0046d32553a4140d61e609bcb95329d4.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
const ListRingaData0046d32553a4140d61e609bcb95329d4Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
ListRingaData0046d32553a4140d61e609bcb95329d4Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
ListRingaData0046d32553a4140d61e609bcb95329d4Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData0046d32553a4140d61e609bcb95329d4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaData0046d32553a4140d61e609bcb95329d4.form = ListRingaData0046d32553a4140d61e609bcb95329d4Form

const ListRingaData = {
    '/admin/tenant/{tenant}/ringa/data': ListRingaData4d7df706d76391924c2cd8bead668b0d,
    '/nds/app/team/{tenant}/ringa/data': ListRingaData0046d32553a4140d61e609bcb95329d4,
}

export default ListRingaData