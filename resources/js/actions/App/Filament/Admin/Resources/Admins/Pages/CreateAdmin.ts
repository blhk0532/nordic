import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
const CreateAdmin2afae0c935729887282d59891d47c7c7 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, options),
    method: 'get',
})

CreateAdmin2afae0c935729887282d59891d47c7c7.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
CreateAdmin2afae0c935729887282d59891d47c7c7.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateAdmin2afae0c935729887282d59891d47c7c7.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
CreateAdmin2afae0c935729887282d59891d47c7c7.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
CreateAdmin2afae0c935729887282d59891d47c7c7.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
const CreateAdmin2afae0c935729887282d59891d47c7c7Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
CreateAdmin2afae0c935729887282d59891d47c7c7Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/admin/tenant/{tenant}/admins/create'
*/
CreateAdmin2afae0c935729887282d59891d47c7c7Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin2afae0c935729887282d59891d47c7c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmin2afae0c935729887282d59891d47c7c7.form = CreateAdmin2afae0c935729887282d59891d47c7c7Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdmine4266bb0825c7b6da5040a5f5e291f37 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

CreateAdmine4266bb0825c7b6da5040a5f5e291f37.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url = (options?: RouteQueryOptions) => {
    return CreateAdmine4266bb0825c7b6da5040a5f5e291f37.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
const CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/adm/admins/create'
*/
CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmine4266bb0825c7b6da5040a5f5e291f37.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmine4266bb0825c7b6da5040a5f5e291f37.form = CreateAdmine4266bb0825c7b6da5040a5f5e291f37Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url = (options?: RouteQueryOptions) => {
    return CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
const CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\CreateAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/CreateAdmin.php:7
* @route '/nds/super/admins/create'
*/
CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349.form = CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349Form

const CreateAdmin = {
    '/admin/tenant/{tenant}/admins/create': CreateAdmin2afae0c935729887282d59891d47c7c7,
    '/nds/adm/admins/create': CreateAdmine4266bb0825c7b6da5040a5f5e291f37,
    '/nds/super/admins/create': CreateAdmin0a791b37b2bd42bd1ddb47a0d5fd4349,
}

export default CreateAdmin