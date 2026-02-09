import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
const AutoDialerPage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPage.url(args, options),
    method: 'get',
})

AutoDialerPage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/auto-dialer-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return AutoDialerPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AutoDialerPage.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AutoDialerPage.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
const AutoDialerPageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentDialer\Pages\AutoDialerPage::__invoke
* @see plugins/adultdate/filament-dialer/src/Pages/AutoDialerPage.php:7
* @route '/nds/app/team/{tenant}/auto-dialer-page'
*/
AutoDialerPageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AutoDialerPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AutoDialerPage.form = AutoDialerPageForm

export default AutoDialerPage