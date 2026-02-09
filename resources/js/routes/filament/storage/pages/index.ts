import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/storage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
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