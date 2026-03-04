import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
const EditCmsCategory = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'get',
})

EditCmsCategory.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
EditCmsCategory.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCmsCategory.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
EditCmsCategory.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
EditCmsCategory.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCmsCategory.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
const EditCmsCategoryForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
EditCmsCategoryForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\EditCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/EditCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/{record}/edit'
*/
EditCmsCategoryForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCmsCategory.form = EditCmsCategoryForm

export default EditCmsCategory