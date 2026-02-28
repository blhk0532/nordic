import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods97173ad93b0b50657441c54997301a77 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, options),
    method: 'get',
})

ListBookingServicePeriods97173ad93b0b50657441c54997301a77.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookingServicePeriods97173ad93b0b50657441c54997301a77.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods97173ad93b0b50657441c54997301a77.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods97173ad93b0b50657441c54997301a77.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods97173ad93b0b50657441c54997301a77Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods97173ad93b0b50657441c54997301a77Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods97173ad93b0b50657441c54997301a77Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods97173ad93b0b50657441c54997301a77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods97173ad93b0b50657441c54997301a77.form = ListBookingServicePeriods97173ad93b0b50657441c54997301a77Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url = (options?: RouteQueryOptions) => {
    return ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/super/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541.form = ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/service-periods/booking-service-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url = (options?: RouteQueryOptions) => {
    return ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
const ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\ServicePeriods\Pages\ListBookingServicePeriods::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/ServicePeriods/Pages/ListBookingServicePeriods.php:7
* @route '/nds/booking/booking/service-periods/booking-service-periods'
*/
ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca.form = ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178caForm

const ListBookingServicePeriods = {
    '/admin/tenant/{tenant}/booking/service-periods/booking-service-periods': ListBookingServicePeriods97173ad93b0b50657441c54997301a77,
    '/nds/super/booking/service-periods/booking-service-periods': ListBookingServicePeriods1406bd9c29f65b96e7615735997c8541,
    '/nds/booking/booking/service-periods/booking-service-periods': ListBookingServicePeriods3318919c163a68c61f8f2b6c0ad178ca,
}

export default ListBookingServicePeriods