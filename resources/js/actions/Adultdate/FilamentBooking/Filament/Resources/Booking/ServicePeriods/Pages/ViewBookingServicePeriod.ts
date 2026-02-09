import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriod = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriod.url(args, options),
    method: 'get',
})

ViewBookingServicePeriod.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewBookingServicePeriod.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriod.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingServicePeriod.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
const ViewBookingServicePeriodForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ViewBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ViewBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}'
*/
ViewBookingServicePeriodForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingServicePeriod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingServicePeriod.form = ViewBookingServicePeriodForm

export default ViewBookingServicePeriod