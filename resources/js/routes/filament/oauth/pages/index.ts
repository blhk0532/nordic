import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/oauth',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Oauth\Pages\OauthDashboard::__invoke
* @see app/Filament/Oauth/Pages/OauthDashboard.php:7
* @route '/nds/oauth'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
}

export default pages