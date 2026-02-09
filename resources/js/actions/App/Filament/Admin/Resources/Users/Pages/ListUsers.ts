import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
const ListUsersb574c6ff241ac84f8dee2c8f3ff25745 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url(options),
    method: 'get',
})

ListUsersb574c6ff241ac84f8dee2c8f3ff25745.definition = {
    methods: ["get","head"],
    url: '/nds/admin/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url = (options?: RouteQueryOptions) => {
    return ListUsersb574c6ff241ac84f8dee2c8f3ff25745.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
ListUsersb574c6ff241ac84f8dee2c8f3ff25745.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
ListUsersb574c6ff241ac84f8dee2c8f3ff25745.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
const ListUsersb574c6ff241ac84f8dee2c8f3ff25745Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
ListUsersb574c6ff241ac84f8dee2c8f3ff25745Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\ListUsers::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/ListUsers.php:7
* @route '/nds/admin/users'
*/
ListUsersb574c6ff241ac84f8dee2c8f3ff25745Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListUsersb574c6ff241ac84f8dee2c8f3ff25745.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListUsersb574c6ff241ac84f8dee2c8f3ff25745.form = ListUsersb574c6ff241ac84f8dee2c8f3ff25745Form
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
    '/nds/admin/users': ListUsersb574c6ff241ac84f8dee2c8f3ff25745,
    '/nds/super/users': ListUsers3967b78d234b6c596ee24968d3182b6f,
}

export default ListUsers