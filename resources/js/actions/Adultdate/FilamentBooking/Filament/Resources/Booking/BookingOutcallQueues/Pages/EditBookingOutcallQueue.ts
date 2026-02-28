import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
const EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, options),
    method: 'get',
})

EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
const EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8.form = EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
const EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, options),
    method: 'get',
})

EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/booking-outcall-queues/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
const EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/nds/super/booking/booking-outcall-queues/{record}/edit'
*/
EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b.form = EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556bForm

const EditBookingOutcallQueue = {
    '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit': EditBookingOutcallQueue10383511ee929938257c22169cc0a2d8,
    '/nds/super/booking/booking-outcall-queues/{record}/edit': EditBookingOutcallQueue70383a4d9f5533d4d619dd8e86aa556b,
}

export default EditBookingOutcallQueue