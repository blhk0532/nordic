import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
const CreateBookingCalendarf56deacded6d875d492b1105cd118ae4 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, options),
    method: 'get',
})

CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
const CreateBookingCalendarf56deacded6d875d492b1105cd118ae4Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
CreateBookingCalendarf56deacded6d875d492b1105cd118ae4Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/admin/tenant/{tenant}/booking-calendars/create'
*/
CreateBookingCalendarf56deacded6d875d492b1105cd118ae4Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendarf56deacded6d875d492b1105cd118ae4.form = CreateBookingCalendarf56deacded6d875d492b1105cd118ae4Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
const CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
const CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/super/booking-calendars/create'
*/
CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf.form = CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcfForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
const CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
const CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/booking/booking-calendars/create'
*/
CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a.form = CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305aForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
const CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
const CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/calendar/booking-calendars/create'
*/
CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7.form = CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7Form

const CreateBookingCalendar = {
    '/admin/tenant/{tenant}/booking-calendars/create': CreateBookingCalendarf56deacded6d875d492b1105cd118ae4,
    '/nds/super/booking-calendars/create': CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf,
    '/nds/booking/booking-calendars/create': CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a,
    '/nds/calendar/booking-calendars/create': CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7,
}

export default CreateBookingCalendar