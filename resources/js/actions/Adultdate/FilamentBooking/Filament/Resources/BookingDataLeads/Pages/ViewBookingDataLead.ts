import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
const ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, options),
    method: 'get',
})

ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
const ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}'
*/
ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8.form = ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
const ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
const ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.form = ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form

const ViewBookingDataLead = {
    '/nds/queue/booking-data-leads/{record}': ViewBookingDataLead786c1c2fa4f9a4dabdab585233ad00e8,
    '/nds/super/booking-data-leads/{record}': ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660,
}

export default ViewBookingDataLead