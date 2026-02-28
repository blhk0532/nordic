import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
const ViewRingaData0589779c92b386e1f8320cfa8d6cdc96 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, options),
    method: 'get',
})

ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
const ViewRingaData0589779c92b386e1f8320cfa8d6cdc96Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
ViewRingaData0589779c92b386e1f8320cfa8d6cdc96Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}'
*/
ViewRingaData0589779c92b386e1f8320cfa8d6cdc96Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRingaData0589779c92b386e1f8320cfa8d6cdc96.form = ViewRingaData0589779c92b386e1f8320cfa8d6cdc96Form
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
const ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, options),
    method: 'get',
})

ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
const ViewRingaDatad0f092bc4a6f13b410095b60be70f2dcForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDatad0f092bc4a6f13b410095b60be70f2dcForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
ViewRingaDatad0f092bc4a6f13b410095b60be70f2dcForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc.form = ViewRingaDatad0f092bc4a6f13b410095b60be70f2dcForm

const ViewRingaData = {
    '/admin/tenant/{tenant}/ringa/data/{record}': ViewRingaData0589779c92b386e1f8320cfa8d6cdc96,
    '/nds/app/team/{tenant}/ringa/data/{record}': ViewRingaDatad0f092bc4a6f13b410095b60be70f2dc,
}

export default ViewRingaData