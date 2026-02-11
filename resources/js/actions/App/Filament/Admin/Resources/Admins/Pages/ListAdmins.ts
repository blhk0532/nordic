import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
const ListAdmins591059bbd4a56ae06f84bdff917e8b5e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url(options),
    method: 'get',
})

ListAdmins591059bbd4a56ae06f84bdff917e8b5e.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url = (options?: RouteQueryOptions) => {
    return ListAdmins591059bbd4a56ae06f84bdff917e8b5e.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
ListAdmins591059bbd4a56ae06f84bdff917e8b5e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
ListAdmins591059bbd4a56ae06f84bdff917e8b5e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
const ListAdmins591059bbd4a56ae06f84bdff917e8b5eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
ListAdmins591059bbd4a56ae06f84bdff917e8b5eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/adm/admins'
*/
ListAdmins591059bbd4a56ae06f84bdff917e8b5eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins591059bbd4a56ae06f84bdff917e8b5e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins591059bbd4a56ae06f84bdff917e8b5e.form = ListAdmins591059bbd4a56ae06f84bdff917e8b5eForm
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.url = (options?: RouteQueryOptions) => {
    return ListAdmins5357cae38e08fe81d984649f532c1237.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
const ListAdmins5357cae38e08fe81d984649f532c1237Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/super/admins'
*/
ListAdmins5357cae38e08fe81d984649f532c1237Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins5357cae38e08fe81d984649f532c1237.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins5357cae38e08fe81d984649f532c1237.form = ListAdmins5357cae38e08fe81d984649f532c1237Form

const ListAdmins = {
    '/nds/adm/admins': ListAdmins591059bbd4a56ae06f84bdff917e8b5e,
    '/nds/super/admins': ListAdmins5357cae38e08fe81d984649f532c1237,
}

export default ListAdmins