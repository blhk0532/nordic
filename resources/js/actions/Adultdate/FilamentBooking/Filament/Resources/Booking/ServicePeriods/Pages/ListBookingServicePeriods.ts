import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods.url(options),
    method: 'get',
})

ListBookingServicePeriods.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods.url = (options?: RouteQueryOptions) => {
    return ListBookingServicePeriods.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriodsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriodsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriodsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods.form = ListBookingServicePeriodsForm

export default ListBookingServicePeriods