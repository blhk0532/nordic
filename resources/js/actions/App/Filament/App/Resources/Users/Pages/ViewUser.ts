import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
const ViewUser58262a42ea420b5b8029b94a49bf52a5 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

ViewUser58262a42ea420b5b8029b94a49bf52a5.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewUser58262a42ea420b5b8029b94a49bf52a5.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
const ViewUser58262a42ea420b5b8029b94a49bf52a5Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser58262a42ea420b5b8029b94a49bf52a5.form = ViewUser58262a42ea420b5b8029b94a49bf52a5Form
/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
const ViewUser1a0d69a480d522d7f47c143d02a2f541 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, options),
    method: 'get',
})

ViewUser1a0d69a480d522d7f47c143d02a2f541.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser1a0d69a480d522d7f47c143d02a2f541.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewUser1a0d69a480d522d7f47c143d02a2f541.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser1a0d69a480d522d7f47c143d02a2f541.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser1a0d69a480d522d7f47c143d02a2f541.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
const ViewUser1a0d69a480d522d7f47c143d02a2f541Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser1a0d69a480d522d7f47c143d02a2f541Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}'
*/
ViewUser1a0d69a480d522d7f47c143d02a2f541Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1a0d69a480d522d7f47c143d02a2f541.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser1a0d69a480d522d7f47c143d02a2f541.form = ViewUser1a0d69a480d522d7f47c143d02a2f541Form

const ViewUser = {
    '/admin/tenant/{tenant}/users/{record}': ViewUser58262a42ea420b5b8029b94a49bf52a5,
    '/nds/app/team/{tenant}/users/{record}': ViewUser1a0d69a480d522d7f47c143d02a2f541,
}

export default ViewUser