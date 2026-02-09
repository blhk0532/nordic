import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
const CreateUser469b15ca4da09ba4bbdc4f5f6767d232 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url(options),
    method: 'get',
})

CreateUser469b15ca4da09ba4bbdc4f5f6767d232.definition = {
    methods: ["get","head"],
    url: '/nds/admin/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url = (options?: RouteQueryOptions) => {
    return CreateUser469b15ca4da09ba4bbdc4f5f6767d232.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
CreateUser469b15ca4da09ba4bbdc4f5f6767d232.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
CreateUser469b15ca4da09ba4bbdc4f5f6767d232.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
const CreateUser469b15ca4da09ba4bbdc4f5f6767d232Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
CreateUser469b15ca4da09ba4bbdc4f5f6767d232Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/admin/users/create'
*/
CreateUser469b15ca4da09ba4bbdc4f5f6767d232Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser469b15ca4da09ba4bbdc4f5f6767d232.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser469b15ca4da09ba4bbdc4f5f6767d232.form = CreateUser469b15ca4da09ba4bbdc4f5f6767d232Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.url = (options?: RouteQueryOptions) => {
    return CreateUser7a4044a8bd2b99077d9852507876b355.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.form = CreateUser7a4044a8bd2b99077d9852507876b355Form

const CreateUser = {
    '/nds/admin/users/create': CreateUser469b15ca4da09ba4bbdc4f5f6767d232,
    '/nds/super/users/create': CreateUser7a4044a8bd2b99077d9852507876b355,
}

export default CreateUser