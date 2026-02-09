import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
const ListBulkActionsb173089316e2743c224ec3330e5e3b05 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url(options),
    method: 'get',
})

ListBulkActionsb173089316e2743c224ec3330e5e3b05.definition = {
    methods: ["get","head"],
    url: '/nds/tools/bulk-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
ListBulkActionsb173089316e2743c224ec3330e5e3b05.url = (options?: RouteQueryOptions) => {
    return ListBulkActionsb173089316e2743c224ec3330e5e3b05.definition.url + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
ListBulkActionsb173089316e2743c224ec3330e5e3b05.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
ListBulkActionsb173089316e2743c224ec3330e5e3b05.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url(options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
const ListBulkActionsb173089316e2743c224ec3330e5e3b05Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
ListBulkActionsb173089316e2743c224ec3330e5e3b05Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/tools/bulk-actions'
*/
ListBulkActionsb173089316e2743c224ec3330e5e3b05Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActionsb173089316e2743c224ec3330e5e3b05.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBulkActionsb173089316e2743c224ec3330e5e3b05.form = ListBulkActionsb173089316e2743c224ec3330e5e3b05Form
/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
const ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url(options),
    method: 'get',
})

ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.definition = {
    methods: ["get","head"],
    url: '/nds/super/bulk-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url = (options?: RouteQueryOptions) => {
    return ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.definition.url + queryParams(options)
}

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url(options),
    method: 'head',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
const ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url(options),
    method: 'get',
})

/**
* @see \Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource\Pages\ListBulkActions::__invoke
* @see plugins/bytexr/filament-queueable-bulk-actions/src/Filament/Resources/BulkActionResource/Pages/ListBulkActions.php:7
* @route '/nds/super/bulk-actions'
*/
ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873.form = ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873Form

const ListBulkActions = {
    '/nds/tools/bulk-actions': ListBulkActionsb173089316e2743c224ec3330e5e3b05,
    '/nds/super/bulk-actions': ListBulkActions0043ce0c71c89ce1b3dfe39d0f245873,
}

export default ListBulkActions