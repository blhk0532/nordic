import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
const ServiceDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServiceDashboard.url(options),
    method: 'get',
})

ServiceDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
ServiceDashboard.url = (options?: RouteQueryOptions) => {
    return ServiceDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
ServiceDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServiceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
ServiceDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ServiceDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
const ServiceDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServiceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
ServiceDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServiceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Service\Pages\ServiceDashboard::__invoke
* @see app/Filament/Service/Pages/ServiceDashboard.php:7
* @route '/nds/service'
*/
ServiceDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServiceDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ServiceDashboard.form = ServiceDashboardForm

export default ServiceDashboard