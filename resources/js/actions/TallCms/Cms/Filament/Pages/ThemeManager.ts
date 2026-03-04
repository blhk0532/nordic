import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
const ThemeManager = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeManager.url(args, options),
    method: 'get',
})

ThemeManager.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/theme-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
ThemeManager.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ThemeManager.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
ThemeManager.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
ThemeManager.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ThemeManager.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
const ThemeManagerForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
ThemeManagerForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\ThemeManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/ThemeManager.php:7
* @route '/admin/tenant/{tenant}/theme-manager'
*/
ThemeManagerForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ThemeManager.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ThemeManager.form = ThemeManagerForm

export default ThemeManager