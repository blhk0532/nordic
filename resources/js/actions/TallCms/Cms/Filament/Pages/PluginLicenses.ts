import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
const PluginLicenses = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginLicenses.url(args, options),
    method: 'get',
})

PluginLicenses.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/plugin-licenses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
PluginLicenses.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return PluginLicenses.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
PluginLicenses.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginLicenses.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
PluginLicenses.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PluginLicenses.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
const PluginLicensesForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
PluginLicensesForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginLicenses::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginLicenses.php:7
* @route '/admin/tenant/{tenant}/plugin-licenses'
*/
PluginLicensesForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginLicenses.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PluginLicenses.form = PluginLicensesForm

export default PluginLicenses