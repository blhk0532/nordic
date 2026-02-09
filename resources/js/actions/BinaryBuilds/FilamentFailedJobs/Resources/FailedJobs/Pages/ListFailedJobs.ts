import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
const ListFailedJobscfcafacf22699dba5feb7a19bba5558c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url(options),
    method: 'get',
})

ListFailedJobscfcafacf22699dba5feb7a19bba5558c.definition = {
    methods: ["get","head"],
    url: '/nds/tools/failed-jobs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url = (options?: RouteQueryOptions) => {
    return ListFailedJobscfcafacf22699dba5feb7a19bba5558c.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
ListFailedJobscfcafacf22699dba5feb7a19bba5558c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
ListFailedJobscfcafacf22699dba5feb7a19bba5558c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
const ListFailedJobscfcafacf22699dba5feb7a19bba5558cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
ListFailedJobscfcafacf22699dba5feb7a19bba5558cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/tools/failed-jobs'
*/
ListFailedJobscfcafacf22699dba5feb7a19bba5558cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobscfcafacf22699dba5feb7a19bba5558c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListFailedJobscfcafacf22699dba5feb7a19bba5558c.form = ListFailedJobscfcafacf22699dba5feb7a19bba5558cForm
/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
const ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url(options),
    method: 'get',
})

ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.definition = {
    methods: ["get","head"],
    url: '/nds/super/failed-jobs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url = (options?: RouteQueryOptions) => {
    return ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.definition.url + queryParams(options)
}

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url(options),
    method: 'head',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
const ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url(options),
    method: 'get',
})

/**
* @see \BinaryBuilds\FilamentFailedJobs\Resources\FailedJobs\Pages\ListFailedJobs::__invoke
* @see plugins/binarybuilds/filament-failed-jobs/src/Resources/FailedJobs/Pages/ListFailedJobs.php:7
* @route '/nds/super/failed-jobs'
*/
ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99.form = ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99Form

const ListFailedJobs = {
    '/nds/tools/failed-jobs': ListFailedJobscfcafacf22699dba5feb7a19bba5558c,
    '/nds/super/failed-jobs': ListFailedJobsa58e5a7f88f5c1832adde6dca782bd99,
}

export default ListFailedJobs