import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
const CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url(options),
    method: 'get',
})

CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.definition = {
    methods: ["get","head"],
    url: '/admin/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
const CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/outcome-settings/create'
*/
CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5.form = CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.form = CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.form = CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form

const CreateOutcomeSetting = {
    '/admin/outcome-settings/create': CreateOutcomeSetting96df6d2ca24afb91e2d9e24bafec64b5,
    '/nds/adm/outcome-settings/create': CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3,
    '/nds/super/outcome-settings/create': CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18,
}

export default CreateOutcomeSetting