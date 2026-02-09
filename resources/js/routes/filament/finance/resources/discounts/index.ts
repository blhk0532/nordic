import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/finance/discounts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const discounts = {
    index: Object.assign(index, index),
}

export default discounts