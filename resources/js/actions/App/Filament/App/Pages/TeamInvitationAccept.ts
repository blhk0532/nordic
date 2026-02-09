import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccept = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccept.url(args, options),
    method: 'get',
})

TeamInvitationAccept.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TeamInvitationAccept.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeamInvitationAccept.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAcceptForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAcceptForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeamInvitationAccept.form = TeamInvitationAcceptForm

export default TeamInvitationAccept