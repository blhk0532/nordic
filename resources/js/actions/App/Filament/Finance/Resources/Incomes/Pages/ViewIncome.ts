import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
const ViewIncome = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewIncome.url(args, options),
    method: 'get',
})

ViewIncome.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
ViewIncome.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewIncome.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
ViewIncome.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
ViewIncome.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewIncome.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
const ViewIncomeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
ViewIncomeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
ViewIncomeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewIncome.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewIncome.form = ViewIncomeForm

export default ViewIncome