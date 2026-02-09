import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
const ManageDiscounts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageDiscounts.url(options),
    method: 'get',
})

ManageDiscounts.definition = {
    methods: ["get","head"],
    url: '/nds/finance/discounts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
ManageDiscounts.url = (options?: RouteQueryOptions) => {
    return ManageDiscounts.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
ManageDiscounts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageDiscounts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
ManageDiscounts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageDiscounts.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
const ManageDiscountsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageDiscounts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
ManageDiscountsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageDiscounts.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Discounts\Pages\ManageDiscounts::__invoke
* @see app/Filament/Finance/Resources/Discounts/Pages/ManageDiscounts.php:7
* @route '/nds/finance/discounts'
*/
ManageDiscountsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageDiscounts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageDiscounts.form = ManageDiscountsForm

export default ManageDiscounts