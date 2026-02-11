import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.definition = {
    methods: ["get","head"],
    url: '/admin/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d.form = CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40dForm
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
    '/admin/outcome-delay-settings/create': CreateOutcomeDelaySetting7bd614a5aa34b70124d5472aa100b40d,
    '/nds/adm/outcome-delay-settings/create': CreateOutcomeDelaySetting29b3999432e04ab3f4af1b2a0fc5eb7f,
    '/nds/super/outcome-delay-settings/create': CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966,
}

export default CreateOutcomeDelaySetting