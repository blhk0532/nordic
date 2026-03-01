import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
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
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\ListCustomers::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/ListCustomers.php:7
* @route '/admin/tenant/{tenant}/booking/customers'
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
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
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
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
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
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
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
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
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

const customers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default customers