import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
const RequestPasswordReset8295e476bcb62a08eec5f7f847bac860 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url(options),
    method: 'get',
})

RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.definition = {
    methods: ["get","head"],
    url: '/nds/adm/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
const RequestPasswordReset8295e476bcb62a08eec5f7f847bac860Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
RequestPasswordReset8295e476bcb62a08eec5f7f847bac860Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/adm/password-reset/request'
*/
RequestPasswordReset8295e476bcb62a08eec5f7f847bac860Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset8295e476bcb62a08eec5f7f847bac860.form = RequestPasswordReset8295e476bcb62a08eec5f7f847bac860Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
const RequestPasswordResetb8fab1a77e24af051069c0cf486174c2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url(options),
    method: 'get',
})

RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.definition = {
    methods: ["get","head"],
    url: '/nds/app/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
const RequestPasswordResetb8fab1a77e24af051069c0cf486174c2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
RequestPasswordResetb8fab1a77e24af051069c0cf486174c2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/app/password-reset/request'
*/
RequestPasswordResetb8fab1a77e24af051069c0cf486174c2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetb8fab1a77e24af051069c0cf486174c2.form = RequestPasswordResetb8fab1a77e24af051069c0cf486174c2Form

const RequestPasswordReset = {
    '/nds/adm/password-reset/request': RequestPasswordReset8295e476bcb62a08eec5f7f847bac860,
    '/nds/app/password-reset/request': RequestPasswordResetb8fab1a77e24af051069c0cf486174c2,
}

export default RequestPasswordReset