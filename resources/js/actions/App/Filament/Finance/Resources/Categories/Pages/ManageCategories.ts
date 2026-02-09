import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
const ManageCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageCategories.url(options),
    method: 'get',
})

ManageCategories.definition = {
    methods: ["get","head"],
    url: '/nds/finance/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
ManageCategories.url = (options?: RouteQueryOptions) => {
    return ManageCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
ManageCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
ManageCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageCategories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
const ManageCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
ManageCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
ManageCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageCategories.form = ManageCategoriesForm

export default ManageCategories