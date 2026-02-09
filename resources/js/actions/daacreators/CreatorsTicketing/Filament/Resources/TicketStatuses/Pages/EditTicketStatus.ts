import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
const EditTicketStatus = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTicketStatus.url(args, options),
    method: 'get',
})

EditTicketStatus.definition = {
    methods: ["get","head"],
    url: '/nds/manager/ticket-statuses/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
EditTicketStatus.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTicketStatus.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
EditTicketStatus.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTicketStatus.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
EditTicketStatus.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTicketStatus.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
const EditTicketStatusForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicketStatus.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
EditTicketStatusForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicketStatus.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\TicketStatuses\Pages\EditTicketStatus::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/TicketStatuses/Pages/EditTicketStatus.php:7
* @route '/nds/manager/ticket-statuses/{record}/edit'
*/
EditTicketStatusForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicketStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTicketStatus.form = EditTicketStatusForm

export default EditTicketStatus