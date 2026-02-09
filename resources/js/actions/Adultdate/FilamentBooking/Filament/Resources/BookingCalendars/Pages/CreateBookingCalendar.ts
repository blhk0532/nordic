import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
const CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url(options),
    method: 'get',
})

CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.definition = {
    methods: ["get","head"],
    url: '/nds/adm/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
const CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eacForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eacForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eacForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac.form = CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eacForm
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
    '/nds/adm/booking-calendars/create': CreateBookingCalendar81d863a64fb8ebc4dde9819fa75d9eac,
    '/nds/super/booking-calendars/create': CreateBookingCalendarc1979b8ae28c874c6fc2272caf13cdcf,
}

export default CreateBookingCalendar