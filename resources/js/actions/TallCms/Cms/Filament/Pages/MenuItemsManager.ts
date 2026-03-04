import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
const MenuItemsManager = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MenuItemsManager.url(args, options),
    method: 'get',
})

MenuItemsManager.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/menu-items-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
MenuItemsManager.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return MenuItemsManager.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
MenuItemsManager.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MenuItemsManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
MenuItemsManager.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MenuItemsManager.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
const MenuItemsManagerForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
MenuItemsManagerForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Pages\MenuItemsManager::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Pages/MenuItemsManager.php:7
* @route '/admin/tenant/{tenant}/menu-items-manager'
*/
MenuItemsManagerForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MenuItemsManager.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MenuItemsManager.form = MenuItemsManagerForm

export default MenuItemsManager