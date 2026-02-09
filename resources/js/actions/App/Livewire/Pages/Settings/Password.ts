import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
const Password = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Password.url(options),
    method: 'get',
})

Password.definition = {
    methods: ["get","head"],
    url: '/settings/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
Password.url = (options?: RouteQueryOptions) => {
    return Password.definition.url + queryParams(options)
}

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
Password.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Password.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
Password.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Password.url(options),
    method: 'head',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
const PasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Password.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
PasswordForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Password.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
PasswordForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Password.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Password.form = PasswordForm

export default Password