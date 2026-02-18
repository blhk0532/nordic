import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
const BookingCalendersX6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX6.url(options),
    method: 'get',
})

BookingCalendersX6.definition = {
    methods: ["get","head"],
    url: '/nds/booking/nds-kalender-x6',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
BookingCalendersX6.url = (options?: RouteQueryOptions) => {
    return BookingCalendersX6.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
BookingCalendersX6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
BookingCalendersX6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BookingCalendersX6.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
const BookingCalendersX6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
BookingCalendersX6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\BookingCalendersX6::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/BookingCalendersX6.php:7
* @route '/nds/booking/nds-kalender-x6'
*/
BookingCalendersX6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BookingCalendersX6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BookingCalendersX6.form = BookingCalendersX6Form

export default BookingCalendersX6