import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
const ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, options),
    method: 'get',
})

ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
const ViewTeam25d27a5d6c7db7b127e9ed8f8500cbaeForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
ViewTeam25d27a5d6c7db7b127e9ed8f8500cbaeForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}'
*/
ViewTeam25d27a5d6c7db7b127e9ed8f8500cbaeForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae.form = ViewTeam25d27a5d6c7db7b127e9ed8f8500cbaeForm
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.form = ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm

const ViewTeam = {
    '/admin/tenant/{tenant}/teams/{record}': ViewTeam25d27a5d6c7db7b127e9ed8f8500cbae,
    '/nds/super/teams/{record}': ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b,
}

export default ViewTeam