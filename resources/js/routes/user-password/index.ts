import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Password::__invoke
* @see app/Livewire/Pages/Settings/Password.php:7
* @route '/settings/password'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const userPassword = {
    edit: Object.assign(edit, edit),
}

export default userPassword