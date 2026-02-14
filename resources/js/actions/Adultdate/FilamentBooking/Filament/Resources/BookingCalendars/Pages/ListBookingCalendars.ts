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
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
const ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url(options),
    method: 'get',
})

ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
const ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/booking/booking-calendars'
*/
ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c.form = ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293cForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
const ListBookingCalendarsfe61409f596ebb2924374b0466a7243c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url(options),
    method: 'get',
})

ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
const ListBookingCalendarsfe61409f596ebb2924374b0466a7243cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
ListBookingCalendarsfe61409f596ebb2924374b0466a7243cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/calendar/booking-calendars'
*/
ListBookingCalendarsfe61409f596ebb2924374b0466a7243cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendarsfe61409f596ebb2924374b0466a7243c.form = ListBookingCalendarsfe61409f596ebb2924374b0466a7243cForm

const ListBookingCalendars = {
    '/nds/adm/booking-calendars': ListBookingCalendarsb0f024150fccbe92f89ecbf0e1ff29da,
    '/nds/super/booking-calendars': ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb,
    '/nds/booking/booking-calendars': ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c,
    '/nds/calendar/booking-calendars': ListBookingCalendarsfe61409f596ebb2924374b0466a7243c,
}

export default ListBookingCalendars