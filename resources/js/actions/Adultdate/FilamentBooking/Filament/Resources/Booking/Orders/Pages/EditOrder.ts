import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
const EditOrder2b4da48b2d589568afd823ac6d9a74e9 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, options),
    method: 'get',
})

EditOrder2b4da48b2d589568afd823ac6d9a74e9.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/booking/orders/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
EditOrder2b4da48b2d589568afd823ac6d9a74e9.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditOrder2b4da48b2d589568afd823ac6d9a74e9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
EditOrder2b4da48b2d589568afd823ac6d9a74e9.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
EditOrder2b4da48b2d589568afd823ac6d9a74e9.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
const EditOrder2b4da48b2d589568afd823ac6d9a74e9Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
EditOrder2b4da48b2d589568afd823ac6d9a74e9Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/admin/tenant/{tenant}/booking/orders/{record}/edit'
*/
EditOrder2b4da48b2d589568afd823ac6d9a74e9Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder2b4da48b2d589568afd823ac6d9a74e9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOrder2b4da48b2d589568afd823ac6d9a74e9.form = EditOrder2b4da48b2d589568afd823ac6d9a74e9Form
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
const EditOrder9707212e98119d7eca55ba2f5b4ddd0f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, options),
    method: 'get',
})

EditOrder9707212e98119d7eca55ba2f5b4ddd0f.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/orders/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOrder9707212e98119d7eca55ba2f5b4ddd0f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder9707212e98119d7eca55ba2f5b4ddd0f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder9707212e98119d7eca55ba2f5b4ddd0f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
const EditOrder9707212e98119d7eca55ba2f5b4ddd0fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder9707212e98119d7eca55ba2f5b4ddd0fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Orders\Pages\EditOrder::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Orders/Pages/EditOrder.php:7
* @route '/nds/super/booking/orders/{record}/edit'
*/
EditOrder9707212e98119d7eca55ba2f5b4ddd0fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOrder9707212e98119d7eca55ba2f5b4ddd0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOrder9707212e98119d7eca55ba2f5b4ddd0f.form = EditOrder9707212e98119d7eca55ba2f5b4ddd0fForm

const EditOrder = {
    '/admin/tenant/{tenant}/booking/orders/{record}/edit': EditOrder2b4da48b2d589568afd823ac6d9a74e9,
    '/nds/super/booking/orders/{record}/edit': EditOrder9707212e98119d7eca55ba2f5b4ddd0f,
}

export default EditOrder