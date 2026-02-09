import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
const UmamiAnalytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UmamiAnalytics.url(options),
    method: 'get',
})

UmamiAnalytics.definition = {
    methods: ["get","head"],
    url: '/nds/stats/umami-analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
UmamiAnalytics.url = (options?: RouteQueryOptions) => {
    return UmamiAnalytics.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
UmamiAnalytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UmamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
UmamiAnalytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UmamiAnalytics.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
const UmamiAnalyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UmamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
UmamiAnalyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UmamiAnalytics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\UmamiAnalytics::__invoke
* @see app/Filament/Stats/Pages/UmamiAnalytics.php:7
* @route '/nds/stats/umami-analytics'
*/
UmamiAnalyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UmamiAnalytics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

UmamiAnalytics.form = UmamiAnalyticsForm

export default UmamiAnalytics