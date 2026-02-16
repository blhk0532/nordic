import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
const ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, options),
    method: 'get',
})

ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
const ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/tenant/{tenant}/outcome-settings'
*/
ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664.form = ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
const ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url(options),
    method: 'get',
})

ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
const ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4.form = ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
const ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
const ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/super/outcome-settings'
*/
ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d.form = ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86dForm

const ListOutcomeSettings = {
    '/admin/tenant/{tenant}/outcome-settings': ListOutcomeSettingse10b7a48bac55095cbfbd25dc4282664,
    '/nds/adm/outcome-settings': ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4,
    '/nds/super/outcome-settings': ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d,
}

export default ListOutcomeSettings