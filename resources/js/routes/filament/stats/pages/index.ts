import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
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

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
export const umamiAnalytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: umamiAnalytics.url(options),
    method: 'get',
})

umamiAnalytics.definition = {
    methods: ["get","head"],
    url: '/nds/stats/umami-analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
umamiAnalytics.url = (options?: RouteQueryOptions) => {
    return umamiAnalytics.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
umamiAnalytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: umamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
umamiAnalytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: umamiAnalytics.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
const umamiAnalyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: umamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
umamiAnalyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: umamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
umamiAnalyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: umamiAnalytics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

umamiAnalytics.form = umamiAnalyticsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    umamiAnalytics: Object.assign(umamiAnalytics, umamiAnalytics),
}

export default pages