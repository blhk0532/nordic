import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
const EditDailyLocationa861790fa9fe81e4b4afb725532d2c23 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, options),
    method: 'get',
})

EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
const EditDailyLocationa861790fa9fe81e4b4afb725532d2c23Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
EditDailyLocationa861790fa9fe81e4b4afb725532d2c23Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit'
*/
EditDailyLocationa861790fa9fe81e4b4afb725532d2c23Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDailyLocationa861790fa9fe81e4b4afb725532d2c23.form = EditDailyLocationa861790fa9fe81e4b4afb725532d2c23Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
const EditDailyLocationba5ff87275a485ba64a5cf441dd5430b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, options),
    method: 'get',
})

EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/daily-locations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
const EditDailyLocationba5ff87275a485ba64a5cf441dd5430bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
EditDailyLocationba5ff87275a485ba64a5cf441dd5430bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/{record}/edit'
*/
EditDailyLocationba5ff87275a485ba64a5cf441dd5430bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDailyLocationba5ff87275a485ba64a5cf441dd5430b.form = EditDailyLocationba5ff87275a485ba64a5cf441dd5430bForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
const EditDailyLocation45c8c478439d892e7ca93514b02af920 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, options),
    method: 'get',
})

EditDailyLocation45c8c478439d892e7ca93514b02af920.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation45c8c478439d892e7ca93514b02af920.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDailyLocation45c8c478439d892e7ca93514b02af920.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation45c8c478439d892e7ca93514b02af920.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation45c8c478439d892e7ca93514b02af920.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
const EditDailyLocation45c8c478439d892e7ca93514b02af920Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation45c8c478439d892e7ca93514b02af920Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\EditDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/EditDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/{record}/edit'
*/
EditDailyLocation45c8c478439d892e7ca93514b02af920Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDailyLocation45c8c478439d892e7ca93514b02af920.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDailyLocation45c8c478439d892e7ca93514b02af920.form = EditDailyLocation45c8c478439d892e7ca93514b02af920Form

const EditDailyLocation = {
    '/admin/tenant/{tenant}/booking/daily-locations/{record}/edit': EditDailyLocationa861790fa9fe81e4b4afb725532d2c23,
    '/nds/booking/booking/daily-locations/{record}/edit': EditDailyLocationba5ff87275a485ba64a5cf441dd5430b,
    '/nds/super/booking/daily-locations/{record}/edit': EditDailyLocation45c8c478439d892e7ca93514b02af920,
}

export default EditDailyLocation