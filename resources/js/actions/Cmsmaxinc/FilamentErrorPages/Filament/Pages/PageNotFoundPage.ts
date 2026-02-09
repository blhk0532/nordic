import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
const PageNotFoundPage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPage.url(args, options),
    method: 'get',
})

PageNotFoundPage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return PageNotFoundPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PageNotFoundPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PageNotFoundPage.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
const PageNotFoundPageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/app/team/{tenant}/404'
*/
PageNotFoundPageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PageNotFoundPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PageNotFoundPage.form = PageNotFoundPageForm

export default PageNotFoundPage