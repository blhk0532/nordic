import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
const ListAdmins = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins.url(options),
    method: 'get',
})

ListAdmins.definition = {
    methods: ["get","head"],
    url: '/nds/user/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
ListAdmins.url = (options?: RouteQueryOptions) => {
    return ListAdmins.definition.url + queryParams(options)
}

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
ListAdmins.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
ListAdmins.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins.url(options),
    method: 'head',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
const ListAdminsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
*/
ListAdminsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/User/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/user/admins'
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