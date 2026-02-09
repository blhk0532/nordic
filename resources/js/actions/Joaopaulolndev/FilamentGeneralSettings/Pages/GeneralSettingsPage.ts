import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
const GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url(options),
    method: 'get',
})

GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.definition = {
    methods: ["get","head"],
    url: '/nds/adm/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
const GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d.form = GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0dForm
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.definition = {
    methods: ["get","head"],
    url: '/nds/super/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.form = GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm

const GeneralSettingsPage = {
    '/nds/adm/general-settings-page': GeneralSettingsPagefb733339a1ab1f8ac3aa2551311a0b0d,
    '/nds/super/general-settings-page': GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae,
}

export default GeneralSettingsPage