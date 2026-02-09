import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.definition = {
    methods: ["get","head"],
    url: '/nds/admin/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533.form = CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533Form
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.form = CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form

const CreateOutcomeDelaySetting = {
    '/nds/admin/outcome-delay-settings/create': CreateOutcomeDelaySetting7084cbbbb63dc3d2021da9e506bf1533,
    '/nds/super/outcome-delay-settings/create': CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966,
}

export default CreateOutcomeDelaySetting