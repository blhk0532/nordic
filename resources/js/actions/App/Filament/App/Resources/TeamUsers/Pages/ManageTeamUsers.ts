import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
const ManageTeamUsers7b778516dd41cf830ccec5fee5031adf = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, options),
    method: 'get',
})

ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/team-users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
const ManageTeamUsers7b778516dd41cf830ccec5fee5031adfForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
ManageTeamUsers7b778516dd41cf830ccec5fee5031adfForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/admin/tenant/{tenant}/team-users'
*/
ManageTeamUsers7b778516dd41cf830ccec5fee5031adfForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamUsers7b778516dd41cf830ccec5fee5031adf.form = ManageTeamUsers7b778516dd41cf830ccec5fee5031adfForm
/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
const ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, options),
    method: 'get',
})

ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
const ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813.form = ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813Form

const ManageTeamUsers = {
    '/admin/tenant/{tenant}/team-users': ManageTeamUsers7b778516dd41cf830ccec5fee5031adf,
    '/nds/app/team/{tenant}/team-users': ManageTeamUsers2f0bc4c4ced3fa69ea2ba1b7afebb813,
}

export default ManageTeamUsers