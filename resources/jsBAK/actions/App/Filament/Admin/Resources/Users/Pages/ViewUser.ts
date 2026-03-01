import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
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
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
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
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
const ViewUser58262a42ea420b5b8029b94a49bf52a5Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}'
*/
ViewUser58262a42ea420b5b8029b94a49bf52a5Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser58262a42ea420b5b8029b94a49bf52a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
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
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
const ViewUser1e35ca77dde75925d5defd2f967269dd = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

ViewUser1e35ca77dde75925d5defd2f967269dd.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewUser1e35ca77dde75925d5defd2f967269dd.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269dd.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
const ViewUser1e35ca77dde75925d5defd2f967269ddForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269ddForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/super/users/{record}'
*/
ViewUser1e35ca77dde75925d5defd2f967269ddForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser1e35ca77dde75925d5defd2f967269dd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser1e35ca77dde75925d5defd2f967269dd.form = ViewUser1e35ca77dde75925d5defd2f967269ddForm

const ViewUser = {
    '/admin/tenant/{tenant}/users/{record}': ViewUser58262a42ea420b5b8029b94a49bf52a5,
    '/nds/super/users/{record}': ViewUser1e35ca77dde75925d5defd2f967269dd,
}

export default ViewUser