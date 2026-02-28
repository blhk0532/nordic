import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
const EditUserf9ab2c40245ae07b81365bc3740dfb1a = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, options),
    method: 'get',
})

EditUserf9ab2c40245ae07b81365bc3740dfb1a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
EditUserf9ab2c40245ae07b81365bc3740dfb1a.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditUserf9ab2c40245ae07b81365bc3740dfb1a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
EditUserf9ab2c40245ae07b81365bc3740dfb1a.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
EditUserf9ab2c40245ae07b81365bc3740dfb1a.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
const EditUserf9ab2c40245ae07b81365bc3740dfb1aForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
EditUserf9ab2c40245ae07b81365bc3740dfb1aForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/admin/tenant/{tenant}/users/{record}/edit'
*/
EditUserf9ab2c40245ae07b81365bc3740dfb1aForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserf9ab2c40245ae07b81365bc3740dfb1a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUserf9ab2c40245ae07b81365bc3740dfb1a.form = EditUserf9ab2c40245ae07b81365bc3740dfb1aForm
/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
const EditUserbeaa55854518fa7283958677a4f1d231 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserbeaa55854518fa7283958677a4f1d231.url(args, options),
    method: 'get',
})

EditUserbeaa55854518fa7283958677a4f1d231.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserbeaa55854518fa7283958677a4f1d231.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditUserbeaa55854518fa7283958677a4f1d231.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserbeaa55854518fa7283958677a4f1d231.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserbeaa55854518fa7283958677a4f1d231.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserbeaa55854518fa7283958677a4f1d231.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUserbeaa55854518fa7283958677a4f1d231.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
const EditUserbeaa55854518fa7283958677a4f1d231Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserbeaa55854518fa7283958677a4f1d231.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserbeaa55854518fa7283958677a4f1d231Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserbeaa55854518fa7283958677a4f1d231.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Users\Pages\EditUser::__invoke
* @see app/Filament/App/Resources/Users/Pages/EditUser.php:7
* @route '/nds/app/team/{tenant}/users/{record}/edit'
*/
EditUserbeaa55854518fa7283958677a4f1d231Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserbeaa55854518fa7283958677a4f1d231.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUserbeaa55854518fa7283958677a4f1d231.form = EditUserbeaa55854518fa7283958677a4f1d231Form

const EditUser = {
    '/admin/tenant/{tenant}/users/{record}/edit': EditUserf9ab2c40245ae07b81365bc3740dfb1a,
    '/nds/app/team/{tenant}/users/{record}/edit': EditUserbeaa55854518fa7283958677a4f1d231,
}

export default EditUser