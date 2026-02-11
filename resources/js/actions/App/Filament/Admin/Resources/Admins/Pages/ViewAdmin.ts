import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
const ViewAdmine303fe130a9efd30312adb14a26c083f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, options),
    method: 'get',
})

ViewAdmine303fe130a9efd30312adb14a26c083f.definition = {
    methods: ["get","head"],
    url: '/admin/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
ViewAdmine303fe130a9efd30312adb14a26c083f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdmine303fe130a9efd30312adb14a26c083f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
ViewAdmine303fe130a9efd30312adb14a26c083f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
ViewAdmine303fe130a9efd30312adb14a26c083f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
const ViewAdmine303fe130a9efd30312adb14a26c083fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
ViewAdmine303fe130a9efd30312adb14a26c083fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/admin/admins/{record}'
*/
ViewAdmine303fe130a9efd30312adb14a26c083fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmine303fe130a9efd30312adb14a26c083f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmine303fe130a9efd30312adb14a26c083f.form = ViewAdmine303fe130a9efd30312adb14a26c083fForm
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
const ViewAdmineaa653143aa924372321a5230a987be5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmineaa653143aa924372321a5230a987be5.url(args, options),
    method: 'get',
})

ViewAdmineaa653143aa924372321a5230a987be5.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
ViewAdmineaa653143aa924372321a5230a987be5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdmineaa653143aa924372321a5230a987be5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
ViewAdmineaa653143aa924372321a5230a987be5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmineaa653143aa924372321a5230a987be5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
ViewAdmineaa653143aa924372321a5230a987be5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmineaa653143aa924372321a5230a987be5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
const ViewAdmineaa653143aa924372321a5230a987be5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmineaa653143aa924372321a5230a987be5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
ViewAdmineaa653143aa924372321a5230a987be5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmineaa653143aa924372321a5230a987be5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/adm/admins/{record}'
*/
ViewAdmineaa653143aa924372321a5230a987be5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmineaa653143aa924372321a5230a987be5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmineaa653143aa924372321a5230a987be5.form = ViewAdmineaa653143aa924372321a5230a987be5Form
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
    '/admin/admins/{record}': ViewAdmine303fe130a9efd30312adb14a26c083f,
    '/nds/adm/admins/{record}': ViewAdmineaa653143aa924372321a5230a987be5,
    '/nds/super/admins/{record}': ViewAdmin3120d2275478ec7a6c2cbee79589ce99,
}

export default ViewAdmin