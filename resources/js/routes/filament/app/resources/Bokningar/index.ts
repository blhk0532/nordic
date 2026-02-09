import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/Bokningar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\ListBookings::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/ListBookings.php:7
* @route '/nds/app/team/{tenant}/Bokningar'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/Bokningar/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
create.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\CreateBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/CreateBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/create'
*/
createForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/Bokningar/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
edit.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/Bokningar/{record}/edit'
*/
editForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const Bokningar = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default Bokningar