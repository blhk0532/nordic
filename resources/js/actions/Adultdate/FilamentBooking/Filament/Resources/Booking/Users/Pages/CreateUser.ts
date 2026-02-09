import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
const CreateUser1d56c60dfe5c2c72a3881315251b3610 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser1d56c60dfe5c2c72a3881315251b3610.url(options),
    method: 'get',
})

CreateUser1d56c60dfe5c2c72a3881315251b3610.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
CreateUser1d56c60dfe5c2c72a3881315251b3610.url = (options?: RouteQueryOptions) => {
    return CreateUser1d56c60dfe5c2c72a3881315251b3610.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
CreateUser1d56c60dfe5c2c72a3881315251b3610.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser1d56c60dfe5c2c72a3881315251b3610.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
CreateUser1d56c60dfe5c2c72a3881315251b3610.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser1d56c60dfe5c2c72a3881315251b3610.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
const CreateUser1d56c60dfe5c2c72a3881315251b3610Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser1d56c60dfe5c2c72a3881315251b3610.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
CreateUser1d56c60dfe5c2c72a3881315251b3610Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser1d56c60dfe5c2c72a3881315251b3610.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/booking/booking/users/create'
*/
CreateUser1d56c60dfe5c2c72a3881315251b3610Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser1d56c60dfe5c2c72a3881315251b3610.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser1d56c60dfe5c2c72a3881315251b3610.form = CreateUser1d56c60dfe5c2c72a3881315251b3610Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
const CreateUserf7d09571119a4ba22224ad276df38dec = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUserf7d09571119a4ba22224ad276df38dec.url(options),
    method: 'get',
})

CreateUserf7d09571119a4ba22224ad276df38dec.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserf7d09571119a4ba22224ad276df38dec.url = (options?: RouteQueryOptions) => {
    return CreateUserf7d09571119a4ba22224ad276df38dec.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserf7d09571119a4ba22224ad276df38dec.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUserf7d09571119a4ba22224ad276df38dec.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserf7d09571119a4ba22224ad276df38dec.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUserf7d09571119a4ba22224ad276df38dec.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
const CreateUserf7d09571119a4ba22224ad276df38decForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUserf7d09571119a4ba22224ad276df38dec.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserf7d09571119a4ba22224ad276df38decForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUserf7d09571119a4ba22224ad276df38dec.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/super/booking/users/create'
*/
CreateUserf7d09571119a4ba22224ad276df38decForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUserf7d09571119a4ba22224ad276df38dec.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUserf7d09571119a4ba22224ad276df38dec.form = CreateUserf7d09571119a4ba22224ad276df38decForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
const CreateUsera18363b22a9e3e6d8db550cf4b9dede5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url(options),
    method: 'get',
})

CreateUsera18363b22a9e3e6d8db550cf4b9dede5.definition = {
    methods: ["get","head"],
    url: '/nds/user/booking/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url = (options?: RouteQueryOptions) => {
    return CreateUsera18363b22a9e3e6d8db550cf4b9dede5.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
CreateUsera18363b22a9e3e6d8db550cf4b9dede5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
CreateUsera18363b22a9e3e6d8db550cf4b9dede5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
const CreateUsera18363b22a9e3e6d8db550cf4b9dede5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
CreateUsera18363b22a9e3e6d8db550cf4b9dede5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/nds/user/booking/users/create'
*/
CreateUsera18363b22a9e3e6d8db550cf4b9dede5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUsera18363b22a9e3e6d8db550cf4b9dede5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUsera18363b22a9e3e6d8db550cf4b9dede5.form = CreateUsera18363b22a9e3e6d8db550cf4b9dede5Form

const CreateUser = {
    '/nds/booking/booking/users/create': CreateUser1d56c60dfe5c2c72a3881315251b3610,
    '/nds/super/booking/users/create': CreateUserf7d09571119a4ba22224ad276df38dec,
    '/nds/user/booking/users/create': CreateUsera18363b22a9e3e6d8db550cf4b9dede5,
}

export default CreateUser