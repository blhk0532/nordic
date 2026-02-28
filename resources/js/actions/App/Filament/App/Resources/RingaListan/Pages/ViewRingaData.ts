import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
const ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, options),
    method: 'get',
})

ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/listor/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
const ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95eForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95eForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}'
*/
ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95eForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e.form = ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95eForm
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
const ViewRingaDatad12112fb672fce7f02f675ba41f97004 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, options),
    method: 'get',
})

ViewRingaDatad12112fb672fce7f02f675ba41f97004.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/listor/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
ViewRingaDatad12112fb672fce7f02f675ba41f97004.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRingaDatad12112fb672fce7f02f675ba41f97004.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
ViewRingaDatad12112fb672fce7f02f675ba41f97004.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
ViewRingaDatad12112fb672fce7f02f675ba41f97004.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
const ViewRingaDatad12112fb672fce7f02f675ba41f97004Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
ViewRingaDatad12112fb672fce7f02f675ba41f97004Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}'
*/
ViewRingaDatad12112fb672fce7f02f675ba41f97004Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad12112fb672fce7f02f675ba41f97004.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRingaDatad12112fb672fce7f02f675ba41f97004.form = ViewRingaDatad12112fb672fce7f02f675ba41f97004Form

const ViewRingaData = {
    '/admin/tenant/{tenant}/ringa/listor/{record}': ViewRingaDataa46fdcfc14571ad5dd8fdc8cf444e95e,
    '/nds/app/team/{tenant}/ringa/listor/{record}': ViewRingaDatad12112fb672fce7f02f675ba41f97004,
}

export default ViewRingaData