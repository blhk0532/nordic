import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
export const show = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/private/ticket-attachments/{ticketId}/{filename}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
show.url = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            ticketId: args[0],
            filename: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ticketId: args.ticketId,
        filename: args.filename,
    }

    return show.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
show.get = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
show.head = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
const showForm = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
showForm.get = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::show
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
showForm.head = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const TicketAttachmentController = { show }

export default TicketAttachmentController