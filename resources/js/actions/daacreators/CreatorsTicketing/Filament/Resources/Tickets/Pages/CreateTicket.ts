import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
const CreateTicket = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicket.url(options),
    method: 'get',
})

CreateTicket.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
CreateTicket.url = (options?: RouteQueryOptions) => {
    return CreateTicket.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
CreateTicket.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
CreateTicket.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTicket.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
const CreateTicketForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
CreateTicketForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
CreateTicketForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTicket.form = CreateTicketForm

export default CreateTicket