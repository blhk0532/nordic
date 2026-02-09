import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
const StatsDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StatsDashboard.url(options),
    method: 'get',
})

StatsDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
StatsDashboard.url = (options?: RouteQueryOptions) => {
    return StatsDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
StatsDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StatsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
StatsDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StatsDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
const StatsDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StatsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
StatsDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StatsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Stats\Pages\StatsDashboard::__invoke
* @see app/Filament/Stats/Pages/StatsDashboard.php:7
* @route '/nds/stats'
*/
StatsDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StatsDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StatsDashboard.form = StatsDashboardForm

export default StatsDashboard