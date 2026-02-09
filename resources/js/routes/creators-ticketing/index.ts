import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
export const attachment = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: attachment.url(args, options),
    method: 'get',
})

attachment.definition = {
    methods: ["get","head"],
    url: '/private/ticket-attachments/{ticketId}/{filename}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
attachment.url = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions) => {
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

    return attachment.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
attachment.get = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: attachment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
attachment.head = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: attachment.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
const attachmentForm = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: attachment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
attachmentForm.get = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: attachment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Http\Controllers\TicketAttachmentController::attachment
* @see plugins/daacreators/creators-ticketing/src/Http/Controllers/TicketAttachmentController.php:16
* @route '/private/ticket-attachments/{ticketId}/{filename}'
*/
attachmentForm.head = (args: { ticketId: string | number, filename: string | number } | [ticketId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: attachment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

attachment.form = attachmentForm

const creatorsTicketing = {
    attachment: Object.assign(attachment, attachment),
}

export default creatorsTicketing