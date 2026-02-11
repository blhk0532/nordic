import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
const ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url(options),
    method: 'get',
})

ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.definition = {
    methods: ["get","head"],
    url: '/admin/outcome-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url = (options?: RouteQueryOptions) => {
    return ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
const ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/ListOutcomeSettings.php:7
* @route '/admin/outcome-settings'
*/
ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb.form = ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbbForm
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
    '/admin/outcome-settings': ListOutcomeSettingsec3dd0663540f4f9352fd1db96d31fbb,
    '/nds/adm/outcome-settings': ListOutcomeSettings6f4b7370b4d0769ce8ee945d458d9aa4,
    '/nds/super/outcome-settings': ListOutcomeSettings30ee2a5d561592b2ef6eb87e6ad3c86d,
}

export default ListOutcomeSettings