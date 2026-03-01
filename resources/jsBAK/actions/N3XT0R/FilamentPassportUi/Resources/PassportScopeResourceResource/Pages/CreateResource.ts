import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
const CreateResource = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResource.url(options),
    method: 'get',
})

CreateResource.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResource.url = (options?: RouteQueryOptions) => {
    return CreateResource.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResource.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateResource.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResource.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateResource.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
const CreateResourceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/super/passport-scope-resources/create'
*/
CreateResourceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateResource.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateResource.form = CreateResourceForm

export default CreateResource