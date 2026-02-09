import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
const RedirectToTenantController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController.url(options),
    method: 'get',
})

RedirectToTenantController.definition = {
    methods: ["get","head"],
    url: '/nds/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController.url = (options?: RouteQueryOptions) => {
    return RedirectToTenantController.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToTenantController.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
const RedirectToTenantControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToTenantController.form = RedirectToTenantControllerForm

export default RedirectToTenantController