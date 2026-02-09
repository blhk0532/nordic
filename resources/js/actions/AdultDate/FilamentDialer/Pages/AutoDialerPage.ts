import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
const AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, options),
    method: 'get',
})

AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/auto-dialer-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
const AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53.form = AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53Form
/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
const AutoDialerPage18e71170ebab187dec852557f4294fa3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPage18e71170ebab187dec852557f4294fa3.url(options),
    method: 'get',
})

AutoDialerPage18e71170ebab187dec852557f4294fa3.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/auto-dialer-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
AutoDialerPage18e71170ebab187dec852557f4294fa3.url = (options?: RouteQueryOptions) => {
    return AutoDialerPage18e71170ebab187dec852557f4294fa3.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
AutoDialerPage18e71170ebab187dec852557f4294fa3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPage18e71170ebab187dec852557f4294fa3.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
AutoDialerPage18e71170ebab187dec852557f4294fa3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AutoDialerPage18e71170ebab187dec852557f4294fa3.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
const AutoDialerPage18e71170ebab187dec852557f4294fa3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage18e71170ebab187dec852557f4294fa3.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
AutoDialerPage18e71170ebab187dec852557f4294fa3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage18e71170ebab187dec852557f4294fa3.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/dialer/auto-dialer-page'
*/
AutoDialerPage18e71170ebab187dec852557f4294fa3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage18e71170ebab187dec852557f4294fa3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AutoDialerPage18e71170ebab187dec852557f4294fa3.form = AutoDialerPage18e71170ebab187dec852557f4294fa3Form

const AutoDialerPage = {
    '/nds/app/team/{tenant}/auto-dialer-page': AutoDialerPagebf92bb09db5f7722c29151aec6e4bf53,
    '/nds/dialer/auto-dialer-page': AutoDialerPage18e71170ebab187dec852557f4294fa3,
}

export default AutoDialerPage