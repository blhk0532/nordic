import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
const ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url(options),
    method: 'get',
})

ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url = (options?: RouteQueryOptions) => {
    return ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
const ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed.form = ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62edForm
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
    '/nds/adm/outcome-delay-settings': ListOutcomeDelaySettingse361d460b8ca9b9c77513f20fe4d62ed,
    '/nds/super/outcome-delay-settings': ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8,
}

export default ListOutcomeDelaySettings