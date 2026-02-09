import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
const CreateOrder = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder.url(options),
    method: 'get',
})

CreateOrder.definition = {
    methods: ["get","head"],
    url: '/nds/product/booking/orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
CreateOrder.url = (options?: RouteQueryOptions) => {
    return CreateOrder.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
CreateOrder.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOrder.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
CreateOrder.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOrder.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
const CreateOrderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
CreateOrderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Orders\Pages\CreateOrder::__invoke
* @see app/Filament/Product/Resources/Orders/Pages/CreateOrder.php:7
* @route '/nds/product/booking/orders/create'
*/
CreateOrderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOrder.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOrder.form = CreateOrderForm

export default CreateOrder