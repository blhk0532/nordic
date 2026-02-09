import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
const EditOutcomes = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomes.url(args, options),
    method: 'get',
})

EditOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/finance/outcomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
EditOutcomes.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomes.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
EditOutcomes.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
EditOutcomes.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomes.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
const EditOutcomesForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
EditOutcomesForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomes.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\EditOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/EditOutcomes.php:7
* @route '/nds/finance/outcomes/{record}/edit'
*/
EditOutcomesForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomes.form = EditOutcomesForm

export default EditOutcomes