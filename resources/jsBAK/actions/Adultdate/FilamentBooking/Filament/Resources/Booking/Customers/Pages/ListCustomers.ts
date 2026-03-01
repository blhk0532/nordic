import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
const ListCustomerse49d7bcc7306eb3041537e5062745e7a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, options),
    method: 'get',
})

ListCustomerse49d7bcc7306eb3041537e5062745e7a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
ListCustomerse49d7bcc7306eb3041537e5062745e7a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCustomerse49d7bcc7306eb3041537e5062745e7a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
ListCustomerse49d7bcc7306eb3041537e5062745e7a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
ListCustomerse49d7bcc7306eb3041537e5062745e7a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
const ListCustomerse49d7bcc7306eb3041537e5062745e7aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
ListCustomerse49d7bcc7306eb3041537e5062745e7aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
ListCustomerse49d7bcc7306eb3041537e5062745e7aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomerse49d7bcc7306eb3041537e5062745e7a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCustomerse49d7bcc7306eb3041537e5062745e7a.form = ListCustomerse49d7bcc7306eb3041537e5062745e7aForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
const ListCustomersc429f028f015bbed0fac42d65c783964 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomersc429f028f015bbed0fac42d65c783964.url(options),
    method: 'get',
})

ListCustomersc429f028f015bbed0fac42d65c783964.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
ListCustomersc429f028f015bbed0fac42d65c783964.url = (options?: RouteQueryOptions) => {
    return ListCustomersc429f028f015bbed0fac42d65c783964.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
ListCustomersc429f028f015bbed0fac42d65c783964.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomersc429f028f015bbed0fac42d65c783964.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
ListCustomersc429f028f015bbed0fac42d65c783964.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCustomersc429f028f015bbed0fac42d65c783964.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
const ListCustomersc429f028f015bbed0fac42d65c783964Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomersc429f028f015bbed0fac42d65c783964.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
ListCustomersc429f028f015bbed0fac42d65c783964Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomersc429f028f015bbed0fac42d65c783964.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/nds/super/booking/customers'
*/
ListCustomersc429f028f015bbed0fac42d65c783964Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomersc429f028f015bbed0fac42d65c783964.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCustomersc429f028f015bbed0fac42d65c783964.form = ListCustomersc429f028f015bbed0fac42d65c783964Form

const ListCustomers = {
    '/admin/tenant/{tenant}/booking/customers': ListCustomerse49d7bcc7306eb3041537e5062745e7a,
    '/nds/super/booking/customers': ListCustomersc429f028f015bbed0fac42d65c783964,
}

export default ListCustomers