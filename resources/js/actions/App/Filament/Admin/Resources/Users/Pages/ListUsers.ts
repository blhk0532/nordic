import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
const ListUsers1593aea3b4286ed017086b43dd4ba608 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers1593aea3b4286ed017086b43dd4ba608.url(options),
    method: 'get',
})

ListUsers1593aea3b4286ed017086b43dd4ba608.definition = {
    methods: ["get","head"],
    url: '/nds/adm/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
ListUsers1593aea3b4286ed017086b43dd4ba608.url = (options?: RouteQueryOptions) => {
    return ListUsers1593aea3b4286ed017086b43dd4ba608.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
ListUsers1593aea3b4286ed017086b43dd4ba608.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers1593aea3b4286ed017086b43dd4ba608.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
ListUsers1593aea3b4286ed017086b43dd4ba608.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers1593aea3b4286ed017086b43dd4ba608.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
const ListUsers1593aea3b4286ed017086b43dd4ba608Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1593aea3b4286ed017086b43dd4ba608.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
ListUsers1593aea3b4286ed017086b43dd4ba608Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1593aea3b4286ed017086b43dd4ba608.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/adm/users'
*/
ListUsers1593aea3b4286ed017086b43dd4ba608Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers1593aea3b4286ed017086b43dd4ba608.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers1593aea3b4286ed017086b43dd4ba608.form = ListUsers1593aea3b4286ed017086b43dd4ba608Form
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
const ListUsers3967b78d234b6c596ee24968d3182b6f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

ListUsers3967b78d234b6c596ee24968d3182b6f.definition = {
    methods: ["get","head"],
    url: '/nds/super/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.url = (options?: RouteQueryOptions) => {
    return ListUsers3967b78d234b6c596ee24968d3182b6f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
const ListUsers3967b78d234b6c596ee24968d3182b6fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/super/users'
*/
ListUsers3967b78d234b6c596ee24968d3182b6fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsers3967b78d234b6c596ee24968d3182b6f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsers3967b78d234b6c596ee24968d3182b6f.form = ListUsers3967b78d234b6c596ee24968d3182b6fForm

const ListUsers = {
    '/nds/adm/users': ListUsers1593aea3b4286ed017086b43dd4ba608,
    '/nds/super/users': ListUsers3967b78d234b6c596ee24968d3182b6f,
}

export default ListUsers