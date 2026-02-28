import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, options),
    method: 'get',
})

ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512ebaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512ebaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/admin/tenant/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512ebaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba.form = ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512ebaForm
/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, options),
    method: 'get',
})

ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
const ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/App/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/app/team/{tenant}/ringa-data-outcomes'
*/
ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a.form = ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2aForm

const ListRingaDataOutcomes = {
    '/admin/tenant/{tenant}/ringa-data-outcomes': ListRingaDataOutcomes99fb46ecc7694f4979b86a8675512eba,
    '/nds/app/team/{tenant}/ringa-data-outcomes': ListRingaDataOutcomes71c1675aa5e3f76edf7ae620d89dce2a,
}

export default ListRingaDataOutcomes