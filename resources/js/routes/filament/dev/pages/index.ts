import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/dev',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dev\Pages\DevDashboard::__invoke
* @see app/Filament/Dev/Pages/DevDashboard.php:7
* @route '/nds/dev'
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
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
export const generalSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

generalSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/dev/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.url = (options?: RouteQueryOptions) => {
    return generalSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generalSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
const generalSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
generalSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generalSettingsPage.form = generalSettingsPageForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    generalSettingsPage: Object.assign(generalSettingsPage, generalSettingsPage),
}

export default pages