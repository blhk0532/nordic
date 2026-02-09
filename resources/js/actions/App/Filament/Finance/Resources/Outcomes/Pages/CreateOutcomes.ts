import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
const CreateOutcomes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomes.url(options),
    method: 'get',
})

CreateOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/finance/outcomes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
CreateOutcomes.url = (options?: RouteQueryOptions) => {
    return CreateOutcomes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
CreateOutcomes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
CreateOutcomes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
const CreateOutcomesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
CreateOutcomesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Resources\Outcomes\Pages\CreateOutcomes::__invoke
* @see app/Filament/Finance/Resources/Outcomes/Pages/CreateOutcomes.php:7
* @route '/nds/finance/outcomes/create'
*/
CreateOutcomesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomes.form = CreateOutcomesForm

export default CreateOutcomes