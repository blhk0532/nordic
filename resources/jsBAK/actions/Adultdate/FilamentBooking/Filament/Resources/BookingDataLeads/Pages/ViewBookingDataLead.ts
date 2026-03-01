import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
const ViewBookingDataLead42963a1f1c209fae22fc473db7edb447 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, options),
    method: 'get',
})

ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
const ViewBookingDataLead42963a1f1c209fae22fc473db7edb447Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead42963a1f1c209fae22fc473db7edb447Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}'
*/
ViewBookingDataLead42963a1f1c209fae22fc473db7edb447Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead42963a1f1c209fae22fc473db7edb447.form = ViewBookingDataLead42963a1f1c209fae22fc473db7edb447Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
const ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
const ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\ViewBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/ViewBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}'
*/
ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660.form = ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660Form

const ViewBookingDataLead = {
    '/admin/tenant/{tenant}/booking-data-leads/{record}': ViewBookingDataLead42963a1f1c209fae22fc473db7edb447,
    '/nds/super/booking-data-leads/{record}': ViewBookingDataLead8c10cc9e3b4169ec8bf332daa46fe660,
}

export default ViewBookingDataLead