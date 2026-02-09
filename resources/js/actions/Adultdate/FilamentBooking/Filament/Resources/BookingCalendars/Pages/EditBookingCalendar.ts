import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
const EditBookingCalendar5351fde785a858fe8b3b79d367416294 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, options),
    method: 'get',
})

EditBookingCalendar5351fde785a858fe8b3b79d367416294.definition = {
    methods: ["get","head"],
    url: '/nds/adm/booking-calendars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
EditBookingCalendar5351fde785a858fe8b3b79d367416294.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingCalendar5351fde785a858fe8b3b79d367416294.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
EditBookingCalendar5351fde785a858fe8b3b79d367416294.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
EditBookingCalendar5351fde785a858fe8b3b79d367416294.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
const EditBookingCalendar5351fde785a858fe8b3b79d367416294Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
EditBookingCalendar5351fde785a858fe8b3b79d367416294Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/adm/booking-calendars/{record}/edit'
*/
EditBookingCalendar5351fde785a858fe8b3b79d367416294Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar5351fde785a858fe8b3b79d367416294.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingCalendar5351fde785a858fe8b3b79d367416294.form = EditBookingCalendar5351fde785a858fe8b3b79d367416294Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
const EditBookingCalendar79a2da47ed53069862cf9376cf4506f5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking-calendars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
const EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\BookingCalendars\Pages\EditBookingCalendar::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/BookingCalendars/Pages/EditBookingCalendar.php:7
* @route '/nds/super/booking-calendars/{record}/edit'
*/
EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingCalendar79a2da47ed53069862cf9376cf4506f5.form = EditBookingCalendar79a2da47ed53069862cf9376cf4506f5Form

const EditBookingCalendar = {
    '/nds/adm/booking-calendars/{record}/edit': EditBookingCalendar5351fde785a858fe8b3b79d367416294,
    '/nds/super/booking-calendars/{record}/edit': EditBookingCalendar79a2da47ed53069862cf9376cf4506f5,
}

export default EditBookingCalendar