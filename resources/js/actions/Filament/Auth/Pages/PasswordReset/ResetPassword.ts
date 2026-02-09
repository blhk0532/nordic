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
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.definition = {
    methods: ["get","head"],
    url: '/nds/chat/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.url = (options?: RouteQueryOptions) => {
    return ResetPassword570063cd6633a1432398e8411983d0ed.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.form = ResetPassword570063cd6633a1432398e8411983d0edForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition = {
    methods: ["get","head"],
    url: '/nds/notify/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url = (options?: RouteQueryOptions) => {
    return ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.form = ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.definition = {
    methods: ["get","head"],
    url: '/nds/tools/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.url = (options?: RouteQueryOptions) => {
    return ResetPassword323b58fa16900ccee73e10f6caf172a1.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.form = ResetPassword323b58fa16900ccee73e10f6caf172a1Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.definition = {
    methods: ["get","head"],
    url: '/nds/super/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.url = (options?: RouteQueryOptions) => {
    return ResetPassword01e2dc01003e5970db905fba3bcb4643.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.form = ResetPassword01e2dc01003e5970db905fba3bcb4643Form

const ResetPassword = {
    '/nds/adm/password-reset/reset': ResetPassword31fe3fcaa0c5da8fca25624f8be80b95,
    '/nds/app/password-reset/reset': ResetPassworde958504616843ced0a5bec0ef9eee292,
    '/nds/chat/password-reset/reset': ResetPassword570063cd6633a1432398e8411983d0ed,
    '/nds/notify/password-reset/reset': ResetPassword6a9da8deec0604263ef565cbc5eb49cd,
    '/nds/tools/password-reset/reset': ResetPassword323b58fa16900ccee73e10f6caf172a1,
    '/nds/super/password-reset/reset': ResetPassword01e2dc01003e5970db905fba3bcb4643,
}

export default ResetPassword