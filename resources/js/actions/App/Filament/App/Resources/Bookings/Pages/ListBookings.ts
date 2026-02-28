import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
const ListBookings4fd0892ccc0f88925a65272d0ecfc05a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, options),
    method: 'get',
})

ListBookings4fd0892ccc0f88925a65272d0ecfc05a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/mina-bokningar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookings4fd0892ccc0f88925a65272d0ecfc05a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
ListBookings4fd0892ccc0f88925a65272d0ecfc05a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
ListBookings4fd0892ccc0f88925a65272d0ecfc05a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
const ListBookings4fd0892ccc0f88925a65272d0ecfc05aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
ListBookings4fd0892ccc0f88925a65272d0ecfc05aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar'
*/
ListBookings4fd0892ccc0f88925a65272d0ecfc05aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings4fd0892ccc0f88925a65272d0ecfc05a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookings4fd0892ccc0f88925a65272d0ecfc05a.form = ListBookings4fd0892ccc0f88925a65272d0ecfc05aForm
/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
const ListBookings21d4ea2f0d7796e6a591e168711a9b65 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, options),
    method: 'get',
})

ListBookings21d4ea2f0d7796e6a591e168711a9b65.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings21d4ea2f0d7796e6a591e168711a9b65.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListBookings21d4ea2f0d7796e6a591e168711a9b65.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings21d4ea2f0d7796e6a591e168711a9b65.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings21d4ea2f0d7796e6a591e168711a9b65.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
const ListBookings21d4ea2f0d7796e6a591e168711a9b65Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings21d4ea2f0d7796e6a591e168711a9b65Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar'
*/
ListBookings21d4ea2f0d7796e6a591e168711a9b65Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBookings21d4ea2f0d7796e6a591e168711a9b65.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBookings21d4ea2f0d7796e6a591e168711a9b65.form = ListBookings21d4ea2f0d7796e6a591e168711a9b65Form

const ListBookings = {
    '/admin/tenant/{tenant}/mina-bokningar': ListBookings4fd0892ccc0f88925a65272d0ecfc05a,
    '/nds/app/team/{tenant}/mina-bokningar': ListBookings21d4ea2f0d7796e6a591e168711a9b65,
}

export default ListBookings