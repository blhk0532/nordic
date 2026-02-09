import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
const Appearance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appearance.url(options),
    method: 'get',
})

Appearance.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
Appearance.url = (options?: RouteQueryOptions) => {
    return Appearance.definition.url + queryParams(options)
}

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
Appearance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appearance.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
Appearance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Appearance.url(options),
    method: 'head',
})

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
const AppearanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Appearance.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
AppearanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Appearance.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Appearance::__invoke
* @see app/Livewire/Pages/Settings/Appearance.php:7
* @route '/settings/appearance'
*/
AppearanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Appearance.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Appearance.form = AppearanceForm

export default Appearance