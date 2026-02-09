import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
const ListRoles02c35cf04989d10ec66059dd081aa4e4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles02c35cf04989d10ec66059dd081aa4e4.url(options),
    method: 'get',
})

ListRoles02c35cf04989d10ec66059dd081aa4e4.definition = {
    methods: ["get","head"],
    url: '/nds/admin/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
ListRoles02c35cf04989d10ec66059dd081aa4e4.url = (options?: RouteQueryOptions) => {
    return ListRoles02c35cf04989d10ec66059dd081aa4e4.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
ListRoles02c35cf04989d10ec66059dd081aa4e4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles02c35cf04989d10ec66059dd081aa4e4.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
ListRoles02c35cf04989d10ec66059dd081aa4e4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRoles02c35cf04989d10ec66059dd081aa4e4.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
const ListRoles02c35cf04989d10ec66059dd081aa4e4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles02c35cf04989d10ec66059dd081aa4e4.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
ListRoles02c35cf04989d10ec66059dd081aa4e4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles02c35cf04989d10ec66059dd081aa4e4.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/admin/shield/roles'
*/
ListRoles02c35cf04989d10ec66059dd081aa4e4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles02c35cf04989d10ec66059dd081aa4e4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRoles02c35cf04989d10ec66059dd081aa4e4.form = ListRoles02c35cf04989d10ec66059dd081aa4e4Form
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
    '/nds/admin/shield/roles': ListRoles02c35cf04989d10ec66059dd081aa4e4,
    '/nds/super/shield/roles': ListRoles97ea2592ad6e707738ae83b8eefbf74d,
}

export default ListRoles