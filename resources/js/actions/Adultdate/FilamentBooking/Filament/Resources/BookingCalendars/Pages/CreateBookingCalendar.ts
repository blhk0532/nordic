import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
const CreateBookingCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar.url(options),
    method: 'get',
})

CreateBookingCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/adm/booking-calendars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar.url = (options?: RouteQueryOptions) => {
    return CreateBookingCalendar.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingCalendar.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingCalendar.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
const CreateBookingCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\CreateBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/CreateBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/create'
*/
CreateBookingCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingCalendar.form = CreateBookingCalendarForm

export default CreateBookingCalendar