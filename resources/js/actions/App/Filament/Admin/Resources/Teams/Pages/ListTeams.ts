import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
const ListTeams0897d68a2a3ae5e13ef6203e3d82ee58 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url(options),
    method: 'get',
})

ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.definition = {
    methods: ["get","head"],
    url: '/nds/admin/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url = (options?: RouteQueryOptions) => {
    return ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
const ListTeams0897d68a2a3ae5e13ef6203e3d82ee58Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
ListTeams0897d68a2a3ae5e13ef6203e3d82ee58Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/admin/teams'
*/
ListTeams0897d68a2a3ae5e13ef6203e3d82ee58Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeams0897d68a2a3ae5e13ef6203e3d82ee58.form = ListTeams0897d68a2a3ae5e13ef6203e3d82ee58Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.url = (options?: RouteQueryOptions) => {
    return ListTeamsd656303a01fc2a64489cd0bac6021617.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.form = ListTeamsd656303a01fc2a64489cd0bac6021617Form

const ListTeams = {
    '/nds/admin/teams': ListTeams0897d68a2a3ae5e13ef6203e3d82ee58,
    '/nds/super/teams': ListTeamsd656303a01fc2a64489cd0bac6021617,
}

export default ListTeams