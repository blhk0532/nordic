import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
const QueueRingaDatab3e4e079ff774be35463ff607e922972 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, options),
    method: 'get',
})

QueueRingaDatab3e4e079ff774be35463ff607e922972.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/listor/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
QueueRingaDatab3e4e079ff774be35463ff607e922972.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return QueueRingaDatab3e4e079ff774be35463ff607e922972.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
QueueRingaDatab3e4e079ff774be35463ff607e922972.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
QueueRingaDatab3e4e079ff774be35463ff607e922972.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
const QueueRingaDatab3e4e079ff774be35463ff607e922972Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
QueueRingaDatab3e4e079ff774be35463ff607e922972Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/queue'
*/
QueueRingaDatab3e4e079ff774be35463ff607e922972Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDatab3e4e079ff774be35463ff607e922972.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueRingaDatab3e4e079ff774be35463ff607e922972.form = QueueRingaDatab3e4e079ff774be35463ff607e922972Form
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
const QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, options),
    method: 'get',
})

QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/listor/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
const QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/queue'
*/
QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72.form = QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72Form

const QueueRingaData = {
    '/admin/tenant/{tenant}/ringa/listor/queue': QueueRingaDatab3e4e079ff774be35463ff607e922972,
    '/nds/app/team/{tenant}/ringa/listor/queue': QueueRingaData1c2d50fe9fd1752394bbd6fb2b53ea72,
}

export default QueueRingaData