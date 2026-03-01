import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
const CreateClient = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})

CreateClient.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClient.url = (options?: RouteQueryOptions) => {
    return CreateClient.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClient.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClient.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClient.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
const CreateClientForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateClient.form = CreateClientForm

export default CreateClient