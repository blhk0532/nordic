import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/dialer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
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

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
export const autoDialerPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: autoDialerPage.url(options),
    method: 'get',
})

autoDialerPage.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/auto-dialer-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
autoDialerPage.url = (options?: RouteQueryOptions) => {
    return autoDialerPage.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
autoDialerPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: autoDialerPage.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
autoDialerPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: autoDialerPage.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
const autoDialerPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: autoDialerPage.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
autoDialerPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: autoDialerPage.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
autoDialerPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: autoDialerPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

autoDialerPage.form = autoDialerPageForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    autoDialerPage: Object.assign(autoDialerPage, autoDialerPage),
}

export default pages