import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
const ListCustomers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomers.url(options),
    method: 'get',
})

ListCustomers.definition = {
    methods: ["get","head"],
    url: '/nds/product/booking/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
ListCustomers.url = (options?: RouteQueryOptions) => {
    return ListCustomers.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
ListCustomers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCustomers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
ListCustomers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCustomers.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
const ListCustomersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
ListCustomersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Product\Resources\Customers\Pages\ListCustomers::__invoke
* @see app/Filament/Product/Resources/Customers/Pages/ListCustomers.php:7
* @route '/nds/product/booking/customers'
*/
ListCustomersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCustomers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCustomers.form = ListCustomersForm

export default ListCustomers