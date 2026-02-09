import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdmin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin.url(options),
    method: 'get',
})

CreateAdmin.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmin.url = (options?: RouteQueryOptions) => {
    return CreateAdmin.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmin.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmin.form = CreateAdminForm

export default CreateAdmin