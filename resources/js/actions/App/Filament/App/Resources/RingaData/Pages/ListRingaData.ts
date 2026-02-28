import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
const ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, options),
    method: 'get',
})

ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/nummer/lista',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
const ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddbForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddbForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista'
*/
ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddbForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb.form = ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddbForm
/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
const ListRingaDataf140255b3d720962df57b4c8b3c3734e = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, options),
    method: 'get',
})

ListRingaDataf140255b3d720962df57b4c8b3c3734e.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/nummer/lista',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataf140255b3d720962df57b4c8b3c3734e.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaDataf140255b3d720962df57b4c8b3c3734e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataf140255b3d720962df57b4c8b3c3734e.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataf140255b3d720962df57b4c8b3c3734e.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
const ListRingaDataf140255b3d720962df57b4c8b3c3734eForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataf140255b3d720962df57b4c8b3c3734eForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataf140255b3d720962df57b4c8b3c3734eForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataf140255b3d720962df57b4c8b3c3734e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataf140255b3d720962df57b4c8b3c3734e.form = ListRingaDataf140255b3d720962df57b4c8b3c3734eForm

const ListRingaData = {
    '/admin/tenant/{tenant}/nummer/lista': ListRingaDatafe6f6cdcbfb3f48800eb5f0973af0ddb,
    '/nds/app/team/{tenant}/nummer/lista': ListRingaDataf140255b3d720962df57b4c8b3c3734e,
}

export default ListRingaData