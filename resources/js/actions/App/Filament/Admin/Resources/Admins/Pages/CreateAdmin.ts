import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
const CreateAdminb4768a8f1254274f9df382960c009dab = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdminb4768a8f1254274f9df382960c009dab.url(options),
    method: 'get',
})

CreateAdminb4768a8f1254274f9df382960c009dab.definition = {
    methods: ["get","head"],
    url: '/admin/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
CreateAdminb4768a8f1254274f9df382960c009dab.url = (options?: RouteQueryOptions) => {
    return CreateAdminb4768a8f1254274f9df382960c009dab.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
CreateAdminb4768a8f1254274f9df382960c009dab.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdminb4768a8f1254274f9df382960c009dab.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
CreateAdminb4768a8f1254274f9df382960c009dab.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdminb4768a8f1254274f9df382960c009dab.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
const CreateAdminb4768a8f1254274f9df382960c009dabForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminb4768a8f1254274f9df382960c009dab.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
CreateAdminb4768a8f1254274f9df382960c009dabForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminb4768a8f1254274f9df382960c009dab.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/admins/create'
*/
CreateAdminb4768a8f1254274f9df382960c009dabForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdminb4768a8f1254274f9df382960c009dab.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdminb4768a8f1254274f9df382960c009dab.form = CreateAdminb4768a8f1254274f9df382960c009dabForm
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdmine4266bb0825c7b6da5040a5f5e291f37 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

CreateAdmine4266bb0825c7b6da5040a5f5e291f37.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url = (options?: RouteQueryOptions) => {
    return CreateAdmine4266bb0825c7b6da5040a5f5e291f37.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmine4266bb0825c7b6da5040a5f5e291f37.form = CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form
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
    '/admin/admins/create': CreateAdminb4768a8f1254274f9df382960c009dab,
    '/nds/adm/admins/create': CreateAdmine4266bb0825c7b6da5040a5f5e291f37,
    '/nds/super/admins/create': CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349,
}

export default CreateAdmin