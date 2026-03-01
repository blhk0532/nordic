import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
const ListDailyLocations5b51b2dbb94c353d241fd64676f6b213 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, options),
    method: 'get',
})

ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
const ListDailyLocations5b51b2dbb94c353d241fd64676f6b213Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
ListDailyLocations5b51b2dbb94c353d241fd64676f6b213Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/admin/tenant/{tenant}/booking/daily-locations'
*/
ListDailyLocations5b51b2dbb94c353d241fd64676f6b213Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations5b51b2dbb94c353d241fd64676f6b213.form = ListDailyLocations5b51b2dbb94c353d241fd64676f6b213Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
const ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url = (options?: RouteQueryOptions) => {
    return ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
const ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/booking/booking/daily-locations'
*/
ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c.form = ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98cForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/daily-locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url = (options?: RouteQueryOptions) => {
    return ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
const ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\DailyLocations\Pages\ListDailyLocations::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/DailyLocations/Pages/ListDailyLocations.php:7
* @route '/nds/super/booking/daily-locations'
*/
ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3.form = ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3Form

const ListDailyLocations = {
    '/admin/tenant/{tenant}/booking/daily-locations': ListDailyLocations5b51b2dbb94c353d241fd64676f6b213,
    '/nds/booking/booking/daily-locations': ListDailyLocations78338f815fd0787dd4bcfba3a9e1c98c,
    '/nds/super/booking/daily-locations': ListDailyLocations2e603d0ede17f36eeb07fd78678f4ab3,
}

export default ListDailyLocations