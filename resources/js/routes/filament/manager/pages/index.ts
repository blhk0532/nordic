import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
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