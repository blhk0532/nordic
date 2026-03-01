import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ListBookingOutcallQueues::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ListBookingOutcallQueues.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
create.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/create'
*/
createForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
export const view = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
view.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
view.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
view.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
const viewForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
viewForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\ViewBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/ViewBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}'
*/
viewForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
edit.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\BookingOutcallQueues\Pages\EditBookingOutcallQueue::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/BookingOutcallQueues/Pages/EditBookingOutcallQueue.php:7
* @route '/admin/tenant/{tenant}/booking/booking-outcall-queues/{record}/edit'
*/
editForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const bookingOutcallQueues = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default bookingOutcallQueues