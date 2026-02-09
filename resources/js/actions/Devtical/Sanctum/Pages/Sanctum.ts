import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
const Sanctum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum.url(options),
    method: 'get',
})

Sanctum.definition = {
    methods: ["get","head"],
    url: '/nds/adm/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum.url = (options?: RouteQueryOptions) => {
    return Sanctum.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctum.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
const SanctumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
SanctumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
SanctumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctum.form = SanctumForm

export default Sanctum