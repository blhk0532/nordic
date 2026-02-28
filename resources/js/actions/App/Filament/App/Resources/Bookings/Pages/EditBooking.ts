import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBookingf904bc989a2794f8f73f444d61bc5bea = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, options),
    method: 'get',
})

EditBookingf904bc989a2794f8f73f444d61bc5bea.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/mina-bokningar/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingf904bc989a2794f8f73f444d61bc5bea.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditBookingf904bc989a2794f8f73f444d61bc5bea.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingf904bc989a2794f8f73f444d61bc5bea.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingf904bc989a2794f8f73f444d61bc5bea.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBookingf904bc989a2794f8f73f444d61bc5beaForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingf904bc989a2794f8f73f444d61bc5beaForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/admin/tenant/{tenant}/mina-bokningar/{record}/edit'
*/
EditBookingf904bc989a2794f8f73f444d61bc5beaForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBookingf904bc989a2794f8f73f444d61bc5bea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBookingf904bc989a2794f8f73f444d61bc5bea.form = EditBookingf904bc989a2794f8f73f444d61bc5beaForm
/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBooking5a7931c5601f54f3d9036c266a55fe22 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, options),
    method: 'get',
})

EditBooking5a7931c5601f54f3d9036c266a55fe22.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/mina-bokningar/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking5a7931c5601f54f3d9036c266a55fe22.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditBooking5a7931c5601f54f3d9036c266a55fe22.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking5a7931c5601f54f3d9036c266a55fe22.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking5a7931c5601f54f3d9036c266a55fe22.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
const EditBooking5a7931c5601f54f3d9036c266a55fe22Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking5a7931c5601f54f3d9036c266a55fe22Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Bookings\Pages\EditBooking::__invoke
* @see app/Filament/App/Resources/Bookings/Pages/EditBooking.php:7
* @route '/nds/app/team/{tenant}/mina-bokningar/{record}/edit'
*/
EditBooking5a7931c5601f54f3d9036c266a55fe22Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBooking5a7931c5601f54f3d9036c266a55fe22.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBooking5a7931c5601f54f3d9036c266a55fe22.form = EditBooking5a7931c5601f54f3d9036c266a55fe22Form

const EditBooking = {
    '/admin/tenant/{tenant}/mina-bokningar/{record}/edit': EditBookingf904bc989a2794f8f73f444d61bc5bea,
    '/nds/app/team/{tenant}/mina-bokningar/{record}/edit': EditBooking5a7931c5601f54f3d9036c266a55fe22,
}

export default EditBooking