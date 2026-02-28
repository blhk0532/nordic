import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaDatafb14dcf347f1fa432c250442ce41e790 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, options),
    method: 'get',
})

EditRingaDatafb14dcf347f1fa432c250442ce41e790.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDatafb14dcf347f1fa432c250442ce41e790.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaDatafb14dcf347f1fa432c250442ce41e790.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDatafb14dcf347f1fa432c250442ce41e790.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDatafb14dcf347f1fa432c250442ce41e790.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaDatafb14dcf347f1fa432c250442ce41e790Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDatafb14dcf347f1fa432c250442ce41e790Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDatafb14dcf347f1fa432c250442ce41e790Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDatafb14dcf347f1fa432c250442ce41e790.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaDatafb14dcf347f1fa432c250442ce41e790.form = EditRingaDatafb14dcf347f1fa432c250442ce41e790Form
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaData38fbaac1cb17876775d29c9ff3fffa4c = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, options),
    method: 'get',
})

EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaData38fbaac1cb17876775d29c9ff3fffa4cForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData38fbaac1cb17876775d29c9ff3fffa4cForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData38fbaac1cb17876775d29c9ff3fffa4cForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaData38fbaac1cb17876775d29c9ff3fffa4c.form = EditRingaData38fbaac1cb17876775d29c9ff3fffa4cForm

const EditRingaData = {
    '/admin/tenant/{tenant}/ringa/data/{record}/edit': EditRingaDatafb14dcf347f1fa432c250442ce41e790,
    '/nds/app/team/{tenant}/ringa/data/{record}/edit': EditRingaData38fbaac1cb17876775d29c9ff3fffa4c,
}

export default EditRingaData