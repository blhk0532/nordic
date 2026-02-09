import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
const ListTicketStatuses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTicketStatuses.url(options),
    method: 'get',
})

ListTicketStatuses.definition = {
    methods: ["get","head"],
    url: '/nds/manager/ticket-statuses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
ListTicketStatuses.url = (options?: RouteQueryOptions) => {
    return ListTicketStatuses.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
ListTicketStatuses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTicketStatuses.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
ListTicketStatuses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTicketStatuses.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
const ListTicketStatusesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTicketStatuses.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
ListTicketStatusesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTicketStatuses.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\ListTicketStatuses::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/ListTicketStatuses.php:7
* @route '/nds/manager/ticket-statuses'
*/
ListTicketStatusesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTicketStatuses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTicketStatuses.form = ListTicketStatusesForm

export default ListTicketStatuses