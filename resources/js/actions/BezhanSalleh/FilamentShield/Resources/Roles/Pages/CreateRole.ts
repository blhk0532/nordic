import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
const CreateRolec9129910c3a39b2ff95685bc4bb4843f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url(options),
    method: 'get',
})

CreateRolec9129910c3a39b2ff95685bc4bb4843f.definition = {
    methods: ["get","head"],
    url: '/nds/adm/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
CreateRolec9129910c3a39b2ff95685bc4bb4843f.url = (options?: RouteQueryOptions) => {
    return CreateRolec9129910c3a39b2ff95685bc4bb4843f.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
CreateRolec9129910c3a39b2ff95685bc4bb4843f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
CreateRolec9129910c3a39b2ff95685bc4bb4843f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
const CreateRolec9129910c3a39b2ff95685bc4bb4843fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
CreateRolec9129910c3a39b2ff95685bc4bb4843fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/adm/shield/roles/create'
*/
CreateRolec9129910c3a39b2ff95685bc4bb4843fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolec9129910c3a39b2ff95685bc4bb4843f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRolec9129910c3a39b2ff95685bc4bb4843f.form = CreateRolec9129910c3a39b2ff95685bc4bb4843fForm
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.url = (options?: RouteQueryOptions) => {
    return CreateRole11e055d7abeddef45d22dea3c46b678f.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.form = CreateRole11e055d7abeddef45d22dea3c46b678fForm

const CreateRole = {
    '/nds/adm/shield/roles/create': CreateRolec9129910c3a39b2ff95685bc4bb4843f,
    '/nds/super/shield/roles/create': CreateRole11e055d7abeddef45d22dea3c46b678f,
}

export default CreateRole