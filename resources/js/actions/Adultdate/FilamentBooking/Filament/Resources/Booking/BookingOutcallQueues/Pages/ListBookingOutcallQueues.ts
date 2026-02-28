import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, options),
    method: 'get',
})

ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427eForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427eForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427eForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e.form = ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427eForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url(options),
    method: 'get',
})

ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/booking-outcall-queues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url = (options?: RouteQueryOptions) => {
    return ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
const ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/nds/super/booking/booking-outcall-queues'
*/
ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9.form = ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9Form

const ListBookingOutcallQueues = {
    '/admin/tenant/{tenant}/booking/booking-outcall-queues': ListBookingOutcallQueues53409f1477555bbfeb11d37a5261427e,
    '/nds/super/booking/booking-outcall-queues': ListBookingOutcallQueues0934957dc353f42aa60346de66a5f3f9,
}

export default ListBookingOutcallQueues