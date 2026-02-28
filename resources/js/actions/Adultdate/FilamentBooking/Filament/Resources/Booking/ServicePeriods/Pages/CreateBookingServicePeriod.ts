import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, options),
    method: 'get',
})

CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3.form = CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url = (options?: RouteQueryOptions) => {
    return CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87.form = CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url = (options?: RouteQueryOptions) => {
    return CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
const CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\CreateBookingServicePeriod::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/CreateBookingServicePeriod.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods/create'
*/
CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537.form = CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537Form

const CreateBookingServicePeriod = {
    '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods/create': CreateBookingServicePeriode8fa91c44e375036ec4d55aa5b5ff0f3,
    '/nds/super/booking/service-periods/booking-service-periods/create': CreateBookingServicePeriod0f627a8282be2c8286349689460c3d87,
    '/nds/booking/booking/service-periods/booking-service-periods/create': CreateBookingServicePeriod2e179d9e3c4ac4720ca4ccc548818537,
}

export default CreateBookingServicePeriod