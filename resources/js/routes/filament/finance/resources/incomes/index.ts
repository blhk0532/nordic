import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ListIncomes::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ListIncomes.php:7
* @route '/nds/finance/incomes'
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

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\CreateIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/CreateIncome.php:7
* @route '/nds/finance/incomes/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\ViewIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/ViewIncome.php:7
* @route '/nds/finance/incomes/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\EditIncome::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/EditIncome.php:7
* @route '/nds/finance/incomes/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
export const payments = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(args, options),
    method: 'get',
})

payments.definition = {
    methods: ["get","head"],
    url: '/nds/finance/incomes/{record}/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
payments.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return payments.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
payments.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
payments.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payments.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
const paymentsForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
paymentsForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Incomes\Pages\IncomePayments::__invoke
* @see app/Filament/Finance/Resources/Incomes/Pages/IncomePayments.php:7
* @route '/nds/finance/incomes/{record}/payments'
*/
paymentsForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payments.form = paymentsForm

const incomes = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
    payments: Object.assign(payments, payments),
}

export default incomes