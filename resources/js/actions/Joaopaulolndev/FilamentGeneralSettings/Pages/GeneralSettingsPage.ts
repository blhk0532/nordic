import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
const GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, options),
    method: 'get',
})

GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
const GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/admin/tenant/{tenant}/general-settings-page'
*/
GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9.form = GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9Form
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
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
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
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
    '/admin/tenant/{tenant}/general-settings-page': GeneralSettingsPage1ac383dbb97d8f43c37ee78452cbd0e9,
    '/nds/super/general-settings-page': GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae,
}

export default GeneralSettingsPage