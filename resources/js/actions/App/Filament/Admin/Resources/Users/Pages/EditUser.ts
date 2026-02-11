import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
const EditUser0c7529139f87285f3f9d7db62ddfe941 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, options),
    method: 'get',
})

EditUser0c7529139f87285f3f9d7db62ddfe941.definition = {
    methods: ["get","head"],
    url: '/nds/adm/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
EditUser0c7529139f87285f3f9d7db62ddfe941.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUser0c7529139f87285f3f9d7db62ddfe941.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
EditUser0c7529139f87285f3f9d7db62ddfe941.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
EditUser0c7529139f87285f3f9d7db62ddfe941.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
const EditUser0c7529139f87285f3f9d7db62ddfe941Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
EditUser0c7529139f87285f3f9d7db62ddfe941Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/adm/users/{record}/edit'
*/
EditUser0c7529139f87285f3f9d7db62ddfe941Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser0c7529139f87285f3f9d7db62ddfe941.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUser0c7529139f87285f3f9d7db62ddfe941.form = EditUser0c7529139f87285f3f9d7db62ddfe941Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
const EditUser82de4330e2ff2d0482629c52dc3ea0d0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

EditUser82de4330e2ff2d0482629c52dc3ea0d0.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUser82de4330e2ff2d0482629c52dc3ea0d0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
const EditUser82de4330e2ff2d0482629c52dc3ea0d0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/super/users/{record}/edit'
*/
EditUser82de4330e2ff2d0482629c52dc3ea0d0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser82de4330e2ff2d0482629c52dc3ea0d0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUser82de4330e2ff2d0482629c52dc3ea0d0.form = EditUser82de4330e2ff2d0482629c52dc3ea0d0Form

const EditUser = {
    '/nds/adm/users/{record}/edit': EditUser0c7529139f87285f3f9d7db62ddfe941,
    '/nds/super/users/{record}/edit': EditUser82de4330e2ff2d0482629c52dc3ea0d0,
}

export default EditUser