import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
const ViewActivityLog = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLog.url(args, options),
    method: 'get',
})

ViewActivityLog.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLog.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewActivityLog.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLog.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLog.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLog.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewActivityLog.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
const ViewActivityLogForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLog.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLog.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLog.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewActivityLog.form = ViewActivityLogForm

export default ViewActivityLog