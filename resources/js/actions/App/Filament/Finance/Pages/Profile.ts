import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
const Profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(options),
    method: 'get',
})

Profile.definition = {
    methods: ["get","head"],
    url: '/nds/finance/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
Profile.url = (options?: RouteQueryOptions) => {
    return Profile.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
Profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
Profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Profile.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
const ProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
ProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
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