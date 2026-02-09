import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
const ViewBulkAction986a5e0da2805fe8b2579184fc89960f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, options),
    method: 'get',
})

ViewBulkAction986a5e0da2805fe8b2579184fc89960f.definition = {
    methods: ["get","head"],
    url: '/nds/queue/bulk-actions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewBulkAction986a5e0da2805fe8b2579184fc89960f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
ViewBulkAction986a5e0da2805fe8b2579184fc89960f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
ViewBulkAction986a5e0da2805fe8b2579184fc89960f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
const ViewBulkAction986a5e0da2805fe8b2579184fc89960fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
ViewBulkAction986a5e0da2805fe8b2579184fc89960fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/queue/bulk-actions/{record}'
*/
ViewBulkAction986a5e0da2805fe8b2579184fc89960fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction986a5e0da2805fe8b2579184fc89960f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBulkAction986a5e0da2805fe8b2579184fc89960f.form = ViewBulkAction986a5e0da2805fe8b2579184fc89960fForm
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
const ViewBulkAction455670ccf5304b8a09e461a31916d3c2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, options),
    method: 'get',
})

ViewBulkAction455670ccf5304b8a09e461a31916d3c2.definition = {
    methods: ["get","head"],
    url: '/nds/super/bulk-actions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewBulkAction455670ccf5304b8a09e461a31916d3c2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
ViewBulkAction455670ccf5304b8a09e461a31916d3c2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
ViewBulkAction455670ccf5304b8a09e461a31916d3c2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
const ViewBulkAction455670ccf5304b8a09e461a31916d3c2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
ViewBulkAction455670ccf5304b8a09e461a31916d3c2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
ViewBulkAction455670ccf5304b8a09e461a31916d3c2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction455670ccf5304b8a09e461a31916d3c2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBulkAction455670ccf5304b8a09e461a31916d3c2.form = ViewBulkAction455670ccf5304b8a09e461a31916d3c2Form
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
const ViewBulkAction38b25d573993ad40ca3d9f9828f96de2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, options),
    method: 'get',
})

ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.definition = {
    methods: ["get","head"],
    url: '/nds/tools/bulk-actions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
const ViewBulkAction38b25d573993ad40ca3d9f9828f96de2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
ViewBulkAction38b25d573993ad40ca3d9f9828f96de2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/tools/bulk-actions/{record}'
*/
ViewBulkAction38b25d573993ad40ca3d9f9828f96de2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewBulkAction38b25d573993ad40ca3d9f9828f96de2.form = ViewBulkAction38b25d573993ad40ca3d9f9828f96de2Form

const ViewBulkAction = {
    '/nds/queue/bulk-actions/{record}': ViewBulkAction986a5e0da2805fe8b2579184fc89960f,
    '/nds/super/bulk-actions/{record}': ViewBulkAction455670ccf5304b8a09e461a31916d3c2,
    '/nds/tools/bulk-actions/{record}': ViewBulkAction38b25d573993ad40ca3d9f9828f96de2,
}

export default ViewBulkAction