import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
const CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
const CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.form = CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm
/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.definition = {
    methods: ["get","head"],
    url: '/nds/super/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.url = (options?: RouteQueryOptions) => {
    return CreateUser7a4044a8bd2b99077d9852507876b355.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
const CreateUser7a4044a8bd2b99077d9852507876b355Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/Admin/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/super/users/create'
*/
CreateUser7a4044a8bd2b99077d9852507876b355Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser7a4044a8bd2b99077d9852507876b355.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser7a4044a8bd2b99077d9852507876b355.form = CreateUser7a4044a8bd2b99077d9852507876b355Form

const CreateUser = {
    '/admin/tenant/{tenant}/users/create': CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b,
    '/nds/super/users/create': CreateUser7a4044a8bd2b99077d9852507876b355,
}

export default CreateUser