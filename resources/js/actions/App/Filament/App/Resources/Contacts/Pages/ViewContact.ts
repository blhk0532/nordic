import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
const ViewContact8d089585738500072a367997f63954c3 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact8d089585738500072a367997f63954c3.url(args, options),
    method: 'get',
})

ViewContact8d089585738500072a367997f63954c3.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/contacts/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
ViewContact8d089585738500072a367997f63954c3.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewContact8d089585738500072a367997f63954c3.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
ViewContact8d089585738500072a367997f63954c3.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact8d089585738500072a367997f63954c3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
ViewContact8d089585738500072a367997f63954c3.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewContact8d089585738500072a367997f63954c3.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
const ViewContact8d089585738500072a367997f63954c3Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact8d089585738500072a367997f63954c3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
ViewContact8d089585738500072a367997f63954c3Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact8d089585738500072a367997f63954c3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/admin/tenant/{tenant}/contacts/{record}'
*/
ViewContact8d089585738500072a367997f63954c3Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact8d089585738500072a367997f63954c3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewContact8d089585738500072a367997f63954c3.form = ViewContact8d089585738500072a367997f63954c3Form
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
const ViewContact324af511d4e0bdfa893e4e071b739fe2 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, options),
    method: 'get',
})

ViewContact324af511d4e0bdfa893e4e071b739fe2.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact324af511d4e0bdfa893e4e071b739fe2.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewContact324af511d4e0bdfa893e4e071b739fe2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact324af511d4e0bdfa893e4e071b739fe2.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact324af511d4e0bdfa893e4e071b739fe2.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
const ViewContact324af511d4e0bdfa893e4e071b739fe2Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact324af511d4e0bdfa893e4e071b739fe2Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact324af511d4e0bdfa893e4e071b739fe2Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact324af511d4e0bdfa893e4e071b739fe2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewContact324af511d4e0bdfa893e4e071b739fe2.form = ViewContact324af511d4e0bdfa893e4e071b739fe2Form

const ViewContact = {
    '/admin/tenant/{tenant}/contacts/{record}': ViewContact8d089585738500072a367997f63954c3,
    '/nds/app/team/{tenant}/contacts/{record}': ViewContact324af511d4e0bdfa893e4e071b739fe2,
}

export default ViewContact