import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
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