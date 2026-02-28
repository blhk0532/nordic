import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
const ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, options),
    method: 'get',
})

ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-delay-settings/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
const ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4.form = ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4Form
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
const ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, options),
    method: 'get',
})

ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/outcome-delay-settings/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
const ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ViewOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ViewOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/{record}'
*/
ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52.form = ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52Form

const ViewOutcomeDelaySetting = {
    '/admin/tenant/{tenant}/outcome-delay-settings/{record}': ViewOutcomeDelaySetting4c9e8b07c0cca993d81e4d6e006c76e4,
    '/nds/app/team/{tenant}/outcome-delay-settings/{record}': ViewOutcomeDelaySetting8426e6e72af2c2a78c55cd9f0a2f1e52,
}

export default ViewOutcomeDelaySetting