import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
const ListMediaCollections = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMediaCollections.url(args, options),
    method: 'get',
})

ListMediaCollections.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
ListMediaCollections.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListMediaCollections.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
ListMediaCollections.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMediaCollections.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
ListMediaCollections.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMediaCollections.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
const ListMediaCollectionsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
ListMediaCollectionsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
ListMediaCollectionsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMediaCollections.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMediaCollections.form = ListMediaCollectionsForm

export default ListMediaCollections