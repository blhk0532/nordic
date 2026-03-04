import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
const CreateTallcmsMenu = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMenu.url(args, options),
    method: 'get',
})

CreateTallcmsMenu.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/tallcms-menus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
CreateTallcmsMenu.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateTallcmsMenu.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
CreateTallcmsMenu.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
CreateTallcmsMenu.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTallcmsMenu.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
const CreateTallcmsMenuForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
CreateTallcmsMenuForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\CreateTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/CreateTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/create'
*/
CreateTallcmsMenuForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMenu.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTallcmsMenu.form = CreateTallcmsMenuForm

export default CreateTallcmsMenu