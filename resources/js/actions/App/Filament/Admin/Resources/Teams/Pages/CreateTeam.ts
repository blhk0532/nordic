import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
const CreateTeam83aea5305307d0a89a5c8c4a04fcee27 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url(options),
    method: 'get',
})

CreateTeam83aea5305307d0a89a5c8c4a04fcee27.definition = {
    methods: ["get","head"],
    url: '/admin/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url = (options?: RouteQueryOptions) => {
    return CreateTeam83aea5305307d0a89a5c8c4a04fcee27.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
CreateTeam83aea5305307d0a89a5c8c4a04fcee27.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
CreateTeam83aea5305307d0a89a5c8c4a04fcee27.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
const CreateTeam83aea5305307d0a89a5c8c4a04fcee27Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
CreateTeam83aea5305307d0a89a5c8c4a04fcee27Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/teams/create'
*/
CreateTeam83aea5305307d0a89a5c8c4a04fcee27Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam83aea5305307d0a89a5c8c4a04fcee27.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam83aea5305307d0a89a5c8c4a04fcee27.form = CreateTeam83aea5305307d0a89a5c8c4a04fcee27Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
const CreateTeamdd5fce126bb8ab97a884241d64bad7e4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

CreateTeamdd5fce126bb8ab97a884241d64bad7e4.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url = (options?: RouteQueryOptions) => {
    return CreateTeamdd5fce126bb8ab97a884241d64bad7e4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
const CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeamdd5fce126bb8ab97a884241d64bad7e4.form = CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.url = (options?: RouteQueryOptions) => {
    return CreateTeam438b874aed1800c0be75ebcb9601be12.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.form = CreateTeam438b874aed1800c0be75ebcb9601be12Form

const CreateTeam = {
    '/admin/teams/create': CreateTeam83aea5305307d0a89a5c8c4a04fcee27,
    '/nds/adm/teams/create': CreateTeamdd5fce126bb8ab97a884241d64bad7e4,
    '/nds/super/teams/create': CreateTeam438b874aed1800c0be75ebcb9601be12,
}

export default CreateTeam