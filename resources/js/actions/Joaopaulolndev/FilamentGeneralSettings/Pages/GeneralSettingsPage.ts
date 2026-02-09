import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
const GeneralSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage.url(options),
    method: 'get',
})

GeneralSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/adm/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPage.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
const GeneralSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPage.form = GeneralSettingsPageForm

export default GeneralSettingsPage