import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod.url(options),
    method: 'get',
})

CreateBookingServicePeriod.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod.url = (options?: RouteQueryOptions) => {
    return CreateBookingServicePeriod.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriod.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriod.form = CreateBookingServicePeriodForm

export default CreateBookingServicePeriod