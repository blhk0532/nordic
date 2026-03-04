import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
const ListTallcmsMenus = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMenus.url(args, options),
    method: 'get',
})

ListTallcmsMenus.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/tallcms-menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
ListTallcmsMenus.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListTallcmsMenus.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
ListTallcmsMenus.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsMenus.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
ListTallcmsMenus.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTallcmsMenus.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
const ListTallcmsMenusForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
ListTallcmsMenusForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\ListTallcmsMenus::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/ListTallcmsMenus.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus'
*/
ListTallcmsMenusForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsMenus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTallcmsMenus.form = ListTallcmsMenusForm

export default ListTallcmsMenus