import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
const CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url(options),
    method: 'get',
})

CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.definition = {
    methods: ["get","head"],
    url: '/nds/admin/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
const CreateBookingCalendar4dde96f8719743f293e9e2f31591e0acForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
CreateBookingCalendar4dde96f8719743f293e9e2f31591e0acForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/admin/booking-calendars/create'
*/
CreateBookingCalendar4dde96f8719743f293e9e2f31591e0acForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac.form = CreateBookingCalendar4dde96f8719743f293e9e2f31591e0acForm
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
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
const CreateBookingCalendar936db79caf801d61ebd6b10b8449b313 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url(options),
    method: 'get',
})

CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
const CreateBookingCalendar936db79caf801d61ebd6b10b8449b313Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
CreateBookingCalendar936db79caf801d61ebd6b10b8449b313Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/queue/booking-calendars/create'
*/
CreateBookingCalendar936db79caf801d61ebd6b10b8449b313Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar936db79caf801d61ebd6b10b8449b313.form = CreateBookingCalendar936db79caf801d61ebd6b10b8449b313Form
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

const CreateBookingCalendar = {
    '/nds/admin/booking-calendars/create': CreateBookingCalendar4dde96f8719743f293e9e2f31591e0ac,
    '/nds/booking/booking-calendars/create': CreateBookingCalendar1d5d57f4acaa31ca5763be4c8916305a,
    '/nds/calendar/booking-calendars/create': CreateBookingCalendaraed665dfc483fbf4481ea857eca90bb7,
    '/nds/queue/booking-calendars/create': CreateBookingCalendar936db79caf801d61ebd6b10b8449b313,
    '/nds/super/booking-calendars/create': CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf,
}

export default CreateBookingCalendar