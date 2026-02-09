import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Clients\Pages\ClientsDashboard::__invoke
* @see app/Filament/Clients/Pages/ClientsDashboard.php:7
* @route '/nds/clients'
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