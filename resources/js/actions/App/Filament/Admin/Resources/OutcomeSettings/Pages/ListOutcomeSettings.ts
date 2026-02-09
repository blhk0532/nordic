import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
const ListOutcomeSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings.url(options),
    method: 'get',
})

ListOutcomeSettings.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
const ListOutcomeSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/adm/outcome-settings'
*/
ListOutcomeSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettings.form = ListOutcomeSettingsForm

export default ListOutcomeSettings