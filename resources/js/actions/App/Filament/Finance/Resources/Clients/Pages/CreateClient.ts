import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
const CreateClient = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})

CreateClient.definition = {
    methods: ["get","head"],
    url: '/nds/finance/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
CreateClient.url = (options?: RouteQueryOptions) => {
    return CreateClient.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
CreateClient.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
CreateClient.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClient.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
const CreateClientForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
*/
CreateClientForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Clients\Pages\CreateClient::__invoke
* @see app/Filament/Finance/Resources/Clients/Pages/CreateClient.php:7
* @route '/nds/finance/clients/create'
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