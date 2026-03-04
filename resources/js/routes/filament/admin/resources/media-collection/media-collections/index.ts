import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\ListMediaCollections::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/ListMediaCollections.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
create.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\CreateMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/CreateMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/create'
*/
createForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
edit.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\MediaCollection\Pages\EditMediaCollection::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/MediaCollection/Pages/EditMediaCollection.php:7
* @route '/admin/tenant/{tenant}/media-collection/media-collections/{record}/edit'
*/
editForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const mediaCollections = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default mediaCollections