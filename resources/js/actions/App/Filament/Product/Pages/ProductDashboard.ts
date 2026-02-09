import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
const ProductDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductDashboard.url(options),
    method: 'get',
})

ProductDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
ProductDashboard.url = (options?: RouteQueryOptions) => {
    return ProductDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
ProductDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
ProductDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ProductDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
const ProductDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
ProductDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Pages\ProductDashboard::__invoke
* @see app/Filament/Product/Pages/ProductDashboard.php:7
* @route '/nds/product'
*/
ProductDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ProductDashboard.form = ProductDashboardForm

export default ProductDashboard