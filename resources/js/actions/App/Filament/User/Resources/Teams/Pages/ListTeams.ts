import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
const ListTeams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})

ListTeams.definition = {
    methods: ["get","head"],
    url: '/nds/user/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
ListTeams.url = (options?: RouteQueryOptions) => {
    return ListTeams.definition.url + queryParams(options)
}

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
ListTeams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
ListTeams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams.url(options),
    method: 'head',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
const ListTeamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
ListTeamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/user/teams'
*/
ListTeamsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeams.form = ListTeamsForm

export default ListTeams