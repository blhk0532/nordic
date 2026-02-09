import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
const ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url(options),
    method: 'get',
})

ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url = (options?: RouteQueryOptions) => {
    return ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
const ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/queue/booking-data-leads'
*/
ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8.form = ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url = (options?: RouteQueryOptions) => {
    return ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.form = ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm

const ListBookingDataLeads = {
    '/nds/queue/booking-data-leads': ListBookingDataLeadsf7265a442744c23b1ccf79c7fa1155f8,
    '/nds/super/booking-data-leads': ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b,
}

export default ListBookingDataLeads