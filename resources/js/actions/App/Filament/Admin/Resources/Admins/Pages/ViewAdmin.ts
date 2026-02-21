import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
const ViewAdmine8f4c21150e443dbd43dae689b485c44 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, options),
    method: 'get',
})

ViewAdmine8f4c21150e443dbd43dae689b485c44.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
ViewAdmine8f4c21150e443dbd43dae689b485c44.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewAdmine8f4c21150e443dbd43dae689b485c44.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
ViewAdmine8f4c21150e443dbd43dae689b485c44.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
ViewAdmine8f4c21150e443dbd43dae689b485c44.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
const ViewAdmine8f4c21150e443dbd43dae689b485c44Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
ViewAdmine8f4c21150e443dbd43dae689b485c44Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/{record}'
*/
ViewAdmine8f4c21150e443dbd43dae689b485c44Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine8f4c21150e443dbd43dae689b485c44.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmine8f4c21150e443dbd43dae689b485c44.form = ViewAdmine8f4c21150e443dbd43dae689b485c44Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
const ViewAdmin3120d2275478ec7a6c2cbee79589ce99 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

ViewAdmin3120d2275478ec7a6c2cbee79589ce99.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdmin3120d2275478ec7a6c2cbee79589ce99.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
const ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/super/admins/{record}'
*/
ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin3120d2275478ec7a6c2cbee79589ce99.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmin3120d2275478ec7a6c2cbee79589ce99.form = ViewAdmin3120d2275478ec7a6c2cbee79589ce99Form

const ViewAdmin = {
    '/admin/tenant/{tenant}/admins/{record}': ViewAdmine8f4c21150e443dbd43dae689b485c44,
    '/nds/super/admins/{record}': ViewAdmin3120d2275478ec7a6c2cbee79589ce99,
}

export default ViewAdmin