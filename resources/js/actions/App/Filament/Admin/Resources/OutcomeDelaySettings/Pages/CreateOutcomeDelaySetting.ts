import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting.form = CreateOutcomeDelaySettingForm

export default CreateOutcomeDelaySetting