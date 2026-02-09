import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
const ForbiddenPage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPage.url(args, options),
    method: 'get',
})

ForbiddenPage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/403',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ForbiddenPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ForbiddenPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ForbiddenPage.url(args, options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
const ForbiddenPageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage.url(args, options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/app/team/{tenant}/403'
*/
ForbiddenPageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ForbiddenPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ForbiddenPage.form = ForbiddenPageForm

export default ForbiddenPage