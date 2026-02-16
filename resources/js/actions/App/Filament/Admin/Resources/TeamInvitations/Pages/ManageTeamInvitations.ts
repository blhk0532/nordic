import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
const ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, options),
    method: 'get',
})

ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
const ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2eForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2eForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/tenant/{tenant}/team-invitations'
*/
ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2eForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e.form = ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2eForm
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
const ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url(options),
    method: 'get',
})

ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.definition = {
    methods: ["get","head"],
    url: '/nds/adm/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
const ManageTeamInvitationsf711b307a143e294616fd30f8a4f79ebForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsf711b307a143e294616fd30f8a4f79ebForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsf711b307a143e294616fd30f8a4f79ebForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb.form = ManageTeamInvitationsf711b307a143e294616fd30f8a4f79ebForm
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
const ManageTeamInvitations011364a502edf6236977c6a55de0f08b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

ManageTeamInvitations011364a502edf6236977c6a55de0f08b.definition = {
    methods: ["get","head"],
    url: '/nds/super/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitations011364a502edf6236977c6a55de0f08b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
const ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/super/team-invitations'
*/
ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations011364a502edf6236977c6a55de0f08b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitations011364a502edf6236977c6a55de0f08b.form = ManageTeamInvitations011364a502edf6236977c6a55de0f08bForm

const ManageTeamInvitations = {
    '/admin/tenant/{tenant}/team-invitations': ManageTeamInvitations2b9c005317bccbb07bfc6d45ed4c0f2e,
    '/nds/adm/team-invitations': ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb,
    '/nds/super/team-invitations': ManageTeamInvitations011364a502edf6236977c6a55de0f08b,
}

export default ManageTeamInvitations