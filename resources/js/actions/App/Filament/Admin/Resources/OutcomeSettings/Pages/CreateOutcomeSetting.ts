import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSetting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting.url(options),
    method: 'get',
})

CreateOutcomeSetting.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSetting.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSetting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSetting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSettingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting.form = CreateOutcomeSettingForm

export default CreateOutcomeSetting