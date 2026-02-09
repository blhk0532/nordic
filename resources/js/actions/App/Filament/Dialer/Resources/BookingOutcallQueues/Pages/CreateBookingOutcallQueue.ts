import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueue.url(options),
    method: 'get',
})

CreateBookingOutcallQueue.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/booking-outcall-queues/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue.url = (options?: RouteQueryOptions) => {
    return CreateBookingOutcallQueue.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingOutcallQueue.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
CreateBookingOutcallQueue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingOutcallQueue.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
const CreateBookingOutcallQueueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
CreateBookingOutcallQueueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Resources\BookingOutcallQueues\Pages\CreateBookingOutcallQueue::__invoke
* @see app/Filament/Dialer/Resources/BookingOutcallQueues/Pages/CreateBookingOutcallQueue.php:7
* @route '/nds/dialer/booking-outcall-queues/create'
*/
CreateBookingOutcallQueueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingOutcallQueue.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingOutcallQueue.form = CreateBookingOutcallQueueForm

export default CreateBookingOutcallQueue