import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
const CreateTeamc652ee9ceaa1c3da2643ac61b4f69662 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url(options),
    method: 'get',
})

CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.definition = {
    methods: ["get","head"],
    url: '/nds/admin/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url = (options?: RouteQueryOptions) => {
    return CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
const CreateTeamc652ee9ceaa1c3da2643ac61b4f69662Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
CreateTeamc652ee9ceaa1c3da2643ac61b4f69662Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/admin/teams/create'
*/
CreateTeamc652ee9ceaa1c3da2643ac61b4f69662Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeamc652ee9ceaa1c3da2643ac61b4f69662.form = CreateTeamc652ee9ceaa1c3da2643ac61b4f69662Form
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
    '/nds/admin/teams/create': CreateTeamc652ee9ceaa1c3da2643ac61b4f69662,
    '/nds/super/teams/create': CreateTeam438b874aed1800c0be75ebcb9601be12,
}

export default CreateTeam