import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriod = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriod.url(args, options),
    method: 'get',
})

EditBookingServicePeriod.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingServicePeriod.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriod.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingServicePeriod.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
const EditBookingServicePeriodForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\EditBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/EditBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/{record}/edit'
*/
EditBookingServicePeriodForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingServicePeriod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingServicePeriod.form = EditBookingServicePeriodForm

export default EditBookingServicePeriod