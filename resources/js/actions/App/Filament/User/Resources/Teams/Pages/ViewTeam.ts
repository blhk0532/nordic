import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
const ViewTeam = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam.url(args, options),
    method: 'get',
})

ViewTeam.definition = {
    methods: ["get","head"],
    url: '/nds/user/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
ViewTeam.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewTeam.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
ViewTeam.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
ViewTeam.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
const ViewTeamForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
ViewTeamForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\User\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/User/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/user/teams/{record}'
*/
ViewTeamForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam.form = ViewTeamForm

export default ViewTeam