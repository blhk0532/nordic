import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
const PrivateDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PrivateDashboard.url(options),
    method: 'get',
})

PrivateDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/private',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
PrivateDashboard.url = (options?: RouteQueryOptions) => {
    return PrivateDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
PrivateDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PrivateDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
PrivateDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PrivateDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
const PrivateDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PrivateDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
PrivateDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PrivateDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Private\Pages\PrivateDashboard::__invoke
* @see app/Filament/Private/Pages/PrivateDashboard.php:7
* @route '/nds/private'
*/
PrivateDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PrivateDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PrivateDashboard.form = PrivateDashboardForm

export default PrivateDashboard