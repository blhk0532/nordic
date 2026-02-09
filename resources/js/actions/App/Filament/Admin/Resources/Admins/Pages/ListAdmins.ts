import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
const ListAdmins89e2fdda3a6048c6631759f6b1149edc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url(options),
    method: 'get',
})

ListAdmins89e2fdda3a6048c6631759f6b1149edc.definition = {
    methods: ["get","head"],
    url: '/nds/admin/admins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
ListAdmins89e2fdda3a6048c6631759f6b1149edc.url = (options?: RouteQueryOptions) => {
    return ListAdmins89e2fdda3a6048c6631759f6b1149edc.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
ListAdmins89e2fdda3a6048c6631759f6b1149edc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
ListAdmins89e2fdda3a6048c6631759f6b1149edc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
const ListAdmins89e2fdda3a6048c6631759f6b1149edcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
ListAdmins89e2fdda3a6048c6631759f6b1149edcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\ListAdmins::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/ListAdmins.php:7
* @route '/nds/admin/admins'
*/
ListAdmins89e2fdda3a6048c6631759f6b1149edcForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAdmins89e2fdda3a6048c6631759f6b1149edc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAdmins89e2fdda3a6048c6631759f6b1149edc.form = ListAdmins89e2fdda3a6048c6631759f6b1149edcForm
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
    '/nds/admin/admins': ListAdmins89e2fdda3a6048c6631759f6b1149edc,
    '/nds/super/admins': ListAdmins5357cae38e08fe81d984649f532c1237,
}

export default ListAdmins