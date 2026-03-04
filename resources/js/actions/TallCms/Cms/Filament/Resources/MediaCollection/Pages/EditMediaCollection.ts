import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
const EditMediaCollection = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMediaCollection.url(args, options),
    method: 'get',
})

EditMediaCollection.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
EditMediaCollection.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditMediaCollection.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
EditMediaCollection.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
EditMediaCollection.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMediaCollection.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
const EditMediaCollectionForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
EditMediaCollectionForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMediaCollection.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
EditMediaCollectionForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMediaCollection.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMediaCollection.form = EditMediaCollectionForm

export default EditMediaCollection