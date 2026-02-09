import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
const PulseDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PulseDashboard.url(options),
    method: 'get',
})

PulseDashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
PulseDashboard.url = (options?: RouteQueryOptions) => {
    return PulseDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
PulseDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
PulseDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PulseDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
const PulseDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
PulseDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
PulseDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PulseDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PulseDashboard.form = PulseDashboardForm

export default PulseDashboard