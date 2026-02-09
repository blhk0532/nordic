import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
const ListOrders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrders.url(options),
    method: 'get',
})

ListOrders.definition = {
    methods: ["get","head"],
    url: '/nds/product/booking/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
ListOrders.url = (options?: RouteQueryOptions) => {
    return ListOrders.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
ListOrders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOrders.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
ListOrders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOrders.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
const ListOrdersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
ListOrdersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\ListOrders::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/ListOrders.php:7
* @route '/nds/product/booking/orders'
*/
ListOrdersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOrders.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOrders.form = ListOrdersForm

export default ListOrders