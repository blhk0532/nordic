import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
const ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url(options),
    method: 'get',
})

ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.definition = {
    methods: ["get","head"],
    url: '/nds/admin/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
const ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/admin/booking-calendars'
*/
ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161.form = ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161Form
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
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
const ListBookingCalendars13b36af287da47ed8348c412e9340242 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars13b36af287da47ed8348c412e9340242.url(options),
    method: 'get',
})

ListBookingCalendars13b36af287da47ed8348c412e9340242.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
ListBookingCalendars13b36af287da47ed8348c412e9340242.url = (options?: RouteQueryOptions) => {
    return ListBookingCalendars13b36af287da47ed8348c412e9340242.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
ListBookingCalendars13b36af287da47ed8348c412e9340242.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendars13b36af287da47ed8348c412e9340242.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
ListBookingCalendars13b36af287da47ed8348c412e9340242.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendars13b36af287da47ed8348c412e9340242.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
const ListBookingCalendars13b36af287da47ed8348c412e9340242Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars13b36af287da47ed8348c412e9340242.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
ListBookingCalendars13b36af287da47ed8348c412e9340242Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars13b36af287da47ed8348c412e9340242.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/nds/queue/booking-calendars'
*/
ListBookingCalendars13b36af287da47ed8348c412e9340242Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendars13b36af287da47ed8348c412e9340242.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendars13b36af287da47ed8348c412e9340242.form = ListBookingCalendars13b36af287da47ed8348c412e9340242Form
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
    '/nds/admin/booking-calendars': ListBookingCalendars501679480a11c6f4fdc0c9bd30bab161,
    '/nds/booking/booking-calendars': ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c,
    '/nds/calendar/booking-calendars': ListBookingCalendarsfe61409f596ebb2924374b0466a7243c,
    '/nds/queue/booking-calendars': ListBookingCalendars13b36af287da47ed8348c412e9340242,
    '/nds/super/booking-calendars': ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb,
}

export default ListBookingCalendars