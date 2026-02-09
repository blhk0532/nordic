import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
const ListOutcomeSettingsf9698eeea521292305b019e89f798821 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url(options),
    method: 'get',
})

ListOutcomeSettingsf9698eeea521292305b019e89f798821.definition = {
    methods: ["get","head"],
    url: '/nds/admin/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
ListOutcomeSettingsf9698eeea521292305b019e89f798821.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettingsf9698eeea521292305b019e89f798821.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
ListOutcomeSettingsf9698eeea521292305b019e89f798821.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
ListOutcomeSettingsf9698eeea521292305b019e89f798821.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
const ListOutcomeSettingsf9698eeea521292305b019e89f798821Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
ListOutcomeSettingsf9698eeea521292305b019e89f798821Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/nds/admin/outcome-settings'
*/
ListOutcomeSettingsf9698eeea521292305b019e89f798821Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsf9698eeea521292305b019e89f798821.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettingsf9698eeea521292305b019e89f798821.form = ListOutcomeSettingsf9698eeea521292305b019e89f798821Form
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
    '/nds/admin/outcome-settings': ListOutcomeSettingsf9698eeea521292305b019e89f798821,
    '/nds/super/outcome-settings': ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d,
}

export default ListOutcomeSettings