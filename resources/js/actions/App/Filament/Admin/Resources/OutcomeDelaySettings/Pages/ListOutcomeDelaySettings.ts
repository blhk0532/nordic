import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
const ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
const ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.form = ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url(options),
    method: 'get',
})

ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url = (options?: RouteQueryOptions) => {
    return ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/super/outcome-delay-settings'
*/
ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8.form = ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8Form

const ListOutcomeDelaySettings = {
    '/admin/tenant/{tenant}/outcome-delay-settings': ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b,
    '/nds/super/outcome-delay-settings': ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8,
}

export default ListOutcomeDelaySettings