import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
const ListOutcomeDelaySettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettings.url(options),
    method: 'get',
})

ListOutcomeDelaySettings.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettings.url = (options?: RouteQueryOptions) => {
    return ListOutcomeDelaySettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeDelaySettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeDelaySettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
const ListOutcomeDelaySettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\ListOutcomeDelaySettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/ListOutcomeDelaySettings.php:7
* @route '/nds/adm/outcome-delay-settings'
*/
ListOutcomeDelaySettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeDelaySettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeDelaySettings.form = ListOutcomeDelaySettingsForm

export default ListOutcomeDelaySettings