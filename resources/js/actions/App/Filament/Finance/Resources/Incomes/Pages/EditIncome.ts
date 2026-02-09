import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
const EditIncome = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditIncome.url(args, options),
    method: 'get',
})

EditIncome.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
EditIncome.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditIncome.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
EditIncome.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
EditIncome.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditIncome.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
const EditIncomeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
EditIncomeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIncome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
EditIncomeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditIncome.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditIncome.form = EditIncomeForm

export default EditIncome