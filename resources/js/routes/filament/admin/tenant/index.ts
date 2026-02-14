import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
export const registration = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registration.url(options),
    method: 'get',
})

registration.definition = {
    methods: ["get","head"],
    url: '/admin/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
registration.url = (options?: RouteQueryOptions) => {
    return registration.definition.url + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
registration.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registration.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
registration.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registration.url(options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
const registrationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
registrationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
registrationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registration.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

registration.form = registrationForm

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
export const profile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
profile.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return profile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
profile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
profile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
const profileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
profileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\EditTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/EditTenant.php:7
* @route '/admin/tenant/{tenant}/profile'
*/
profileForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profile.form = profileForm
