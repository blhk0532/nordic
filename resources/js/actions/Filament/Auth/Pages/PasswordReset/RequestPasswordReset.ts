import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
const RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url(options),
    method: 'get',
})

RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.definition = {
    methods: ["get","head"],
    url: '/nds/admin/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
const RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/admin/password-reset/request'
*/
RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3.form = RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3Form
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
* @route '/nds/clients/password-reset/request'
*/
const RequestPasswordReset686818831b5d23888f1cd12f02c243c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url(options),
    method: 'get',
})

RequestPasswordReset686818831b5d23888f1cd12f02c243c9.definition = {
    methods: ["get","head"],
    url: '/nds/clients/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset686818831b5d23888f1cd12f02c243c9.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
RequestPasswordReset686818831b5d23888f1cd12f02c243c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
RequestPasswordReset686818831b5d23888f1cd12f02c243c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
const RequestPasswordReset686818831b5d23888f1cd12f02c243c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
RequestPasswordReset686818831b5d23888f1cd12f02c243c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/clients/password-reset/request'
*/
RequestPasswordReset686818831b5d23888f1cd12f02c243c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset686818831b5d23888f1cd12f02c243c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset686818831b5d23888f1cd12f02c243c9.form = RequestPasswordReset686818831b5d23888f1cd12f02c243c9Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
const RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url(options),
    method: 'get',
})

RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.definition = {
    methods: ["get","head"],
    url: '/nds/content/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
const RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/content/password-reset/request'
*/
RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901.form = RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
const RequestPasswordReset3d09751d300fb0f3fabe195a26394335 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url(options),
    method: 'get',
})

RequestPasswordReset3d09751d300fb0f3fabe195a26394335.definition = {
    methods: ["get","head"],
    url: '/nds/dev/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset3d09751d300fb0f3fabe195a26394335.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
RequestPasswordReset3d09751d300fb0f3fabe195a26394335.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
RequestPasswordReset3d09751d300fb0f3fabe195a26394335.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
const RequestPasswordReset3d09751d300fb0f3fabe195a26394335Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
RequestPasswordReset3d09751d300fb0f3fabe195a26394335Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dev/password-reset/request'
*/
RequestPasswordReset3d09751d300fb0f3fabe195a26394335Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3d09751d300fb0f3fabe195a26394335.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset3d09751d300fb0f3fabe195a26394335.form = RequestPasswordReset3d09751d300fb0f3fabe195a26394335Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
const RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url(options),
    method: 'get',
})

RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
const RequestPasswordReset822f3299fd0dc8de9dc69704f7179feeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
RequestPasswordReset822f3299fd0dc8de9dc69704f7179feeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/dialer/password-reset/request'
*/
RequestPasswordReset822f3299fd0dc8de9dc69704f7179feeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee.form = RequestPasswordReset822f3299fd0dc8de9dc69704f7179feeForm
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
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
const RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url(options),
    method: 'get',
})

RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.definition = {
    methods: ["get","head"],
    url: '/nds/finance/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
const RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/finance/password-reset/request'
*/
RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4.form = RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
const RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url(options),
    method: 'get',
})

RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.definition = {
    methods: ["get","head"],
    url: '/nds/locale/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
const RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/locale/password-reset/request'
*/
RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f.form = RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305fForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
const RequestPasswordReset35fd2c317dc012e3445632fcdee68819 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url(options),
    method: 'get',
})

RequestPasswordReset35fd2c317dc012e3445632fcdee68819.definition = {
    methods: ["get","head"],
    url: '/nds/manager/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset35fd2c317dc012e3445632fcdee68819.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
RequestPasswordReset35fd2c317dc012e3445632fcdee68819.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
RequestPasswordReset35fd2c317dc012e3445632fcdee68819.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
const RequestPasswordReset35fd2c317dc012e3445632fcdee68819Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
RequestPasswordReset35fd2c317dc012e3445632fcdee68819Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/manager/password-reset/request'
*/
RequestPasswordReset35fd2c317dc012e3445632fcdee68819Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset35fd2c317dc012e3445632fcdee68819.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset35fd2c317dc012e3445632fcdee68819.form = RequestPasswordReset35fd2c317dc012e3445632fcdee68819Form
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
* @route '/nds/oauth/password-reset/request'
*/
const RequestPasswordResetc130f402b41d7030616b411d361e9169 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetc130f402b41d7030616b411d361e9169.url(options),
    method: 'get',
})

RequestPasswordResetc130f402b41d7030616b411d361e9169.definition = {
    methods: ["get","head"],
    url: '/nds/oauth/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
RequestPasswordResetc130f402b41d7030616b411d361e9169.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetc130f402b41d7030616b411d361e9169.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
RequestPasswordResetc130f402b41d7030616b411d361e9169.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetc130f402b41d7030616b411d361e9169.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
RequestPasswordResetc130f402b41d7030616b411d361e9169.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetc130f402b41d7030616b411d361e9169.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
const RequestPasswordResetc130f402b41d7030616b411d361e9169Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc130f402b41d7030616b411d361e9169.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
RequestPasswordResetc130f402b41d7030616b411d361e9169Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc130f402b41d7030616b411d361e9169.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/oauth/password-reset/request'
*/
RequestPasswordResetc130f402b41d7030616b411d361e9169Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc130f402b41d7030616b411d361e9169.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetc130f402b41d7030616b411d361e9169.form = RequestPasswordResetc130f402b41d7030616b411d361e9169Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
const RequestPasswordReset1e21374e09db3a518360cd074144202c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset1e21374e09db3a518360cd074144202c.url(options),
    method: 'get',
})

RequestPasswordReset1e21374e09db3a518360cd074144202c.definition = {
    methods: ["get","head"],
    url: '/nds/partner/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
RequestPasswordReset1e21374e09db3a518360cd074144202c.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset1e21374e09db3a518360cd074144202c.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
RequestPasswordReset1e21374e09db3a518360cd074144202c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset1e21374e09db3a518360cd074144202c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
RequestPasswordReset1e21374e09db3a518360cd074144202c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset1e21374e09db3a518360cd074144202c.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
const RequestPasswordReset1e21374e09db3a518360cd074144202cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1e21374e09db3a518360cd074144202c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
RequestPasswordReset1e21374e09db3a518360cd074144202cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1e21374e09db3a518360cd074144202c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/partner/password-reset/request'
*/
RequestPasswordReset1e21374e09db3a518360cd074144202cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset1e21374e09db3a518360cd074144202c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset1e21374e09db3a518360cd074144202c.form = RequestPasswordReset1e21374e09db3a518360cd074144202cForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
const RequestPasswordReset6efc48a674731876282645e609f5483c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset6efc48a674731876282645e609f5483c.url(options),
    method: 'get',
})

RequestPasswordReset6efc48a674731876282645e609f5483c.definition = {
    methods: ["get","head"],
    url: '/nds/plugins/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
RequestPasswordReset6efc48a674731876282645e609f5483c.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset6efc48a674731876282645e609f5483c.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
RequestPasswordReset6efc48a674731876282645e609f5483c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset6efc48a674731876282645e609f5483c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
RequestPasswordReset6efc48a674731876282645e609f5483c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset6efc48a674731876282645e609f5483c.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
const RequestPasswordReset6efc48a674731876282645e609f5483cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset6efc48a674731876282645e609f5483c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
RequestPasswordReset6efc48a674731876282645e609f5483cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset6efc48a674731876282645e609f5483c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/plugins/password-reset/request'
*/
RequestPasswordReset6efc48a674731876282645e609f5483cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset6efc48a674731876282645e609f5483c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset6efc48a674731876282645e609f5483c.form = RequestPasswordReset6efc48a674731876282645e609f5483cForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
const RequestPasswordResetada9e012c33087deebaef6b0e0c01eec = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url(options),
    method: 'get',
})

RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.definition = {
    methods: ["get","head"],
    url: '/nds/private/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
const RequestPasswordResetada9e012c33087deebaef6b0e0c01eecForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
RequestPasswordResetada9e012c33087deebaef6b0e0c01eecForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/private/password-reset/request'
*/
RequestPasswordResetada9e012c33087deebaef6b0e0c01eecForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetada9e012c33087deebaef6b0e0c01eec.form = RequestPasswordResetada9e012c33087deebaef6b0e0c01eecForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
const RequestPasswordResetf89b6230c35156fa917a371d0508948f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url(options),
    method: 'get',
})

RequestPasswordResetf89b6230c35156fa917a371d0508948f.definition = {
    methods: ["get","head"],
    url: '/nds/product/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
RequestPasswordResetf89b6230c35156fa917a371d0508948f.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetf89b6230c35156fa917a371d0508948f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
RequestPasswordResetf89b6230c35156fa917a371d0508948f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
RequestPasswordResetf89b6230c35156fa917a371d0508948f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
const RequestPasswordResetf89b6230c35156fa917a371d0508948fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
RequestPasswordResetf89b6230c35156fa917a371d0508948fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/product/password-reset/request'
*/
RequestPasswordResetf89b6230c35156fa917a371d0508948fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf89b6230c35156fa917a371d0508948f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetf89b6230c35156fa917a371d0508948f.form = RequestPasswordResetf89b6230c35156fa917a371d0508948fForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
const RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url(options),
    method: 'get',
})

RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.definition = {
    methods: ["get","head"],
    url: '/nds/queue/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
const RequestPasswordResetf9a40958d80bbc89a86fe61967adeccbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
RequestPasswordResetf9a40958d80bbc89a86fe61967adeccbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/queue/password-reset/request'
*/
RequestPasswordResetf9a40958d80bbc89a86fe61967adeccbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb.form = RequestPasswordResetf9a40958d80bbc89a86fe61967adeccbForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
const RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url(options),
    method: 'get',
})

RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.definition = {
    methods: ["get","head"],
    url: '/nds/script/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
const RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/script/password-reset/request'
*/
RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623.form = RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
const RequestPasswordReseta5a5fb4550289ccec60c202da934c91c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url(options),
    method: 'get',
})

RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.definition = {
    methods: ["get","head"],
    url: '/nds/server/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
const RequestPasswordReseta5a5fb4550289ccec60c202da934c91cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
RequestPasswordReseta5a5fb4550289ccec60c202da934c91cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/server/password-reset/request'
*/
RequestPasswordReseta5a5fb4550289ccec60c202da934c91cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReseta5a5fb4550289ccec60c202da934c91c.form = RequestPasswordReseta5a5fb4550289ccec60c202da934c91cForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
const RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url(options),
    method: 'get',
})

RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.definition = {
    methods: ["get","head"],
    url: '/nds/service/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
const RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7dbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7dbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/service/password-reset/request'
*/
RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7dbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db.form = RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7dbForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
const RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url(options),
    method: 'get',
})

RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url = (options?: RouteQueryOptions) => {
    return RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
const RequestPasswordResetc48391e9f8bf06605652e5f6c4677ceaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
RequestPasswordResetc48391e9f8bf06605652e5f6c4677ceaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/sheets/password-reset/request'
*/
RequestPasswordResetc48391e9f8bf06605652e5f6c4677ceaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea.form = RequestPasswordResetc48391e9f8bf06605652e5f6c4677ceaForm
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
const RequestPasswordReset79f1780713d3438bc6e2cd3075002711 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url(options),
    method: 'get',
})

RequestPasswordReset79f1780713d3438bc6e2cd3075002711.definition = {
    methods: ["get","head"],
    url: '/nds/stats/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset79f1780713d3438bc6e2cd3075002711.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
RequestPasswordReset79f1780713d3438bc6e2cd3075002711.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
RequestPasswordReset79f1780713d3438bc6e2cd3075002711.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
const RequestPasswordReset79f1780713d3438bc6e2cd3075002711Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
RequestPasswordReset79f1780713d3438bc6e2cd3075002711Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/stats/password-reset/request'
*/
RequestPasswordReset79f1780713d3438bc6e2cd3075002711Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset79f1780713d3438bc6e2cd3075002711.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset79f1780713d3438bc6e2cd3075002711.form = RequestPasswordReset79f1780713d3438bc6e2cd3075002711Form
/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
const RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url(options),
    method: 'get',
})

RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.definition = {
    methods: ["get","head"],
    url: '/nds/storage/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
const RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/storage/password-reset/request'
*/
RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5.form = RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5Form
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
* @route '/nds/system/password-reset/request'
*/
const RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url(options),
    method: 'get',
})

RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.definition = {
    methods: ["get","head"],
    url: '/nds/system/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
const RequestPasswordReset2eb7fc8b0066709fccbf886b0349963fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
RequestPasswordReset2eb7fc8b0066709fccbf886b0349963fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/system/password-reset/request'
*/
RequestPasswordReset2eb7fc8b0066709fccbf886b0349963fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f.form = RequestPasswordReset2eb7fc8b0066709fccbf886b0349963fForm
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
* @route '/nds/user/password-reset/request'
*/
const RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url(options),
    method: 'get',
})

RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.definition = {
    methods: ["get","head"],
    url: '/nds/user/password-reset/request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url = (options?: RouteQueryOptions) => {
    return RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
const RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\RequestPasswordReset::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/RequestPasswordReset.php:7
* @route '/nds/user/password-reset/request'
*/
RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3.form = RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3Form

const RequestPasswordReset = {
    '/nds/admin/password-reset/request': RequestPasswordReset9d463bbeaac2273bf996213d78fa9be3,
    '/nds/app/password-reset/request': RequestPasswordResetb8fab1a77e24af051069c0cf486174c2,
    '/nds/calendar/password-reset/request': RequestPasswordReseta1dd228ed2a590121721e90f8b0fe32e,
    '/nds/chat/password-reset/request': RequestPasswordResetfc979a4e76dacd3d2ccac65f40e20683,
    '/nds/clients/password-reset/request': RequestPasswordReset686818831b5d23888f1cd12f02c243c9,
    '/nds/content/password-reset/request': RequestPasswordReset5880189e7afc20f2fadd81ebd6d29901,
    '/nds/dev/password-reset/request': RequestPasswordReset3d09751d300fb0f3fabe195a26394335,
    '/nds/dialer/password-reset/request': RequestPasswordReset822f3299fd0dc8de9dc69704f7179fee,
    '/nds/email/password-reset/request': RequestPasswordReset4877e4996ac524905fe2ddebabf3e0e8,
    '/nds/files/password-reset/request': RequestPasswordResetb6f5727c107c06567868987d63dde2b8,
    '/nds/finance/password-reset/request': RequestPasswordReset1fc2c4d5d687042ca37f877ac98f82e4,
    '/nds/locale/password-reset/request': RequestPasswordResetdfc93fc73c8b44336edf38ba7e89305f,
    '/nds/manager/password-reset/request': RequestPasswordReset35fd2c317dc012e3445632fcdee68819,
    '/nds/notify/password-reset/request': RequestPasswordReset21772b9a24a5182d2351a6498e67f31e,
    '/nds/oauth/password-reset/request': RequestPasswordResetc130f402b41d7030616b411d361e9169,
    '/nds/partner/password-reset/request': RequestPasswordReset1e21374e09db3a518360cd074144202c,
    '/nds/plugins/password-reset/request': RequestPasswordReset6efc48a674731876282645e609f5483c,
    '/nds/private/password-reset/request': RequestPasswordResetada9e012c33087deebaef6b0e0c01eec,
    '/nds/product/password-reset/request': RequestPasswordResetf89b6230c35156fa917a371d0508948f,
    '/nds/queue/password-reset/request': RequestPasswordResetf9a40958d80bbc89a86fe61967adeccb,
    '/nds/script/password-reset/request': RequestPasswordReset2075cdfbab50f7fe4d0752e7e73f0623,
    '/nds/server/password-reset/request': RequestPasswordReseta5a5fb4550289ccec60c202da934c91c,
    '/nds/service/password-reset/request': RequestPasswordResetfb4361b3c4f2d9dd52fd652861a3d7db,
    '/nds/sheets/password-reset/request': RequestPasswordResetc48391e9f8bf06605652e5f6c4677cea,
    '/nds/stats/password-reset/request': RequestPasswordReset79f1780713d3438bc6e2cd3075002711,
    '/nds/storage/password-reset/request': RequestPasswordReset3669cabdd5844fc9aec06a693bce3fa5,
    '/nds/super/password-reset/request': RequestPasswordResetda0cef5fad10c6f8a99d797c4ef8bacf,
    '/nds/system/password-reset/request': RequestPasswordReset2eb7fc8b0066709fccbf886b0349963f,
    '/nds/tools/password-reset/request': RequestPasswordReset3391f8564ea0c71fc32171d350efc90e,
    '/nds/user/password-reset/request': RequestPasswordReset59f8a24a70d21cf75506faf465cd19a3,
}

export default RequestPasswordReset