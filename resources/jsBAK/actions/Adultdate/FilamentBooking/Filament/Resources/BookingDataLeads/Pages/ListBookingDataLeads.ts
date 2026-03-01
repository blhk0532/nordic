import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
const ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, options),
    method: 'get',
})

ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
const ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads'
*/
ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d.form = ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3dForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url = (options?: RouteQueryOptions) => {
    return ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
const ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ListBookingDataLeads::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ListBookingDataLeads.php:7
* @route '/nds/super/booking-data-leads'
*/
ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b.form = ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37bForm

const ListBookingDataLeads = {
    '/admin/tenant/{tenant}/booking-data-leads': ListBookingDataLeadsa38f6a46df4c79ee95efffa076537f3d,
    '/nds/super/booking-data-leads': ListBookingDataLeads6e613ec411f32eec27ec0e72283ee37b,
}

export default ListBookingDataLeads