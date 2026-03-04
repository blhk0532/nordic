import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
const ListCmsComments = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsComments.url(args, options),
    method: 'get',
})

ListCmsComments.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
ListCmsComments.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCmsComments.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
ListCmsComments.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsComments.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
ListCmsComments.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsComments.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
const ListCmsCommentsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
ListCmsCommentsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsComments\Pages\ListCmsComments::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsComments/Pages/ListCmsComments.php:7
* @route '/admin/tenant/{tenant}/cms-comments'
*/
ListCmsCommentsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsComments.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsComments.form = ListCmsCommentsForm

export default ListCmsComments