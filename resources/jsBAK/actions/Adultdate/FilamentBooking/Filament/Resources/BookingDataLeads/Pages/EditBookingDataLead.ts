import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
const EditBookingDataLeadda3459899eb29248d7cab802836504d2 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, options),
    method: 'get',
})

EditBookingDataLeadda3459899eb29248d7cab802836504d2.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking-data-leads/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadda3459899eb29248d7cab802836504d2.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditBookingDataLeadda3459899eb29248d7cab802836504d2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadda3459899eb29248d7cab802836504d2.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadda3459899eb29248d7cab802836504d2.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
const EditBookingDataLeadda3459899eb29248d7cab802836504d2Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadda3459899eb29248d7cab802836504d2Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/admin/tenant/{tenant}/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadda3459899eb29248d7cab802836504d2Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadda3459899eb29248d7cab802836504d2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingDataLeadda3459899eb29248d7cab802836504d2.form = EditBookingDataLeadda3459899eb29248d7cab802836504d2Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
const EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, options),
    method: 'get',
})

EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-data-leads/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
const EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/super/booking-data-leads/{record}/edit'
*/
EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8.form = EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8Form

const EditBookingDataLead = {
    '/admin/tenant/{tenant}/booking-data-leads/{record}/edit': EditBookingDataLeadda3459899eb29248d7cab802836504d2,
    '/nds/super/booking-data-leads/{record}/edit': EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8,
}

export default EditBookingDataLead