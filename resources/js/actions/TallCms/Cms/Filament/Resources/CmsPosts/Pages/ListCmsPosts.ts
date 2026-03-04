import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
const ListCmsPosts = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPosts.url(args, options),
    method: 'get',
})

ListCmsPosts.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/cms-posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
ListCmsPosts.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCmsPosts.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
ListCmsPosts.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCmsPosts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
ListCmsPosts.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCmsPosts.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
const ListCmsPostsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
ListCmsPostsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\CmsPosts\Pages\ListCmsPosts::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/CmsPosts/Pages/ListCmsPosts.php:7
* @route '/admin/tenant/{tenant}/cms-posts'
*/
ListCmsPostsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCmsPosts.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCmsPosts.form = ListCmsPostsForm

export default ListCmsPosts