import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
const EditCmsPage = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsPage.url(args, options),
    method: 'get',
})

EditCmsPage.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
EditCmsPage.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCmsPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
EditCmsPage.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
EditCmsPage.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCmsPage.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
const EditCmsPageForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
EditCmsPageForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\EditCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/EditCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/{record}/edit'
*/
EditCmsPageForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCmsPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCmsPage.form = EditCmsPageForm

export default EditCmsPage