import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
const CreateUser7057a041592e3390f6febd1e2eee4682 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7057a041592e3390f6febd1e2eee4682.url(options),
    method: 'get',
})

CreateUser7057a041592e3390f6febd1e2eee4682.definition = {
    methods: ["get","head"],
    url: '/admin/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
CreateUser7057a041592e3390f6febd1e2eee4682.url = (options?: RouteQueryOptions) => {
    return CreateUser7057a041592e3390f6febd1e2eee4682.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
CreateUser7057a041592e3390f6febd1e2eee4682.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7057a041592e3390f6febd1e2eee4682.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
CreateUser7057a041592e3390f6febd1e2eee4682.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser7057a041592e3390f6febd1e2eee4682.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
const CreateUser7057a041592e3390f6febd1e2eee4682Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7057a041592e3390f6febd1e2eee4682.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
CreateUser7057a041592e3390f6febd1e2eee4682Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7057a041592e3390f6febd1e2eee4682.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/users/create'
*/
CreateUser7057a041592e3390f6febd1e2eee4682Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7057a041592e3390f6febd1e2eee4682.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser7057a041592e3390f6febd1e2eee4682.form = CreateUser7057a041592e3390f6febd1e2eee4682Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
const CreateUser2b107b630bb5d49d0728eb746ee73b92 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser2b107b630bb5d49d0728eb746ee73b92.url(options),
    method: 'get',
})

CreateUser2b107b630bb5d49d0728eb746ee73b92.definition = {
    methods: ["get","head"],
    url: '/nds/adm/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
CreateUser2b107b630bb5d49d0728eb746ee73b92.url = (options?: RouteQueryOptions) => {
    return CreateUser2b107b630bb5d49d0728eb746ee73b92.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
CreateUser2b107b630bb5d49d0728eb746ee73b92.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser2b107b630bb5d49d0728eb746ee73b92.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
CreateUser2b107b630bb5d49d0728eb746ee73b92.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser2b107b630bb5d49d0728eb746ee73b92.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
const CreateUser2b107b630bb5d49d0728eb746ee73b92Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser2b107b630bb5d49d0728eb746ee73b92.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
CreateUser2b107b630bb5d49d0728eb746ee73b92Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser2b107b630bb5d49d0728eb746ee73b92.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/adm/users/create'
*/
CreateUser2b107b630bb5d49d0728eb746ee73b92Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser2b107b630bb5d49d0728eb746ee73b92.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser2b107b630bb5d49d0728eb746ee73b92.form = CreateUser2b107b630bb5d49d0728eb746ee73b92Form
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
    '/admin/users/create': CreateUser7057a041592e3390f6febd1e2eee4682,
    '/nds/adm/users/create': CreateUser2b107b630bb5d49d0728eb746ee73b92,
    '/nds/super/users/create': CreateUser7a4044a8bd2b99077d9852507876b355,
}

export default CreateUser