import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Dashboard::__invoke
* @see app/Filament/Pages/Dashboard.php:7
* @route '/nds/calendar'
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