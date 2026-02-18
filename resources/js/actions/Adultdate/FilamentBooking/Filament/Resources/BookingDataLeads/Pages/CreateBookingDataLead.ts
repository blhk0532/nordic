import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
const CreateBookingDataLead146a38b752dcb7da72cd3488fee44673 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url(options),
    method: 'get',
})

CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-data-leads/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url = (options?: RouteQueryOptions) => {
    return CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
const CreateBookingDataLead146a38b752dcb7da72cd3488fee44673Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
CreateBookingDataLead146a38b752dcb7da72cd3488fee44673Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/create'
*/
CreateBookingDataLead146a38b752dcb7da72cd3488fee44673Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingDataLead146a38b752dcb7da72cd3488fee44673.form = CreateBookingDataLead146a38b752dcb7da72cd3488fee44673Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
const CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url(options),
    method: 'get',
})

CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url = (options?: RouteQueryOptions) => {
    return CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
const CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/create'
*/
CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b.form = CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06bForm

const CreateBookingDataLead = {
    '/nds/queue/booking-data-leads/create': CreateBookingDataLead146a38b752dcb7da72cd3488fee44673,
    '/nds/super/booking-data-leads/create': CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b,
}

export default CreateBookingDataLead