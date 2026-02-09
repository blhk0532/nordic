import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
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