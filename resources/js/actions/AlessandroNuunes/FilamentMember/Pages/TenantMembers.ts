import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
const TenantMembers = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TenantMembers.url(args, options),
    method: 'get',
})

TenantMembers.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
TenantMembers.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TenantMembers.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
TenantMembers.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TenantMembers.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
TenantMembers.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TenantMembers.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
const TenantMembersForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TenantMembers.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
TenantMembersForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TenantMembers.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
TenantMembersForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TenantMembers.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TenantMembers.form = TenantMembersForm

export default TenantMembers