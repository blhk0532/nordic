import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
const ListUsersded7b5cee4e050c36bbea2454a5d8111 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, options),
    method: 'get',
})

ListUsersded7b5cee4e050c36bbea2454a5d8111.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
ListUsersded7b5cee4e050c36bbea2454a5d8111.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListUsersded7b5cee4e050c36bbea2454a5d8111.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
ListUsersded7b5cee4e050c36bbea2454a5d8111.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
ListUsersded7b5cee4e050c36bbea2454a5d8111.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
const ListUsersded7b5cee4e050c36bbea2454a5d8111Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
ListUsersded7b5cee4e050c36bbea2454a5d8111Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/admin/tenant/{tenant}/booking/users'
*/
ListUsersded7b5cee4e050c36bbea2454a5d8111Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersded7b5cee4e050c36bbea2454a5d8111.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsersded7b5cee4e050c36bbea2454a5d8111.form = ListUsersded7b5cee4e050c36bbea2454a5d8111Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
const ListUsers0d7721a5613c19be9349b032ed77eac4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers0d7721a5613c19be9349b032ed77eac4.url(options),
    method: 'get',
})

ListUsers0d7721a5613c19be9349b032ed77eac4.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
ListUsers0d7721a5613c19be9349b032ed77eac4.url = (options?: RouteQueryOptions) => {
    return ListUsers0d7721a5613c19be9349b032ed77eac4.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
ListUsers0d7721a5613c19be9349b032ed77eac4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers0d7721a5613c19be9349b032ed77eac4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
ListUsers0d7721a5613c19be9349b032ed77eac4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers0d7721a5613c19be9349b032ed77eac4.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
const ListUsers0d7721a5613c19be9349b032ed77eac4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers0d7721a5613c19be9349b032ed77eac4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
ListUsers0d7721a5613c19be9349b032ed77eac4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers0d7721a5613c19be9349b032ed77eac4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/super/booking/users'
*/
ListUsers0d7721a5613c19be9349b032ed77eac4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers0d7721a5613c19be9349b032ed77eac4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers0d7721a5613c19be9349b032ed77eac4.form = ListUsers0d7721a5613c19be9349b032ed77eac4Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
const ListUsersc3de7c8abb496c64d1373782bf63c77f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersc3de7c8abb496c64d1373782bf63c77f.url(options),
    method: 'get',
})

ListUsersc3de7c8abb496c64d1373782bf63c77f.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
ListUsersc3de7c8abb496c64d1373782bf63c77f.url = (options?: RouteQueryOptions) => {
    return ListUsersc3de7c8abb496c64d1373782bf63c77f.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
ListUsersc3de7c8abb496c64d1373782bf63c77f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersc3de7c8abb496c64d1373782bf63c77f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
ListUsersc3de7c8abb496c64d1373782bf63c77f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsersc3de7c8abb496c64d1373782bf63c77f.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
const ListUsersc3de7c8abb496c64d1373782bf63c77fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersc3de7c8abb496c64d1373782bf63c77f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
ListUsersc3de7c8abb496c64d1373782bf63c77fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersc3de7c8abb496c64d1373782bf63c77f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\ListUsers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/ListUsers.php:7
* @route '/nds/booking/booking/users'
*/
ListUsersc3de7c8abb496c64d1373782bf63c77fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersc3de7c8abb496c64d1373782bf63c77f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsersc3de7c8abb496c64d1373782bf63c77f.form = ListUsersc3de7c8abb496c64d1373782bf63c77fForm

const ListUsers = {
    '/admin/tenant/{tenant}/booking/users': ListUsersded7b5cee4e050c36bbea2454a5d8111,
    '/nds/super/booking/users': ListUsers0d7721a5613c19be9349b032ed77eac4,
    '/nds/booking/booking/users': ListUsersc3de7c8abb496c64d1373782bf63c77f,
}

export default ListUsers