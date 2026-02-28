import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
const ListRingaDataOutcomes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes.url(options),
    method: 'get',
})

ListRingaDataOutcomes.definition = {
    methods: ["get","head"],
    url: '/nds/super/ringa-data-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomes.url = (options?: RouteQueryOptions) => {
    return ListRingaDataOutcomes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaDataOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaDataOutcomes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
const ListRingaDataOutcomesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes::__invoke
* @see app/Filament/Admin/Resources/RingaDataOutcomes/Pages/ListRingaDataOutcomes.php:7
* @route '/nds/super/ringa-data-outcomes'
*/
ListRingaDataOutcomesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaDataOutcomes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaDataOutcomes.form = ListRingaDataOutcomesForm

export default ListRingaDataOutcomes