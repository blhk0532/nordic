import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
const CreateUser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(options),
    method: 'get',
})

CreateUser.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUser.url = (options?: RouteQueryOptions) => {
    return CreateUser.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
const CreateUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser.form = CreateUserForm

export default CreateUser