import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
const CreateIncome = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateIncome.url(options),
    method: 'get',
})

CreateIncome.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
CreateIncome.url = (options?: RouteQueryOptions) => {
    return CreateIncome.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
CreateIncome.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateIncome.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
CreateIncome.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateIncome.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
const CreateIncomeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIncome.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
CreateIncomeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIncome.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
CreateIncomeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateIncome.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateIncome.form = CreateIncomeForm

export default CreateIncome