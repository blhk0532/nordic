import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
const ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url(options),
    method: 'get',
})

ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.definition = {
    methods: ["get","head"],
    url: '/nds/admin/team-invitations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url = (options?: RouteQueryOptions) => {
    return ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
const ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TeamInvitations\Pages\ManageTeamInvitations::__invoke
* @see app/Filament/Admin/Resources/TeamInvitations/Pages/ManageTeamInvitations.php:7
* @route '/nds/admin/team-invitations'
*/
ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d.form = ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3dForm
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
    '/nds/admin/team-invitations': ManageTeamInvitations914a653609051ec35e4c16e9e8dd3f3d,
    '/nds/super/team-invitations': ManageTeamInvitations011364a502edf6236977c6a55de0f08b,
}

export default ManageTeamInvitations