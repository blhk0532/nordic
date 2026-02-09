import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
const ListOutcomes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomes.url(options),
    method: 'get',
})

ListOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/finance/outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
ListOutcomes.url = (options?: RouteQueryOptions) => {
    return ListOutcomes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
ListOutcomes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
ListOutcomes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListOutcomes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
const ListOutcomesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
ListOutcomesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\ListOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/ListOutcomes.php:7
* @route '/nds/finance/outcomes'
*/
ListOutcomesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListOutcomes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListOutcomes.form = ListOutcomesForm

export default ListOutcomes