import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
const CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, options),
    method: 'get',
})

CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
const CreateCustomer57d8ea5b65c8a2ed189ea31124c5013dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
CreateCustomer57d8ea5b65c8a2ed189ea31124c5013dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/create'
*/
CreateCustomer57d8ea5b65c8a2ed189ea31124c5013dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d.form = CreateCustomer57d8ea5b65c8a2ed189ea31124c5013dForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
const CreateCustomer286210a851a48e2067b9ab9f9b01e942 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url(options),
    method: 'get',
})

CreateCustomer286210a851a48e2067b9ab9f9b01e942.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/customers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer286210a851a48e2067b9ab9f9b01e942.url = (options?: RouteQueryOptions) => {
    return CreateCustomer286210a851a48e2067b9ab9f9b01e942.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer286210a851a48e2067b9ab9f9b01e942.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer286210a851a48e2067b9ab9f9b01e942.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
const CreateCustomer286210a851a48e2067b9ab9f9b01e942Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer286210a851a48e2067b9ab9f9b01e942Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\CreateCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/CreateCustomer.php:7
* @route '/nds/super/booking/customers/create'
*/
CreateCustomer286210a851a48e2067b9ab9f9b01e942Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCustomer286210a851a48e2067b9ab9f9b01e942.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCustomer286210a851a48e2067b9ab9f9b01e942.form = CreateCustomer286210a851a48e2067b9ab9f9b01e942Form

const CreateCustomer = {
    '/admin/tenant/{tenant}/booking/customers/create': CreateCustomer57d8ea5b65c8a2ed189ea31124c5013d,
    '/nds/super/booking/customers/create': CreateCustomer286210a851a48e2067b9ab9f9b01e942,
}

export default CreateCustomer