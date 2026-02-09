import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
const CreateTicketStatus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicketStatus.url(options),
    method: 'get',
})

CreateTicketStatus.definition = {
    methods: ["get","head"],
    url: '/nds/manager/ticket-statuses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
CreateTicketStatus.url = (options?: RouteQueryOptions) => {
    return CreateTicketStatus.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
CreateTicketStatus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicketStatus.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
CreateTicketStatus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTicketStatus.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
const CreateTicketStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicketStatus.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
CreateTicketStatusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicketStatus.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\CreateTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/CreateTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/create'
*/
CreateTicketStatusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicketStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTicketStatus.form = CreateTicketStatusForm

export default CreateTicketStatus