import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins.url(options),
    method: 'get',
})

ListAdmins.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins.url = (options?: RouteQueryOptions) => {
    return ListAdmins.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdminsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdminsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdminsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins.form = ListAdminsForm

export default ListAdmins