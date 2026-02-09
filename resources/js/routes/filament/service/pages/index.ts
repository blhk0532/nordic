import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
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