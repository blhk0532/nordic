import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
const CreateBooking4071d8134d58d215ed59f5ff4b0db2b8 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, options),
    method: 'get',
})

CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/mina-bokningar/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
const CreateBooking4071d8134d58d215ed59f5ff4b0db2b8Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
CreateBooking4071d8134d58d215ed59f5ff4b0db2b8Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/create'
*/
CreateBooking4071d8134d58d215ed59f5ff4b0db2b8Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBooking4071d8134d58d215ed59f5ff4b0db2b8.form = CreateBooking4071d8134d58d215ed59f5ff4b0db2b8Form
/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
const CreateBooking9d62be76a32cdd19079a433681f7c11d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, options),
    method: 'get',
})

CreateBooking9d62be76a32cdd19079a433681f7c11d.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking9d62be76a32cdd19079a433681f7c11d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateBooking9d62be76a32cdd19079a433681f7c11d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking9d62be76a32cdd19079a433681f7c11d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking9d62be76a32cdd19079a433681f7c11d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
const CreateBooking9d62be76a32cdd19079a433681f7c11dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking9d62be76a32cdd19079a433681f7c11dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/create'
*/
CreateBooking9d62be76a32cdd19079a433681f7c11dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBooking9d62be76a32cdd19079a433681f7c11d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBooking9d62be76a32cdd19079a433681f7c11d.form = CreateBooking9d62be76a32cdd19079a433681f7c11dForm

const CreateBooking = {
    '/admin/tenant/{tenant}/mina-bokningar/create': CreateBooking4071d8134d58d215ed59f5ff4b0db2b8,
    '/nds/app/team/{tenant}/mina-bokningar/create': CreateBooking9d62be76a32cdd19079a433681f7c11d,
}

export default CreateBooking