import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations.url(options),
    method: 'get',
})

ListDailyLocations.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations.url = (options?: RouteQueryOptions) => {
    return ListDailyLocations.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations.form = ListDailyLocationsForm

export default ListDailyLocations