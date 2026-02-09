import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
const EditUser7edc19bf9ad6aad9ddaec0806b66affa = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, options),
    method: 'get',
})

EditUser7edc19bf9ad6aad9ddaec0806b66affa.definition = {
    methods: ["get","head"],
    url: '/nds/admin/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
EditUser7edc19bf9ad6aad9ddaec0806b66affa.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUser7edc19bf9ad6aad9ddaec0806b66affa.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
EditUser7edc19bf9ad6aad9ddaec0806b66affa.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
EditUser7edc19bf9ad6aad9ddaec0806b66affa.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
const EditUser7edc19bf9ad6aad9ddaec0806b66affaForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
EditUser7edc19bf9ad6aad9ddaec0806b66affaForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/EditUser.php:7
* @route '/nds/admin/users/{record}/edit'
*/
EditUser7edc19bf9ad6aad9ddaec0806b66affaForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUser7edc19bf9ad6aad9ddaec0806b66affa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUser7edc19bf9ad6aad9ddaec0806b66affa.form = EditUser7edc19bf9ad6aad9ddaec0806b66affaForm
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
    '/nds/admin/users/{record}/edit': EditUser7edc19bf9ad6aad9ddaec0806b66affa,
    '/nds/super/users/{record}/edit': EditUser82de4330e2ff2d0482629c52dc3ea0d0,
}

export default EditUser