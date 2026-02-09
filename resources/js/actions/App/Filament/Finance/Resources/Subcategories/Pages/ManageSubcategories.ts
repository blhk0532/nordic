import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
const ManageSubcategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageSubcategories.url(options),
    method: 'get',
})

ManageSubcategories.definition = {
    methods: ["get","head"],
    url: '/nds/finance/subcategories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
ManageSubcategories.url = (options?: RouteQueryOptions) => {
    return ManageSubcategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
ManageSubcategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageSubcategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
ManageSubcategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageSubcategories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
const ManageSubcategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageSubcategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
ManageSubcategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageSubcategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
ManageSubcategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageSubcategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageSubcategories.form = ManageSubcategoriesForm

export default ManageSubcategories