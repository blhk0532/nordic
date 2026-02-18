import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
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