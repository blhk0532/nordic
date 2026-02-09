import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
const ListTickets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTickets.url(options),
    method: 'get',
})

ListTickets.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
ListTickets.url = (options?: RouteQueryOptions) => {
    return ListTickets.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
ListTickets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTickets.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
ListTickets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTickets.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
const ListTicketsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
ListTicketsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
ListTicketsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTickets.form = ListTicketsForm

export default ListTickets