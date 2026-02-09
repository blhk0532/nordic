import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
const ListIncomes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListIncomes.url(options),
    method: 'get',
})

ListIncomes.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
ListIncomes.url = (options?: RouteQueryOptions) => {
    return ListIncomes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
ListIncomes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListIncomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
ListIncomes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListIncomes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
const ListIncomesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIncomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
ListIncomesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIncomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
ListIncomesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListIncomes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListIncomes.form = ListIncomesForm

export default ListIncomes