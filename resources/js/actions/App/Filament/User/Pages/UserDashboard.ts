import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
const UserDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserDashboard.url(options),
    method: 'get',
})

UserDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
UserDashboard.url = (options?: RouteQueryOptions) => {
    return UserDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
UserDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
UserDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
const UserDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
UserDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
UserDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

UserDashboard.form = UserDashboardForm

export default UserDashboard