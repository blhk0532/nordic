import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\Dashboard::__invoke
* @see app/Filament/Data/Pages/Dashboard.php:7
* @route '/nds/data'
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