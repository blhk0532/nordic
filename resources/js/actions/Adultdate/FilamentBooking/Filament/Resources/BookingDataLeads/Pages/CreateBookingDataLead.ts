import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
const CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, options),
    method: 'get',
})

CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-data-leads/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
const CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\CreateBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/CreateBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/create'
*/
CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47.form = CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47Form
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
    '/admin/tenant/{tenant}/booking-data-leads/create': CreateBookingDataLeade80cf3e4b3a43e95f4377cdde60abe47,
    '/nds/super/booking-data-leads/create': CreateBookingDataLeadfeecd87932c4f19411fca25ba575e06b,
}

export default CreateBookingDataLead