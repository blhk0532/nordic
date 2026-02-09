import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
const CreateDailyLocation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation.url(options),
    method: 'get',
})

CreateDailyLocation.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation.url = (options?: RouteQueryOptions) => {
    return CreateDailyLocation.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDailyLocation.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
const CreateDailyLocationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDailyLocation.form = CreateDailyLocationForm

export default CreateDailyLocation