import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
const EditDailyLocation = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocation.url(args, options),
    method: 'get',
})

EditDailyLocation.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDailyLocation.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocation.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDailyLocation.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
const EditDailyLocationForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocationForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocationForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDailyLocation.form = EditDailyLocationForm

export default EditDailyLocation