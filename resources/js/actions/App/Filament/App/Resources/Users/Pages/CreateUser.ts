import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
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
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
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
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
const CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/admin/tenant/{tenant}/users/create'
*/
CreateUser957a11ae149ed22b7ea55a9e5dd9cb5bForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
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
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
const CreateUser836ac5ea375283931739b89d5d57eb7d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, options),
    method: 'get',
})

CreateUser836ac5ea375283931739b89d5d57eb7d.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser836ac5ea375283931739b89d5d57eb7d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateUser836ac5ea375283931739b89d5d57eb7d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser836ac5ea375283931739b89d5d57eb7d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser836ac5ea375283931739b89d5d57eb7d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
const CreateUser836ac5ea375283931739b89d5d57eb7dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser836ac5ea375283931739b89d5d57eb7dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\CreateUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/CreateUser.php:7
* @route '/nds/app/team/{tenant}/users/create'
*/
CreateUser836ac5ea375283931739b89d5d57eb7dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateUser836ac5ea375283931739b89d5d57eb7d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateUser836ac5ea375283931739b89d5d57eb7d.form = CreateUser836ac5ea375283931739b89d5d57eb7dForm

const CreateUser = {
    '/admin/tenant/{tenant}/users/create': CreateUser957a11ae149ed22b7ea55a9e5dd9cb5b,
    '/nds/app/team/{tenant}/users/create': CreateUser836ac5ea375283931739b89d5d57eb7d,
}

export default CreateUser