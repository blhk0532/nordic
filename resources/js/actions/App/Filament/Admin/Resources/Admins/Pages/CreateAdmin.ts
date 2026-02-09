import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
const CreateAdmineedf2a268bded6bca7af323453d8ac01 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmineedf2a268bded6bca7af323453d8ac01.url(options),
    method: 'get',
})

CreateAdmineedf2a268bded6bca7af323453d8ac01.definition = {
    methods: ["get","head"],
    url: '/nds/admin/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
CreateAdmineedf2a268bded6bca7af323453d8ac01.url = (options?: RouteQueryOptions) => {
    return CreateAdmineedf2a268bded6bca7af323453d8ac01.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
CreateAdmineedf2a268bded6bca7af323453d8ac01.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmineedf2a268bded6bca7af323453d8ac01.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
CreateAdmineedf2a268bded6bca7af323453d8ac01.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmineedf2a268bded6bca7af323453d8ac01.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
const CreateAdmineedf2a268bded6bca7af323453d8ac01Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmineedf2a268bded6bca7af323453d8ac01.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
CreateAdmineedf2a268bded6bca7af323453d8ac01Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmineedf2a268bded6bca7af323453d8ac01.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/admin/admins/create'
*/
CreateAdmineedf2a268bded6bca7af323453d8ac01Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmineedf2a268bded6bca7af323453d8ac01.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmineedf2a268bded6bca7af323453d8ac01.form = CreateAdmineedf2a268bded6bca7af323453d8ac01Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url = (options?: RouteQueryOptions) => {
    return CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.form = CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form

const CreateAdmin = {
    '/nds/admin/admins/create': CreateAdmineedf2a268bded6bca7af323453d8ac01,
    '/nds/super/admins/create': CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349,
}

export default CreateAdmin