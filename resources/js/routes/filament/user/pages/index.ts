import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Pages\UserDashboard::__invoke
* @see app/Filament/User/Pages/UserDashboard.php:7
* @route '/nds/user'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
}

export default pages