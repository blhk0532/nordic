import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
const ListActivityLogs6fb509a211440bd27286a14ff69228e6 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, options),
    method: 'get',
})

ListActivityLogs6fb509a211440bd27286a14ff69228e6.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/activity-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs6fb509a211440bd27286a14ff69228e6.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListActivityLogs6fb509a211440bd27286a14ff69228e6.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs6fb509a211440bd27286a14ff69228e6.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs6fb509a211440bd27286a14ff69228e6.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
const ListActivityLogs6fb509a211440bd27286a14ff69228e6Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs6fb509a211440bd27286a14ff69228e6Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/admin/tenant/{tenant}/activity-logs'
*/
ListActivityLogs6fb509a211440bd27286a14ff69228e6Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs6fb509a211440bd27286a14ff69228e6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActivityLogs6fb509a211440bd27286a14ff69228e6.form = ListActivityLogs6fb509a211440bd27286a14ff69228e6Form
/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
const ListActivityLogs1bd783288c81ab71f868c966827b1542 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs1bd783288c81ab71f868c966827b1542.url(options),
    method: 'get',
})

ListActivityLogs1bd783288c81ab71f868c966827b1542.definition = {
    methods: ["get","head"],
    url: '/nds/adm/activity-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs1bd783288c81ab71f868c966827b1542.url = (options?: RouteQueryOptions) => {
    return ListActivityLogs1bd783288c81ab71f868c966827b1542.definition.url + queryParams(options)
}

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs1bd783288c81ab71f868c966827b1542.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActivityLogs1bd783288c81ab71f868c966827b1542.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs1bd783288c81ab71f868c966827b1542.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActivityLogs1bd783288c81ab71f868c966827b1542.url(options),
    method: 'head',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
const ListActivityLogs1bd783288c81ab71f868c966827b1542Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs1bd783288c81ab71f868c966827b1542.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs1bd783288c81ab71f868c966827b1542Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs1bd783288c81ab71f868c966827b1542.url(options),
    method: 'get',
})

/**
* @see \AlizHarb\ActivityLog\Resources\ActivityLogs\Pages\ListActivityLogs::__invoke
* @see plugins/alizharb/filament-activity-log/src/Resources/ActivityLogs/Pages/ListActivityLogs.php:7
* @route '/nds/adm/activity-logs'
*/
ListActivityLogs1bd783288c81ab71f868c966827b1542Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActivityLogs1bd783288c81ab71f868c966827b1542.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActivityLogs1bd783288c81ab71f868c966827b1542.form = ListActivityLogs1bd783288c81ab71f868c966827b1542Form

const ListActivityLogs = {
    '/admin/tenant/{tenant}/activity-logs': ListActivityLogs6fb509a211440bd27286a14ff69228e6,
    '/nds/adm/activity-logs': ListActivityLogs1bd783288c81ab71f868c966827b1542,
}

export default ListActivityLogs