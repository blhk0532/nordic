import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/server',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
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