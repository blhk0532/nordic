import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
const ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url(options),
    method: 'get',
})

ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.definition = {
    methods: ["get","head"],
    url: '/admin/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
const ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/admin/team-invitations'
*/
ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326.form = ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326Form
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
    '/admin/team-invitations': ManageTeamInvitationsb14e4b3b5467c1ec36d302745f4a2326,
    '/nds/adm/team-invitations': ManageTeamInvitationsf711b307a143e294616fd30f8a4f79eb,
    '/nds/super/team-invitations': ManageTeamInvitations011364a502edf6236977c6a55de0f08b,
}

export default ManageTeamInvitations