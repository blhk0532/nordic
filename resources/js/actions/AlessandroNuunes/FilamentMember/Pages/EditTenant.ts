import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
const EditTenant = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTenant.url(args, options),
    method: 'get',
})

EditTenant.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
EditTenant.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return EditTenant.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
EditTenant.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTenant.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
EditTenant.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTenant.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
const EditTenantForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTenant.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
EditTenantForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTenant.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
EditTenantForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTenant.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTenant.form = EditTenantForm

export default EditTenant