import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
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