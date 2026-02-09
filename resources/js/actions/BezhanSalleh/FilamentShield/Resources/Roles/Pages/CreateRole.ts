import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
const CreateRolea7e94aedb4f7d673eb02681c8436b54d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url(options),
    method: 'get',
})

CreateRolea7e94aedb4f7d673eb02681c8436b54d.definition = {
    methods: ["get","head"],
    url: '/nds/admin/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
CreateRolea7e94aedb4f7d673eb02681c8436b54d.url = (options?: RouteQueryOptions) => {
    return CreateRolea7e94aedb4f7d673eb02681c8436b54d.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
CreateRolea7e94aedb4f7d673eb02681c8436b54d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
CreateRolea7e94aedb4f7d673eb02681c8436b54d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
const CreateRolea7e94aedb4f7d673eb02681c8436b54dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
CreateRolea7e94aedb4f7d673eb02681c8436b54dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/admin/shield/roles/create'
*/
CreateRolea7e94aedb4f7d673eb02681c8436b54dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRolea7e94aedb4f7d673eb02681c8436b54d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRolea7e94aedb4f7d673eb02681c8436b54d.form = CreateRolea7e94aedb4f7d673eb02681c8436b54dForm
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
    '/nds/admin/shield/roles/create': CreateRolea7e94aedb4f7d673eb02681c8436b54d,
    '/nds/super/shield/roles/create': CreateRole11e055d7abeddef45d22dea3c46b678f,
}

export default CreateRole