import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
const ViewAdminb141e39ca25e00efe1c4e064f32b99c0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, options),
    method: 'get',
})

ViewAdminb141e39ca25e00efe1c4e064f32b99c0.definition = {
    methods: ["get","head"],
    url: '/nds/admin/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdminb141e39ca25e00efe1c4e064f32b99c0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
ViewAdminb141e39ca25e00efe1c4e064f32b99c0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
ViewAdminb141e39ca25e00efe1c4e064f32b99c0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
const ViewAdminb141e39ca25e00efe1c4e064f32b99c0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
ViewAdminb141e39ca25e00efe1c4e064f32b99c0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/admin/admins/{record}'
*/
ViewAdminb141e39ca25e00efe1c4e064f32b99c0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdminb141e39ca25e00efe1c4e064f32b99c0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdminb141e39ca25e00efe1c4e064f32b99c0.form = ViewAdminb141e39ca25e00efe1c4e064f32b99c0Form
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
    '/nds/admin/admins/{record}': ViewAdminb141e39ca25e00efe1c4e064f32b99c0,
    '/nds/super/admins/{record}': ViewAdmin3120d2275478ec7a6c2cbee79589ce99,
}

export default ViewAdmin