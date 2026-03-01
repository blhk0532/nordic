import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
const CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, options),
    method: 'get',
})

CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/daily-locations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
const CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations/create'
*/
CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63.form = CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
const CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url(options),
    method: 'get',
})

CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/daily-locations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url = (options?: RouteQueryOptions) => {
    return CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
const CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/booking/booking/daily-locations/create'
*/
CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8.form = CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
const CreateDailyLocation0b8ec438c0dba079e478871bf61a473a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url(options),
    method: 'get',
})

CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url = (options?: RouteQueryOptions) => {
    return CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
const CreateDailyLocation0b8ec438c0dba079e478871bf61a473aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation0b8ec438c0dba079e478871bf61a473aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\CreateDailyLocation::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/CreateDailyLocation.php:7
* @route '/nds/super/booking/daily-locations/create'
*/
CreateDailyLocation0b8ec438c0dba079e478871bf61a473aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDailyLocation0b8ec438c0dba079e478871bf61a473a.form = CreateDailyLocation0b8ec438c0dba079e478871bf61a473aForm

const CreateDailyLocation = {
    '/admin/tenant/{tenant}/booking/daily-locations/create': CreateDailyLocationef6b137448075030fc2ebd0cffc3ad63,
    '/nds/booking/booking/daily-locations/create': CreateDailyLocation9050e60e3560207c45d16e70ede2e6b8,
    '/nds/super/booking/daily-locations/create': CreateDailyLocation0b8ec438c0dba079e478871bf61a473a,
}

export default CreateDailyLocation