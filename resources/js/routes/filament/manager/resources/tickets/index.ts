import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/nds/manager/tickets'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/nds/manager/tickets/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/manager/tickets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Tickets\Pages\ViewTicket::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Tickets/Pages/ViewTicket.php:7
* @route '/nds/manager/tickets/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const tickets = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
}

export default tickets