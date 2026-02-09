import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
const ViewUser70eefc89a5286f066de9bd02b3c054fe = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, options),
    method: 'get',
})

ViewUser70eefc89a5286f066de9bd02b3c054fe.definition = {
    methods: ["get","head"],
    url: '/nds/admin/users/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
ViewUser70eefc89a5286f066de9bd02b3c054fe.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewUser70eefc89a5286f066de9bd02b3c054fe.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
ViewUser70eefc89a5286f066de9bd02b3c054fe.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
ViewUser70eefc89a5286f066de9bd02b3c054fe.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
const ViewUser70eefc89a5286f066de9bd02b3c054feForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
ViewUser70eefc89a5286f066de9bd02b3c054feForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ViewUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ViewUser.php:7
* @route '/nds/admin/users/{record}'
*/
ViewUser70eefc89a5286f066de9bd02b3c054feForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewUser70eefc89a5286f066de9bd02b3c054fe.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewUser70eefc89a5286f066de9bd02b3c054fe.form = ViewUser70eefc89a5286f066de9bd02b3c054feForm
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
    '/nds/admin/users/{record}': ViewUser70eefc89a5286f066de9bd02b3c054fe,
    '/nds/super/users/{record}': ViewUser1e35ca77dde75925d5defd2f967269dd,
}

export default ViewUser