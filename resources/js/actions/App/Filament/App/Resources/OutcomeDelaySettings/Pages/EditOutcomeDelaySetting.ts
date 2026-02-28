import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, options),
    method: 'get',
})

EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160.form = EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160Form
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, options),
    method: 'get',
})

EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636cForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636cForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636cForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c.form = EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636cForm

const EditOutcomeDelaySetting = {
    '/admin/tenant/{tenant}/outcome-delay-settings/{record}/edit': EditOutcomeDelaySetting75141c1aeef8f31d8564fd9fb798b160,
    '/nds/app/team/{tenant}/outcome-delay-settings/{record}/edit': EditOutcomeDelaySetting507ae6fab2b2df1d8d7b3e2495f2636c,
}

export default EditOutcomeDelaySetting