import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
const ResetPassword31fe3fcaa0c5da8fca25624f8be80b95 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url(options),
    method: 'get',
})

ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.definition = {
    methods: ["get","head"],
    url: '/nds/adm/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url = (options?: RouteQueryOptions) => {
    return ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
const ResetPassword31fe3fcaa0c5da8fca25624f8be80b95Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
ResetPassword31fe3fcaa0c5da8fca25624f8be80b95Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/adm/password-reset/reset'
*/
ResetPassword31fe3fcaa0c5da8fca25624f8be80b95Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword31fe3fcaa0c5da8fca25624f8be80b95.form = ResetPassword31fe3fcaa0c5da8fca25624f8be80b95Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.definition = {
    methods: ["get","head"],
    url: '/nds/app/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.url = (options?: RouteQueryOptions) => {
    return ResetPassworde958504616843ced0a5bec0ef9eee292.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.form = ResetPassworde958504616843ced0a5bec0ef9eee292Form

const ResetPassword = {
    '/nds/adm/password-reset/reset': ResetPassword31fe3fcaa0c5da8fca25624f8be80b95,
    '/nds/app/password-reset/reset': ResetPassworde958504616843ced0a5bec0ef9eee292,
}

export default ResetPassword