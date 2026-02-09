import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
const QueueRingaData = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData.url(args, options),
    method: 'get',
})

QueueRingaData.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/nummer/lista/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
QueueRingaData.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return QueueRingaData.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
QueueRingaData.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
QueueRingaData.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueRingaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
const QueueRingaDataForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
QueueRingaDataForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/queue'
*/
QueueRingaDataForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueRingaData.form = QueueRingaDataForm

export default QueueRingaData