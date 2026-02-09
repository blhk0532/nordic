import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url(options),
    method: 'get',
})

ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.definition = {
    methods: ["get","head"],
    url: '/nds/admin/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url = (options?: RouteQueryOptions) => {
    return ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/admin/outcome-delay-settings'
*/
ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f.form = ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655fForm
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
    '/nds/admin/outcome-delay-settings': ListOutcomeDelaySettingsed81769452c17c0f1da26f29a4a6655f,
    '/nds/super/outcome-delay-settings': ListOutcomeDelaySettingsd6394ccf6bd8150fcf7b0caa461a9ea8,
}

export default ListOutcomeDelaySettings