import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
const EditContact31be55279c3e41dbde3a7e0c95b45e06 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, options),
    method: 'get',
})

EditContact31be55279c3e41dbde3a7e0c95b45e06.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/contacts/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
EditContact31be55279c3e41dbde3a7e0c95b45e06.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditContact31be55279c3e41dbde3a7e0c95b45e06.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
EditContact31be55279c3e41dbde3a7e0c95b45e06.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
EditContact31be55279c3e41dbde3a7e0c95b45e06.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
const EditContact31be55279c3e41dbde3a7e0c95b45e06Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
EditContact31be55279c3e41dbde3a7e0c95b45e06Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}/edit'
*/
EditContact31be55279c3e41dbde3a7e0c95b45e06Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact31be55279c3e41dbde3a7e0c95b45e06.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditContact31be55279c3e41dbde3a7e0c95b45e06.form = EditContact31be55279c3e41dbde3a7e0c95b45e06Form
/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
const EditContactb8d2044a6593439b3f7390d1936c84d0 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, options),
    method: 'get',
})

EditContactb8d2044a6593439b3f7390d1936c84d0.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactb8d2044a6593439b3f7390d1936c84d0.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditContactb8d2044a6593439b3f7390d1936c84d0.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactb8d2044a6593439b3f7390d1936c84d0.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactb8d2044a6593439b3f7390d1936c84d0.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
const EditContactb8d2044a6593439b3f7390d1936c84d0Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactb8d2044a6593439b3f7390d1936c84d0Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactb8d2044a6593439b3f7390d1936c84d0Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContactb8d2044a6593439b3f7390d1936c84d0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditContactb8d2044a6593439b3f7390d1936c84d0.form = EditContactb8d2044a6593439b3f7390d1936c84d0Form

const EditContact = {
    '/admin/tenant/{tenant}/contacts/{record}/edit': EditContact31be55279c3e41dbde3a7e0c95b45e06,
    '/nds/app/team/{tenant}/contacts/{record}/edit': EditContactb8d2044a6593439b3f7390d1936c84d0,
}

export default EditContact