import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedules = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedules.url(args, options),
    method: 'get',
})

ManageServiceProviderSchedules.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users/{record}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ManageServiceProviderSchedules.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageServiceProviderSchedules.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedules.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageServiceProviderSchedules.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
const ManageServiceProviderSchedulesForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulesForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ManageServiceProviderSchedules::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ManageServiceProviderSchedules.php:7
* @route '/nds/super/booking/users/{record}/schedule'
*/
ManageServiceProviderSchedulesForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageServiceProviderSchedules.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageServiceProviderSchedules.form = ManageServiceProviderSchedulesForm

export default ManageServiceProviderSchedules