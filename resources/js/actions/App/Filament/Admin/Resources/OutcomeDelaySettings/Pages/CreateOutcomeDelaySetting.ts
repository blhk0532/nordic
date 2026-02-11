import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f.form = CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7fForm
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
    '/nds/adm/outcome-delay-settings/create': CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f,
    '/nds/super/outcome-delay-settings/create': CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966,
}

export default CreateOutcomeDelaySetting