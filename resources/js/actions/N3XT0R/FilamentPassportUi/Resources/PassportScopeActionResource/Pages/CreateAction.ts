import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
const CreateAction3b230a49824e2bb15ce88079eb9e2654 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction3b230a49824e2bb15ce88079eb9e2654.url(options),
    method: 'get',
})

CreateAction3b230a49824e2bb15ce88079eb9e2654.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction3b230a49824e2bb15ce88079eb9e2654.url = (options?: RouteQueryOptions) => {
    return CreateAction3b230a49824e2bb15ce88079eb9e2654.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction3b230a49824e2bb15ce88079eb9e2654.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction3b230a49824e2bb15ce88079eb9e2654.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction3b230a49824e2bb15ce88079eb9e2654.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAction3b230a49824e2bb15ce88079eb9e2654.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
const CreateAction3b230a49824e2bb15ce88079eb9e2654Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction3b230a49824e2bb15ce88079eb9e2654.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction3b230a49824e2bb15ce88079eb9e2654Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction3b230a49824e2bb15ce88079eb9e2654.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction3b230a49824e2bb15ce88079eb9e2654Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction3b230a49824e2bb15ce88079eb9e2654.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAction3b230a49824e2bb15ce88079eb9e2654.form = CreateAction3b230a49824e2bb15ce88079eb9e2654Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
const CreateAction195d562aa0f6353bffdcb1724a97d671 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction195d562aa0f6353bffdcb1724a97d671.url(options),
    method: 'get',
})

CreateAction195d562aa0f6353bffdcb1724a97d671.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-actions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
CreateAction195d562aa0f6353bffdcb1724a97d671.url = (options?: RouteQueryOptions) => {
    return CreateAction195d562aa0f6353bffdcb1724a97d671.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
CreateAction195d562aa0f6353bffdcb1724a97d671.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction195d562aa0f6353bffdcb1724a97d671.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
CreateAction195d562aa0f6353bffdcb1724a97d671.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAction195d562aa0f6353bffdcb1724a97d671.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
const CreateAction195d562aa0f6353bffdcb1724a97d671Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction195d562aa0f6353bffdcb1724a97d671.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
CreateAction195d562aa0f6353bffdcb1724a97d671Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction195d562aa0f6353bffdcb1724a97d671.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/user/passport-scope-actions/create'
*/
CreateAction195d562aa0f6353bffdcb1724a97d671Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction195d562aa0f6353bffdcb1724a97d671.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAction195d562aa0f6353bffdcb1724a97d671.form = CreateAction195d562aa0f6353bffdcb1724a97d671Form

const CreateAction = {
    '/nds/super/passport-scope-actions/create': CreateAction3b230a49824e2bb15ce88079eb9e2654,
    '/nds/user/passport-scope-actions/create': CreateAction195d562aa0f6353bffdcb1724a97d671,
}

export default CreateAction