import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
const RegisterTenant = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterTenant.url(options),
    method: 'get',
})

RegisterTenant.definition = {
    methods: ["get","head"],
    url: '/admin/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
RegisterTenant.url = (options?: RouteQueryOptions) => {
    return RegisterTenant.definition.url + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
RegisterTenant.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterTenant.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
RegisterTenant.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RegisterTenant.url(options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
const RegisterTenantForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTenant.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
RegisterTenantForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTenant.url(options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\RegisterTenant::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/RegisterTenant.php:7
* @route '/admin/new'
*/
RegisterTenantForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTenant.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RegisterTenant.form = RegisterTenantForm

export default RegisterTenant