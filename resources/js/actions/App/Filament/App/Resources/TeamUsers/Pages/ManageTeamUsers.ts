import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
const ManageTeamUsers = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers.url(args, options),
    method: 'get',
})

ManageTeamUsers.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageTeamUsers.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsers.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamUsers.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
const ManageTeamUsersForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsersForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\TeamUsers\Pages\ManageTeamUsers::__invoke
* @see app/Filament/App/Resources/TeamUsers/Pages/ManageTeamUsers.php:7
* @route '/nds/app/team/{tenant}/team-users'
*/
ManageTeamUsersForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamUsers.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamUsers.form = ManageTeamUsersForm

export default ManageTeamUsers