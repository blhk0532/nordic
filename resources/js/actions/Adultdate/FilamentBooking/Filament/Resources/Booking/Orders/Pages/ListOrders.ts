import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
const ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, options),
    method: 'get',
})

ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
const ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/admin/tenant/{tenant}/booking/orders'
*/
ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471.form = ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
const ListOrdersa346e134b28540d1dff367b1a643d71c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrdersa346e134b28540d1dff367b1a643d71c.url(options),
    method: 'get',
})

ListOrdersa346e134b28540d1dff367b1a643d71c.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersa346e134b28540d1dff367b1a643d71c.url = (options?: RouteQueryOptions) => {
    return ListOrdersa346e134b28540d1dff367b1a643d71c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersa346e134b28540d1dff367b1a643d71c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrdersa346e134b28540d1dff367b1a643d71c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersa346e134b28540d1dff367b1a643d71c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOrdersa346e134b28540d1dff367b1a643d71c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
const ListOrdersa346e134b28540d1dff367b1a643d71cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersa346e134b28540d1dff367b1a643d71c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersa346e134b28540d1dff367b1a643d71cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersa346e134b28540d1dff367b1a643d71c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\ListOrders::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/ListOrders.php:7
* @route '/nds/super/booking/orders'
*/
ListOrdersa346e134b28540d1dff367b1a643d71cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrdersa346e134b28540d1dff367b1a643d71c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOrdersa346e134b28540d1dff367b1a643d71c.form = ListOrdersa346e134b28540d1dff367b1a643d71cForm

const ListOrders = {
    '/admin/tenant/{tenant}/booking/orders': ListOrdersaff4b7cf1d3bea8ae0a7c3ec6759a471,
    '/nds/super/booking/orders': ListOrdersa346e134b28540d1dff367b1a643d71c,
}

export default ListOrders