import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam.url(options),
    method: 'get',
})

CreateTeam.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam.url = (options?: RouteQueryOptions) => {
    return CreateTeam.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam.form = CreateTeamForm

export default CreateTeam