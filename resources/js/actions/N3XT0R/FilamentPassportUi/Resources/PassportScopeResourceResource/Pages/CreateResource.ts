import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
const CreateResourcea18cf6c4215acb1f3d4f75f306a852ea = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url(options),
    method: 'get',
})

CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url = (options?: RouteQueryOptions) => {
    return CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
const CreateResourcea18cf6c4215acb1f3d4f75f306a852eaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourcea18cf6c4215acb1f3d4f75f306a852eaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourcea18cf6c4215acb1f3d4f75f306a852eaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateResourcea18cf6c4215acb1f3d4f75f306a852ea.form = CreateResourcea18cf6c4215acb1f3d4f75f306a852eaForm
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
const CreateResource957ef23057855587f361d5b335a66437 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResource957ef23057855587f361d5b335a66437.url(options),
    method: 'get',
})

CreateResource957ef23057855587f361d5b335a66437.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
CreateResource957ef23057855587f361d5b335a66437.url = (options?: RouteQueryOptions) => {
    return CreateResource957ef23057855587f361d5b335a66437.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
CreateResource957ef23057855587f361d5b335a66437.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResource957ef23057855587f361d5b335a66437.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
CreateResource957ef23057855587f361d5b335a66437.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateResource957ef23057855587f361d5b335a66437.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
const CreateResource957ef23057855587f361d5b335a66437Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource957ef23057855587f361d5b335a66437.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
CreateResource957ef23057855587f361d5b335a66437Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource957ef23057855587f361d5b335a66437.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
CreateResource957ef23057855587f361d5b335a66437Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource957ef23057855587f361d5b335a66437.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateResource957ef23057855587f361d5b335a66437.form = CreateResource957ef23057855587f361d5b335a66437Form

const CreateResource = {
    '/nds/super/passport-scope-resources/create': CreateResourcea18cf6c4215acb1f3d4f75f306a852ea,
    '/nds/user/passport-scope-resources/create': CreateResource957ef23057855587f361d5b335a66437,
}

export default CreateResource