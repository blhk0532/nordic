import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/finance/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Categories\Pages\ManageCategories::__invoke
* @see app/Filament/Finance/Resources/Categories/Pages/ManageCategories.php:7
* @route '/nds/finance/categories'
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

const categories = {
    index: Object.assign(index, index),
}

export default categories