import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
const ListActivityLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs.url(options),
    method: 'get',
})

ListActivityLogs.definition = {
    methods: ["get","head"],
    url: '/nds/adm/activity-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs.url = (options?: RouteQueryOptions) => {
    return ListActivityLogs.definition.url + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActivityLogs.url(options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
const ListActivityLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActivityLogs.form = ListActivityLogsForm

export default ListActivityLogs