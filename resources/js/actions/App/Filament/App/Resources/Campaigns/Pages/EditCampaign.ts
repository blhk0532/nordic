import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
const EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, options),
    method: 'get',
})

EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/campaigns/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
const EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/{record}/edit'
*/
EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50.form = EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50Form
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
const EditCampaign1465fb5ebd3a63015ce973012ca2d15e = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, options),
    method: 'get',
})

EditCampaign1465fb5ebd3a63015ce973012ca2d15e.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCampaign1465fb5ebd3a63015ce973012ca2d15e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign1465fb5ebd3a63015ce973012ca2d15e.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign1465fb5ebd3a63015ce973012ca2d15e.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
const EditCampaign1465fb5ebd3a63015ce973012ca2d15eForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign1465fb5ebd3a63015ce973012ca2d15eForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign1465fb5ebd3a63015ce973012ca2d15eForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign1465fb5ebd3a63015ce973012ca2d15e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCampaign1465fb5ebd3a63015ce973012ca2d15e.form = EditCampaign1465fb5ebd3a63015ce973012ca2d15eForm

const EditCampaign = {
    '/admin/tenant/{tenant}/campaigns/{record}/edit': EditCampaign3cfac80c68339bfcbc9ea3a09a7f3c50,
    '/nds/app/team/{tenant}/campaigns/{record}/edit': EditCampaign1465fb5ebd3a63015ce973012ca2d15e,
}

export default EditCampaign