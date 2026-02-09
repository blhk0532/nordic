import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
const ViewTicket = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTicket.url(args, options),
    method: 'get',
})

ViewTicket.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
ViewTicket.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewTicket.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
ViewTicket.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTicket.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
ViewTicket.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTicket.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
const ViewTicketForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTicket.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
ViewTicketForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTicket.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
ViewTicketForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTicket.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTicket.form = ViewTicketForm

export default ViewTicket