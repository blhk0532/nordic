import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})

RedirectToHomeController.definition = {
    methods: ["get","head"],
    url: '/nds/chat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
const RedirectToHomeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
* @route '/nds/chat'
*/
RedirectToHomeControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToHomeController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToHomeController.form = RedirectToHomeControllerForm

export default RedirectToHomeController