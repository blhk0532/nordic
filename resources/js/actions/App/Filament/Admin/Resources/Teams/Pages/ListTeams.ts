import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
const ListTeams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})

ListTeams.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams.url = (options?: RouteQueryOptions) => {
    return ListTeams.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
const ListTeamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
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