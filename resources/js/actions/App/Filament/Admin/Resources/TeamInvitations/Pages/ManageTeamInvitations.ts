import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
const ManageTeamInvitations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations.url(options),
    method: 'get',
})

ManageTeamInvitations.definition = {
    methods: ["get","head"],
    url: '/nds/adm/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitations.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitations.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitations.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
const ManageTeamInvitationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/adm/team-invitations'
*/
ManageTeamInvitationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitations.form = ManageTeamInvitationsForm

export default ManageTeamInvitations