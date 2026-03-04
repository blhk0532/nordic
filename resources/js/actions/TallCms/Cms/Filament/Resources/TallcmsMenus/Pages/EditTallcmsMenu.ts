import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
const EditTallcmsMenu = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'get',
})

EditTallcmsMenu.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/tallcms-menus/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditTallcmsMenu.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
EditTallcmsMenu.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTallcmsMenu.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
const EditTallcmsMenuForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
EditTallcmsMenuForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMenus\Pages\EditTallcmsMenu::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMenus/Pages/EditTallcmsMenu.php:7
* @route '/admin/tenant/{tenant}/tallcms-menus/{record}/edit'
*/
EditTallcmsMenuForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMenu.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTallcmsMenu.form = EditTallcmsMenuForm

export default EditTallcmsMenu