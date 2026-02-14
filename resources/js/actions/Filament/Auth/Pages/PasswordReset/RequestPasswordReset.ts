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
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
const RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url(options),
    method: 'get',
})

RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.definition = {
    methods: ["get","head"],
    url: '/nds/chat/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
const RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/chat/password-reset/request'
*/
RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683.form = RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
const RequestPasswordReset21772b9a24a5182d2351a6498e67f31e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url(options),
    method: 'get',
})

RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.definition = {
    methods: ["get","head"],
    url: '/nds/notify/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
const RequestPasswordReset21772b9a24a5182d2351a6498e67f31eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
RequestPasswordReset21772b9a24a5182d2351a6498e67f31eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/notify/password-reset/request'
*/
RequestPasswordReset21772b9a24a5182d2351a6498e67f31eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset21772b9a24a5182d2351a6498e67f31e.form = RequestPasswordReset21772b9a24a5182d2351a6498e67f31eForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
const RequestPasswordReset3391f8564ea0c71fc32171d350efc90e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url(options),
    method: 'get',
})

RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.definition = {
    methods: ["get","head"],
    url: '/nds/tools/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
const RequestPasswordReset3391f8564ea0c71fc32171d350efc90eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
RequestPasswordReset3391f8564ea0c71fc32171d350efc90eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/tools/password-reset/request'
*/
RequestPasswordReset3391f8564ea0c71fc32171d350efc90eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset3391f8564ea0c71fc32171d350efc90e.form = RequestPasswordReset3391f8564ea0c71fc32171d350efc90eForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
const RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url(options),
    method: 'get',
})

RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.definition = {
    methods: ["get","head"],
    url: '/nds/super/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
const RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/super/password-reset/request'
*/
RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf.form = RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacfForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
const RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url(options),
    method: 'get',
})

RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
const RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/calendar/password-reset/request'
*/
RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e.form = RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32eForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
const RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url(options),
    method: 'get',
})

RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.definition = {
    methods: ["get","head"],
    url: '/nds/email/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
const RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/email/password-reset/request'
*/
RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8.form = RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
const RequestPasswordResetb6f5727c107c06567868987d63dde2b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url(options),
    method: 'get',
})

RequestPasswordResetb6f5727c107c06567868987d63dde2b8.definition = {
    methods: ["get","head"],
    url: '/nds/files/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetb6f5727c107c06567868987d63dde2b8.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
RequestPasswordResetb6f5727c107c06567868987d63dde2b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
RequestPasswordResetb6f5727c107c06567868987d63dde2b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
const RequestPasswordResetb6f5727c107c06567868987d63dde2b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
RequestPasswordResetb6f5727c107c06567868987d63dde2b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/files/password-reset/request'
*/
RequestPasswordResetb6f5727c107c06567868987d63dde2b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetb6f5727c107c06567868987d63dde2b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetb6f5727c107c06567868987d63dde2b8.form = RequestPasswordResetb6f5727c107c06567868987d63dde2b8Form

const RequestPasswordReset = {
    '/nds/adm/password-reset/request': RequestPasswordReset8295e476bcb62a08eec5f7f847bac860,
    '/nds/app/password-reset/request': RequestPasswordResetb8fab1a77e24af051069c0cf486174c2,
    '/nds/chat/password-reset/request': RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683,
    '/nds/notify/password-reset/request': RequestPasswordReset21772b9a24a5182d2351a6498e67f31e,
    '/nds/tools/password-reset/request': RequestPasswordReset3391f8564ea0c71fc32171d350efc90e,
    '/nds/super/password-reset/request': RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf,
    '/nds/calendar/password-reset/request': RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e,
    '/nds/email/password-reset/request': RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8,
    '/nds/files/password-reset/request': RequestPasswordResetb6f5727c107c06567868987d63dde2b8,
}

export default RequestPasswordReset