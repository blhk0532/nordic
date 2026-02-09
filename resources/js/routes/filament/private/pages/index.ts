import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/private',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
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