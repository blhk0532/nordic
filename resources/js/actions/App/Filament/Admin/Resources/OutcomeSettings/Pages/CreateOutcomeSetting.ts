import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
const CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url(options),
    method: 'get',
})

CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.definition = {
    methods: ["get","head"],
    url: '/nds/admin/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
const CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/create'
*/
CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736.form = CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736Form
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
    '/nds/admin/outcome-settings/create': CreateOutcomeSetting30d3df12b8360fb0efac24c61b6a7736,
    '/nds/super/outcome-settings/create': CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18,
}

export default CreateOutcomeSetting