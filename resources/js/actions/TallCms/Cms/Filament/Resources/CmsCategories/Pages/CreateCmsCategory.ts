import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
const CreateCmsCategory = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsCategory.url(args, options),
    method: 'get',
})

CreateCmsCategory.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
CreateCmsCategory.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCmsCategory.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
CreateCmsCategory.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
CreateCmsCategory.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCmsCategory.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
const CreateCmsCategoryForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
CreateCmsCategoryForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsCategories\Pages\CreateCmsCategory::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsCategories/Pages/CreateCmsCategory.php:7
* @route '/admin/tenant/{tenant}/cms-categories/create'
*/
CreateCmsCategoryForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCmsCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCmsCategory.form = CreateCmsCategoryForm

export default CreateCmsCategory