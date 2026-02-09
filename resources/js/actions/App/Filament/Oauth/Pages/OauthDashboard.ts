import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
const OauthDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: OauthDashboard.url(options),
    method: 'get',
})

OauthDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/oauth',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
OauthDashboard.url = (options?: RouteQueryOptions) => {
    return OauthDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
OauthDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: OauthDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
OauthDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: OauthDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
const OauthDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OauthDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
OauthDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OauthDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
OauthDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: OauthDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

OauthDashboard.form = OauthDashboardForm

export default OauthDashboard