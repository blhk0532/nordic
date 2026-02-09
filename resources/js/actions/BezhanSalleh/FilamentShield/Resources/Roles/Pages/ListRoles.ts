import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
const ListRoles4a523cc2e434c1d005c29784a681dd4d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles4a523cc2e434c1d005c29784a681dd4d.url(options),
    method: 'get',
})

ListRoles4a523cc2e434c1d005c29784a681dd4d.definition = {
    methods: ["get","head"],
    url: '/nds/adm/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
ListRoles4a523cc2e434c1d005c29784a681dd4d.url = (options?: RouteQueryOptions) => {
    return ListRoles4a523cc2e434c1d005c29784a681dd4d.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
ListRoles4a523cc2e434c1d005c29784a681dd4d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles4a523cc2e434c1d005c29784a681dd4d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
ListRoles4a523cc2e434c1d005c29784a681dd4d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRoles4a523cc2e434c1d005c29784a681dd4d.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
const ListRoles4a523cc2e434c1d005c29784a681dd4dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles4a523cc2e434c1d005c29784a681dd4d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
ListRoles4a523cc2e434c1d005c29784a681dd4dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles4a523cc2e434c1d005c29784a681dd4d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/adm/shield/roles'
*/
ListRoles4a523cc2e434c1d005c29784a681dd4dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles4a523cc2e434c1d005c29784a681dd4d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRoles4a523cc2e434c1d005c29784a681dd4d.form = ListRoles4a523cc2e434c1d005c29784a681dd4dForm
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.url = (options?: RouteQueryOptions) => {
    return ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.form = ListRoles97ea2592ad6e707738ae83b8eefbf74dForm

const ListRoles = {
    '/nds/adm/shield/roles': ListRoles4a523cc2e434c1d005c29784a681dd4d,
    '/nds/super/shield/roles': ListRoles97ea2592ad6e707738ae83b8eefbf74d,
}

export default ListRoles