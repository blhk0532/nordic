import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
const EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, options),
    method: 'get',
})

EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/customers/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
const EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ceForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ceForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/admin/tenant/{tenant}/booking/customers/{record}/edit'
*/
EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ceForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce.form = EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ceForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
const EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, options),
    method: 'get',
})

EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/customers/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
const EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Customers\Pages\EditCustomer::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Customers/Pages/EditCustomer.php:7
* @route '/nds/super/booking/customers/{record}/edit'
*/
EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4.form = EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4Form

const EditCustomer = {
    '/admin/tenant/{tenant}/booking/customers/{record}/edit': EditCustomerdae28fcc9a1b1bc8b1039c0e8c02e1ce,
    '/nds/super/booking/customers/{record}/edit': EditCustomerd6c5413a14ec04cc8c686d5502ba8ca4,
}

export default EditCustomer