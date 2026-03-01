import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
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
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
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
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
export const view = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
view.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
view.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
view.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
const viewForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
viewForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ViewActivityLog::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ViewActivityLog.php:7
* @route '/admin/tenant/{tenant}/activity-logs/{record}'
*/
viewForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const activityLogs = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default activityLogs