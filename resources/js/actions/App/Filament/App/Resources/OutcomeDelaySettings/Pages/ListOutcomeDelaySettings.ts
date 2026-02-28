import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
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
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
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
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
const ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498bForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
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
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, options),
    method: 'get',
})

ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings'
*/
ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f.form = ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84fForm

const ListOutcomeDelaySettings = {
    '/admin/tenant/{tenant}/outcome-delay-settings': ListOutcomeDelaySettings3cdc368eb2dcb18a1afdc0617ac3498b,
    '/nds/app/team/{tenant}/outcome-delay-settings': ListOutcomeDelaySettingsab43e81d37e577cb83ae55cc1ef5c84f,
}

export default ListOutcomeDelaySettings