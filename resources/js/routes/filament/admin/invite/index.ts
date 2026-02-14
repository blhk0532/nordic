import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
export const accept = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accept.url(args, options),
    method: 'get',
})

accept.definition = {
    methods: ["get","head"],
    url: '/admin/invite/{token}/accept',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
accept.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return accept.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
accept.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accept.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
accept.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accept.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
const acceptForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accept.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
acceptForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accept.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\AcceptInvite::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/AcceptInvite.php:7
* @route '/admin/invite/{token}/accept'
*/
acceptForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accept.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

accept.form = acceptForm

const invite = {
    accept: Object.assign(accept, accept),
}

export default invite