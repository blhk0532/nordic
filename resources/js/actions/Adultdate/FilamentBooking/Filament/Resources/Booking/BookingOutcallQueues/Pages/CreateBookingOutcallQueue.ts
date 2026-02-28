import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, options),
    method: 'get',
})

CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084.form = CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url(options),
    method: 'get',
})

CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/booking-outcall-queues/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url = (options?: RouteQueryOptions) => {
    return CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/create'
*/
CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe.form = CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebeForm

const CreateBookingOutcallQueue = {
    '/admin/tenant/{tenant}/booking/booking-outcall-queues/create': CreateBookingOutcallQueue6e52ca7ab113b5ccb46231793dfe8084,
    '/nds/super/booking/booking-outcall-queues/create': CreateBookingOutcallQueuea5cab0ee69caa41f476a973a8eb3bebe,
}

export default CreateBookingOutcallQueue