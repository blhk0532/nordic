import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
const AcceptInvite = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AcceptInvite.url(args, options),
    method: 'get',
})

AcceptInvite.definition = {
    methods: ["get","head"],
    url: '/admin/invite/{token}/accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
AcceptInvite.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return AcceptInvite.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
AcceptInvite.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AcceptInvite.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
AcceptInvite.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AcceptInvite.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
const AcceptInviteForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AcceptInvite.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
AcceptInviteForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AcceptInvite.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
AcceptInviteForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AcceptInvite.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AcceptInvite.form = AcceptInviteForm

export default AcceptInvite