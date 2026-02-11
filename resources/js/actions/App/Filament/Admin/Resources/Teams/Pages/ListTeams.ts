import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
const ListTeams3ce2428c2c7bd22f89354f8b84de56b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url(options),
    method: 'get',
})

ListTeams3ce2428c2c7bd22f89354f8b84de56b9.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url = (options?: RouteQueryOptions) => {
    return ListTeams3ce2428c2c7bd22f89354f8b84de56b9.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams3ce2428c2c7bd22f89354f8b84de56b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams3ce2428c2c7bd22f89354f8b84de56b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
const ListTeams3ce2428c2c7bd22f89354f8b84de56b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams3ce2428c2c7bd22f89354f8b84de56b9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/adm/teams'
*/
ListTeams3ce2428c2c7bd22f89354f8b84de56b9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeams3ce2428c2c7bd22f89354f8b84de56b9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeams3ce2428c2c7bd22f89354f8b84de56b9.form = ListTeams3ce2428c2c7bd22f89354f8b84de56b9Form
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
    '/nds/adm/teams': ListTeams3ce2428c2c7bd22f89354f8b84de56b9,
    '/nds/super/teams': ListTeamsd656303a01fc2a64489cd0bac6021617,
}

export default ListTeams