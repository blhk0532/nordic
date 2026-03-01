import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
const ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, options),
    method: 'get',
})

ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
const ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316bForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316bForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316bForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b.form = ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316bForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
const ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, options),
    method: 'get',
})

ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/booking-outcall-queues/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
const ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}'
*/
ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6.form = ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6Form

const ViewBookingOutcallQueue = {
    '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}': ViewBookingOutcallQueue4078700a6a58a265aae37860e3bd316b,
    '/nds/super/booking/booking-outcall-queues/{record}': ViewBookingOutcallQueue5efd3f477ea873c57539579c78c174c6,
}

export default ViewBookingOutcallQueue