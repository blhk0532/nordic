import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
const ListUsers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(options),
    method: 'get',
})

ListUsers.definition = {
    methods: ["get","head"],
    url: '/nds/finance/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
ListUsers.url = (options?: RouteQueryOptions) => {
    return ListUsers.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
ListUsers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
ListUsers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
const ListUsersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
ListUsersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Finance/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/finance/users'
*/
ListUsersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers.form = ListUsersForm

export default ListUsers