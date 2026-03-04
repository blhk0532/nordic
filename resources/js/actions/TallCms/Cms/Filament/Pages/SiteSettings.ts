import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
const SiteSettings = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteSettings.url(args, options),
    method: 'get',
})

SiteSettings.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/site-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
SiteSettings.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return SiteSettings.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
SiteSettings.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteSettings.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
SiteSettings.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SiteSettings.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
const SiteSettingsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
SiteSettingsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\SiteSettings::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/SiteSettings.php:7
* @route '/admin/tenant/{tenant}/site-settings'
*/
SiteSettingsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SiteSettings.form = SiteSettingsForm

export default SiteSettings