import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/super/bulk-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/super/bulk-actions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ViewBulkAction::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ViewBulkAction.php:7
* @route '/nds/super/bulk-actions/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const bulkActions = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default bulkActions