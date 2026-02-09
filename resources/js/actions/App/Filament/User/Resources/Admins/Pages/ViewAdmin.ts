import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
const ViewAdmin = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin.url(args, options),
    method: 'get',
})

ViewAdmin.definition = {
    methods: ["get","head"],
    url: '/nds/user/admins/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
ViewAdmin.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAdmin.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
ViewAdmin.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAdmin.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
ViewAdmin.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAdmin.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
const ViewAdminForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
ViewAdminForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ViewAdmin::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ViewAdmin.php:7
* @route '/nds/user/admins/{record}'
*/
ViewAdminForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewAdmin.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewAdmin.form = ViewAdminForm

export default ViewAdmin