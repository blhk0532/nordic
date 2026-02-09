import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
const ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url(options),
    method: 'get',
})

ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.definition = {
    methods: ["get","head"],
    url: '/nds/adm/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
const ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29daForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29daForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/adm/booking-calendars'
*/
ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29daForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da.form = ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29daForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
const ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url(options),
    method: 'get',
})

ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
const ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/super/booking-calendars'
*/
ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb.form = ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdbForm

const ListBookingCalendars = {
    '/nds/adm/booking-calendars': ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da,
    '/nds/super/booking-calendars': ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb,
}

export default ListBookingCalendars