import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
const CreateUser728ddda7b7feeb06d05c615a91a97f68 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, options),
    method: 'get',
})

CreateUser728ddda7b7feeb06d05c615a91a97f68.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
CreateUser728ddda7b7feeb06d05c615a91a97f68.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateUser728ddda7b7feeb06d05c615a91a97f68.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
CreateUser728ddda7b7feeb06d05c615a91a97f68.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
CreateUser728ddda7b7feeb06d05c615a91a97f68.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
const CreateUser728ddda7b7feeb06d05c615a91a97f68Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
CreateUser728ddda7b7feeb06d05c615a91a97f68Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\CreateUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/booking/users/create'
*/
CreateUser728ddda7b7feeb06d05c615a91a97f68Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser728ddda7b7feeb06d05c615a91a97f68.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser728ddda7b7feeb06d05c615a91a97f68.form = CreateUser728ddda7b7feeb06d05c615a91a97f68Form
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

const CreateUser = {
    '/admin/tenant/{tenant}/booking/users/create': CreateUser728ddda7b7feeb06d05c615a91a97f68,
    '/nds/super/booking/users/create': CreateUserf7d09571119a4ba22224ad276df38dec,
    '/nds/booking/booking/users/create': CreateUser1d56c60dfe5c2c72a3881315251b3610,
}

export default CreateUser