import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, options),
    method: 'get',
})

TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/admin/tenant/{tenant}/team-invitation-accept'
*/
TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404.form = TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404Form
/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccepte7d994bfd2b40381a647da575947fd89 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/team-invitation-accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
const TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TeamInvitationAccept::__invoke
* @see app/Filament/App/Pages/TeamInvitationAccept.php:7
* @route '/nds/app/team/{tenant}/team-invitation-accept'
*/
TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeamInvitationAccepte7d994bfd2b40381a647da575947fd89.form = TeamInvitationAccepte7d994bfd2b40381a647da575947fd89Form

const TeamInvitationAccept = {
    '/admin/tenant/{tenant}/team-invitation-accept': TeamInvitationAccept1730b9692b01ef4337b0cec0ccdf7404,
    '/nds/app/team/{tenant}/team-invitation-accept': TeamInvitationAccepte7d994bfd2b40381a647da575947fd89,
}

export default TeamInvitationAccept