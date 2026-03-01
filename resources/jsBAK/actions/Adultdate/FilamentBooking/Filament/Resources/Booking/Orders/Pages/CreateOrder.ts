import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
const CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, options),
    method: 'get',
})

CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
const CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/create'
*/
CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6.form = CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
const CreateOrder912e0a5917bac1848b7d0ff5e06744e4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url(options),
    method: 'get',
})

CreateOrder912e0a5917bac1848b7d0ff5e06744e4.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url = (options?: RouteQueryOptions) => {
    return CreateOrder912e0a5917bac1848b7d0ff5e06744e4.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
CreateOrder912e0a5917bac1848b7d0ff5e06744e4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
CreateOrder912e0a5917bac1848b7d0ff5e06744e4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
const CreateOrder912e0a5917bac1848b7d0ff5e06744e4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
CreateOrder912e0a5917bac1848b7d0ff5e06744e4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\CreateOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/CreateOrder.php:7
* @route '/nds/super/booking/orders/create'
*/
CreateOrder912e0a5917bac1848b7d0ff5e06744e4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder912e0a5917bac1848b7d0ff5e06744e4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOrder912e0a5917bac1848b7d0ff5e06744e4.form = CreateOrder912e0a5917bac1848b7d0ff5e06744e4Form

const CreateOrder = {
    '/admin/tenant/{tenant}/booking/orders/create': CreateOrder47a54a5e2fd9acb1c98fff47a500b2c6,
    '/nds/super/booking/orders/create': CreateOrder912e0a5917bac1848b7d0ff5e06744e4,
}

export default CreateOrder