import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
const ListUsersde7b92f5d57ab3be25571f27f05793f8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersde7b92f5d57ab3be25571f27f05793f8.url(options),
    method: 'get',
})

ListUsersde7b92f5d57ab3be25571f27f05793f8.definition = {
    methods: ["get","head"],
    url: '/admin/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
ListUsersde7b92f5d57ab3be25571f27f05793f8.url = (options?: RouteQueryOptions) => {
    return ListUsersde7b92f5d57ab3be25571f27f05793f8.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
ListUsersde7b92f5d57ab3be25571f27f05793f8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersde7b92f5d57ab3be25571f27f05793f8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
ListUsersde7b92f5d57ab3be25571f27f05793f8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsersde7b92f5d57ab3be25571f27f05793f8.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
const ListUsersde7b92f5d57ab3be25571f27f05793f8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersde7b92f5d57ab3be25571f27f05793f8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
ListUsersde7b92f5d57ab3be25571f27f05793f8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersde7b92f5d57ab3be25571f27f05793f8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/admin/users'
*/
ListUsersde7b92f5d57ab3be25571f27f05793f8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersde7b92f5d57ab3be25571f27f05793f8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsersde7b92f5d57ab3be25571f27f05793f8.form = ListUsersde7b92f5d57ab3be25571f27f05793f8Form
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
    '/admin/users': ListUsersde7b92f5d57ab3be25571f27f05793f8,
    '/nds/adm/users': ListUsers1593aea3b4286ed017086b43dd4ba608,
    '/nds/super/users': ListUsers3967b78d234b6c596ee24968d3182b6f,
}

export default ListUsers