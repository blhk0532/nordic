import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
const Profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(options),
    method: 'get',
})

Profile.definition = {
    methods: ["get","head"],
    url: '/settings/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
Profile.url = (options?: RouteQueryOptions) => {
    return Profile.definition.url + queryParams(options)
}

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
Profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
Profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Profile.url(options),
    method: 'head',
})

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
const ProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
ProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Livewire\Pages\Settings\Profile::__invoke
* @see app/Livewire/Pages/Settings/Profile.php:7
* @route '/settings/profile'
*/
ProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Profile.form = ProfileForm

export default Profile