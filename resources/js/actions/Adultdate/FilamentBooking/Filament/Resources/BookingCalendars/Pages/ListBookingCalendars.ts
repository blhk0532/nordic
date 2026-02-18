import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
const ListBookingCalendarsf21baf353532b7d806613e622700e6ac = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, options),
    method: 'get',
})

ListBookingCalendarsf21baf353532b7d806613e622700e6ac.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-calendars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return ListBookingCalendarsf21baf353532b7d806613e622700e6ac.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
ListBookingCalendarsf21baf353532b7d806613e622700e6ac.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
ListBookingCalendarsf21baf353532b7d806613e622700e6ac.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
const ListBookingCalendarsf21baf353532b7d806613e622700e6acForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
ListBookingCalendarsf21baf353532b7d806613e622700e6acForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\ListBookingCalendars::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/ListBookingCalendars.php:7
* @route '/admin/tenant/{tenant}/booking-calendars'
*/
ListBookingCalendarsf21baf353532b7d806613e622700e6acForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingCalendarsf21baf353532b7d806613e622700e6ac.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingCalendarsf21baf353532b7d806613e622700e6ac.form = ListBookingCalendarsf21baf353532b7d806613e622700e6acForm
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
    '/admin/tenant/{tenant}/booking-calendars': ListBookingCalendarsf21baf353532b7d806613e622700e6ac,
    '/nds/queue/booking-calendars': ListBookingCalendars13b36af287da47ed8348c412e9340242,
    '/nds/super/booking-calendars': ListBookingCalendars4d6dba31c0186cf1716264dbdc263fdb,
    '/nds/booking/booking-calendars': ListBookingCalendars3a89e132ec6c8aec3cce8826dd7c293c,
    '/nds/calendar/booking-calendars': ListBookingCalendarsfe61409f596ebb2924374b0466a7243c,
}

export default ListBookingCalendars