import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
const ListClients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

ListClients.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients.url = (options?: RouteQueryOptions) => {
    return ListClients.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
const ListClientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListClients.form = ListClientsForm

export default ListClients