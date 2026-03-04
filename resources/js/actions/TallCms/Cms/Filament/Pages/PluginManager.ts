import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
const PluginManager = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginManager.url(args, options),
    method: 'get',
})

PluginManager.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/plugin-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
PluginManager.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return PluginManager.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
PluginManager.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
PluginManager.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PluginManager.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
const PluginManagerForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
PluginManagerForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\PluginManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/PluginManager.php:7
* @route '/admin/tenant/{tenant}/plugin-manager'
*/
PluginManagerForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginManager.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PluginManager.form = PluginManagerForm

export default PluginManager