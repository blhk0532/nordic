import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
const ViewBookingDataLead = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'get',
})

ViewBookingDataLead.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
ViewBookingDataLead.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
ViewBookingDataLead.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
ViewBookingDataLead.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
const ViewBookingDataLeadForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
ViewBookingDataLeadForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see app/Filament/Dialer/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/dialer/booking-data-leads/{record}'
*/
ViewBookingDataLeadForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead.form = ViewBookingDataLeadForm

export default ViewBookingDataLead