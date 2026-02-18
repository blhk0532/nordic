import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
const ListActivityLogs = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs.url(args, options),
    method: 'get',
})

ListActivityLogs.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListActivityLogs.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActivityLogs.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
const ListActivityLogsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActivityLogs.form = ListActivityLogsForm

export default ListActivityLogs