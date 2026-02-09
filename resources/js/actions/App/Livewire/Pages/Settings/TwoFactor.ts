import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
const TwoFactor = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TwoFactor.url(options),
    method: 'get',
})

TwoFactor.definition = {
    methods: ["get","head"],
    url: '/settings/two-factor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
TwoFactor.url = (options?: RouteQueryOptions) => {
    return TwoFactor.definition.url + queryParams(options)
}

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
TwoFactor.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TwoFactor.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
TwoFactor.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TwoFactor.url(options),
    method: 'head',
})

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
const TwoFactorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TwoFactor.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
TwoFactorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TwoFactor.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\TwoFactor::__invoke
* @see app/Livewire/Pages/Settings/TwoFactor.php:7
* @route '/settings/two-factor'
*/
TwoFactorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TwoFactor.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TwoFactor.form = TwoFactorForm

export default TwoFactor