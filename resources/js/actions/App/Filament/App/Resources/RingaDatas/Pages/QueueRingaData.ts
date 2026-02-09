import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
const QueueRingaData2c39f666af142ef2ba37ec2db05becb9 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, options),
    method: 'get',
})

QueueRingaData2c39f666af142ef2ba37ec2db05becb9.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return QueueRingaData2c39f666af142ef2ba37ec2db05becb9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
QueueRingaData2c39f666af142ef2ba37ec2db05becb9.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
QueueRingaData2c39f666af142ef2ba37ec2db05becb9.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
const QueueRingaData2c39f666af142ef2ba37ec2db05becb9Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
QueueRingaData2c39f666af142ef2ba37ec2db05becb9Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/queue'
*/
QueueRingaData2c39f666af142ef2ba37ec2db05becb9Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaData2c39f666af142ef2ba37ec2db05becb9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueRingaData2c39f666af142ef2ba37ec2db05becb9.form = QueueRingaData2c39f666af142ef2ba37ec2db05becb9Form
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
const QueueRingaDataaff81cb2d84307bab7de198433e89ed9 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, options),
    method: 'get',
})

QueueRingaDataaff81cb2d84307bab7de198433e89ed9.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return QueueRingaDataaff81cb2d84307bab7de198433e89ed9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
QueueRingaDataaff81cb2d84307bab7de198433e89ed9.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
QueueRingaDataaff81cb2d84307bab7de198433e89ed9.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
const QueueRingaDataaff81cb2d84307bab7de198433e89ed9Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
QueueRingaDataaff81cb2d84307bab7de198433e89ed9Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
QueueRingaDataaff81cb2d84307bab7de198433e89ed9Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueRingaDataaff81cb2d84307bab7de198433e89ed9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueRingaDataaff81cb2d84307bab7de198433e89ed9.form = QueueRingaDataaff81cb2d84307bab7de198433e89ed9Form

const QueueRingaData = {
    '/nds/app/team/{tenant}/queue': QueueRingaData2c39f666af142ef2ba37ec2db05becb9,
    '/nds/app/team/{tenant}/ringa/data/queue': QueueRingaDataaff81cb2d84307bab7de198433e89ed9,
}

export default QueueRingaData