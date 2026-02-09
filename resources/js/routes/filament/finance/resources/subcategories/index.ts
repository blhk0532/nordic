import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/finance/subcategories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Subcategories\Pages\ManageSubcategories::__invoke
* @see app/Filament/Finance/Resources/Subcategories/Pages/ManageSubcategories.php:7
* @route '/nds/finance/subcategories'
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

const subcategories = {
    index: Object.assign(index, index),
}

export default subcategories