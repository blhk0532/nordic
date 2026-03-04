import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
const CreateMediaCollection = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMediaCollection.url(args, options),
    method: 'get',
})

CreateMediaCollection.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
CreateMediaCollection.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateMediaCollection.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
CreateMediaCollection.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
CreateMediaCollection.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMediaCollection.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
const CreateMediaCollectionForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
CreateMediaCollectionForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
CreateMediaCollectionForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMediaCollection.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMediaCollection.form = CreateMediaCollectionForm

export default CreateMediaCollection