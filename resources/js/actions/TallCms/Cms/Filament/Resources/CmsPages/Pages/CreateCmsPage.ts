import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
const CreateCmsPage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsPage.url(args, options),
    method: 'get',
})

CreateCmsPage.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
CreateCmsPage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCmsPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
CreateCmsPage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
CreateCmsPage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCmsPage.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
const CreateCmsPageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
CreateCmsPageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPage.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPages\Pages\CreateCmsPage::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPages/Pages/CreateCmsPage.php:7
* @route '/admin/tenant/{tenant}/cms-pages/create'
*/
CreateCmsPageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCmsPage.form = CreateCmsPageForm

export default CreateCmsPage