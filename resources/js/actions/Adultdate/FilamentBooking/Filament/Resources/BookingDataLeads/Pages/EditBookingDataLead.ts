import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
const EditBookingDataLead757d1288bde6e0c469712508d4c3ed21 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, options),
    method: 'get',
})

EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.definition = {
    methods: ["get","head"],
    url: '/nds/queue/booking-data-leads/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
const EditBookingDataLead757d1288bde6e0c469712508d4c3ed21Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
EditBookingDataLead757d1288bde6e0c469712508d4c3ed21Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingDataLeads\Pages\EditBookingDataLead::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingDataLeads/Pages/EditBookingDataLead.php:7
* @route '/nds/queue/booking-data-leads/{record}/edit'
*/
EditBookingDataLead757d1288bde6e0c469712508d4c3ed21Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingDataLead757d1288bde6e0c469712508d4c3ed21.form = EditBookingDataLead757d1288bde6e0c469712508d4c3ed21Form
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
    '/nds/queue/booking-data-leads/{record}/edit': EditBookingDataLead757d1288bde6e0c469712508d4c3ed21,
    '/nds/super/booking-data-leads/{record}/edit': EditBookingDataLeadca6335d8641c5d7403b8462cd559c9c8,
}

export default EditBookingDataLead