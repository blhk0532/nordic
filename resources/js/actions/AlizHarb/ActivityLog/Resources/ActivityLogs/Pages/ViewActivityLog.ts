import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
const ViewActivityLogd05064ee64ebcdb42fe23ae546619257 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, options),
    method: 'get',
})

ViewActivityLogd05064ee64ebcdb42fe23ae546619257.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewActivityLogd05064ee64ebcdb42fe23ae546619257.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogd05064ee64ebcdb42fe23ae546619257.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogd05064ee64ebcdb42fe23ae546619257.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
const ViewActivityLogd05064ee64ebcdb42fe23ae546619257Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogd05064ee64ebcdb42fe23ae546619257Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
ViewActivityLogd05064ee64ebcdb42fe23ae546619257Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLogd05064ee64ebcdb42fe23ae546619257.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewActivityLogd05064ee64ebcdb42fe23ae546619257.form = ViewActivityLogd05064ee64ebcdb42fe23ae546619257Form
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
const ViewActivityLoged8175989038782400a1c0f84bfd522f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, options),
    method: 'get',
})

ViewActivityLoged8175989038782400a1c0f84bfd522f.definition = {
    methods: ["get","head"],
    url: '/nds/adm/activity-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
ViewActivityLoged8175989038782400a1c0f84bfd522f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewActivityLoged8175989038782400a1c0f84bfd522f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
ViewActivityLoged8175989038782400a1c0f84bfd522f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
ViewActivityLoged8175989038782400a1c0f84bfd522f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
const ViewActivityLoged8175989038782400a1c0f84bfd522fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
ViewActivityLoged8175989038782400a1c0f84bfd522fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/nds/adm/activity-logs/{record}'
*/
ViewActivityLoged8175989038782400a1c0f84bfd522fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewActivityLoged8175989038782400a1c0f84bfd522f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewActivityLoged8175989038782400a1c0f84bfd522f.form = ViewActivityLoged8175989038782400a1c0f84bfd522fForm

const ViewActivityLog = {
    '/admin/tenant/{tenant}/activity-logs/{record}': ViewActivityLogd05064ee64ebcdb42fe23ae546619257,
    '/nds/adm/activity-logs/{record}': ViewActivityLoged8175989038782400a1c0f84bfd522f,
}

export default ViewActivityLog