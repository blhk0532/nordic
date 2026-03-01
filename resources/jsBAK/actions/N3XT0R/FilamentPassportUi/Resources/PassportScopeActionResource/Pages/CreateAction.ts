import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
const CreateAction = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction.url(options),
    method: 'get',
})

CreateAction.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction.url = (options?: RouteQueryOptions) => {
    return CreateAction.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAction.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateAction.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAction.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
const CreateActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateActionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\CreateAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/CreateAction.php:7
* @route '/nds/super/passport-scope-actions/create'
*/
CreateActionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAction.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAction.form = CreateActionForm

export default CreateAction