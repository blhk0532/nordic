import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
const FinanceDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FinanceDashboard.url(options),
    method: 'get',
})

FinanceDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/finance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
FinanceDashboard.url = (options?: RouteQueryOptions) => {
    return FinanceDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
FinanceDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FinanceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
FinanceDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FinanceDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
const FinanceDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinanceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
FinanceDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinanceDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
FinanceDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FinanceDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FinanceDashboard.form = FinanceDashboardForm

export default FinanceDashboard