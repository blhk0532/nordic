import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
const ClientsDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientsDashboard.url(options),
    method: 'get',
})

ClientsDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
ClientsDashboard.url = (options?: RouteQueryOptions) => {
    return ClientsDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
ClientsDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
ClientsDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClientsDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
const ClientsDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClientsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
ClientsDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClientsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
ClientsDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ClientsDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ClientsDashboard.form = ClientsDashboardForm

export default ClientsDashboard