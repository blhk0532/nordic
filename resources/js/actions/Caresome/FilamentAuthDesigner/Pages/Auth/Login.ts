import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
const Login40e9032fd8c53fc0d884663cfb39516d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login40e9032fd8c53fc0d884663cfb39516d.url(options),
    method: 'get',
})

Login40e9032fd8c53fc0d884663cfb39516d.definition = {
    methods: ["get","head"],
    url: '/nds/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
Login40e9032fd8c53fc0d884663cfb39516d.url = (options?: RouteQueryOptions) => {
    return Login40e9032fd8c53fc0d884663cfb39516d.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
Login40e9032fd8c53fc0d884663cfb39516d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login40e9032fd8c53fc0d884663cfb39516d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
Login40e9032fd8c53fc0d884663cfb39516d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login40e9032fd8c53fc0d884663cfb39516d.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
const Login40e9032fd8c53fc0d884663cfb39516dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login40e9032fd8c53fc0d884663cfb39516d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
Login40e9032fd8c53fc0d884663cfb39516dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login40e9032fd8c53fc0d884663cfb39516d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/admin/login'
*/
Login40e9032fd8c53fc0d884663cfb39516dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login40e9032fd8c53fc0d884663cfb39516d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login40e9032fd8c53fc0d884663cfb39516d.form = Login40e9032fd8c53fc0d884663cfb39516dForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
const Login3628b7c7cab1f5480a3d1a395a43a118 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

Login3628b7c7cab1f5480a3d1a395a43a118.definition = {
    methods: ["get","head"],
    url: '/nds/app/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.url = (options?: RouteQueryOptions) => {
    return Login3628b7c7cab1f5480a3d1a395a43a118.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
const Login3628b7c7cab1f5480a3d1a395a43a118Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login3628b7c7cab1f5480a3d1a395a43a118.form = Login3628b7c7cab1f5480a3d1a395a43a118Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
const Logine3d7702d5c92df86176fa7c716eaede9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

Logine3d7702d5c92df86176fa7c716eaede9.definition = {
    methods: ["get","head"],
    url: '/nds/booking/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.url = (options?: RouteQueryOptions) => {
    return Logine3d7702d5c92df86176fa7c716eaede9.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
const Logine3d7702d5c92df86176fa7c716eaede9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine3d7702d5c92df86176fa7c716eaede9.form = Logine3d7702d5c92df86176fa7c716eaede9Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
const Login2ab0ebebc9cd021cbf24c68c1b4259ad = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

Login2ab0ebebc9cd021cbf24c68c1b4259ad.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.url = (options?: RouteQueryOptions) => {
    return Login2ab0ebebc9cd021cbf24c68c1b4259ad.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
const Login2ab0ebebc9cd021cbf24c68c1b4259adForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259adForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259adForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login2ab0ebebc9cd021cbf24c68c1b4259ad.form = Login2ab0ebebc9cd021cbf24c68c1b4259adForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
const Logind5d11fdcc7fb4be97549d651efa630b6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

Logind5d11fdcc7fb4be97549d651efa630b6.definition = {
    methods: ["get","head"],
    url: '/nds/chat/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.url = (options?: RouteQueryOptions) => {
    return Logind5d11fdcc7fb4be97549d651efa630b6.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
const Logind5d11fdcc7fb4be97549d651efa630b6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logind5d11fdcc7fb4be97549d651efa630b6.form = Logind5d11fdcc7fb4be97549d651efa630b6Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
const Logina02b61f900f668fcb04d343bbedc413b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logina02b61f900f668fcb04d343bbedc413b.url(options),
    method: 'get',
})

Logina02b61f900f668fcb04d343bbedc413b.definition = {
    methods: ["get","head"],
    url: '/nds/clients/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
Logina02b61f900f668fcb04d343bbedc413b.url = (options?: RouteQueryOptions) => {
    return Logina02b61f900f668fcb04d343bbedc413b.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
Logina02b61f900f668fcb04d343bbedc413b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logina02b61f900f668fcb04d343bbedc413b.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
Logina02b61f900f668fcb04d343bbedc413b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logina02b61f900f668fcb04d343bbedc413b.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
const Logina02b61f900f668fcb04d343bbedc413bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logina02b61f900f668fcb04d343bbedc413b.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
Logina02b61f900f668fcb04d343bbedc413bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logina02b61f900f668fcb04d343bbedc413b.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/clients/login'
*/
Logina02b61f900f668fcb04d343bbedc413bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logina02b61f900f668fcb04d343bbedc413b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logina02b61f900f668fcb04d343bbedc413b.form = Logina02b61f900f668fcb04d343bbedc413bForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
const Login77cd9f434f84d3d58feb59856612c0ab = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login77cd9f434f84d3d58feb59856612c0ab.url(options),
    method: 'get',
})

Login77cd9f434f84d3d58feb59856612c0ab.definition = {
    methods: ["get","head"],
    url: '/nds/content/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
Login77cd9f434f84d3d58feb59856612c0ab.url = (options?: RouteQueryOptions) => {
    return Login77cd9f434f84d3d58feb59856612c0ab.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
Login77cd9f434f84d3d58feb59856612c0ab.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login77cd9f434f84d3d58feb59856612c0ab.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
Login77cd9f434f84d3d58feb59856612c0ab.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login77cd9f434f84d3d58feb59856612c0ab.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
const Login77cd9f434f84d3d58feb59856612c0abForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login77cd9f434f84d3d58feb59856612c0ab.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
Login77cd9f434f84d3d58feb59856612c0abForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login77cd9f434f84d3d58feb59856612c0ab.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/content/login'
*/
Login77cd9f434f84d3d58feb59856612c0abForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login77cd9f434f84d3d58feb59856612c0ab.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login77cd9f434f84d3d58feb59856612c0ab.form = Login77cd9f434f84d3d58feb59856612c0abForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
const Login407c09843fbe2eb8b5ad8f4dee555c64 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

Login407c09843fbe2eb8b5ad8f4dee555c64.definition = {
    methods: ["get","head"],
    url: '/nds/dev/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.url = (options?: RouteQueryOptions) => {
    return Login407c09843fbe2eb8b5ad8f4dee555c64.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
const Login407c09843fbe2eb8b5ad8f4dee555c64Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login407c09843fbe2eb8b5ad8f4dee555c64.form = Login407c09843fbe2eb8b5ad8f4dee555c64Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
const Login2bf36ab243bdfbbc3a6e27c11f17e5e2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url(options),
    method: 'get',
})

Login2bf36ab243bdfbbc3a6e27c11f17e5e2.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url = (options?: RouteQueryOptions) => {
    return Login2bf36ab243bdfbbc3a6e27c11f17e5e2.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
Login2bf36ab243bdfbbc3a6e27c11f17e5e2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
Login2bf36ab243bdfbbc3a6e27c11f17e5e2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
const Login2bf36ab243bdfbbc3a6e27c11f17e5e2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
Login2bf36ab243bdfbbc3a6e27c11f17e5e2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dialer/login'
*/
Login2bf36ab243bdfbbc3a6e27c11f17e5e2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2bf36ab243bdfbbc3a6e27c11f17e5e2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login2bf36ab243bdfbbc3a6e27c11f17e5e2.form = Login2bf36ab243bdfbbc3a6e27c11f17e5e2Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
const Loginaa235dba092b3c842df89bcd1401f1b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

Loginaa235dba092b3c842df89bcd1401f1b7.definition = {
    methods: ["get","head"],
    url: '/nds/email/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.url = (options?: RouteQueryOptions) => {
    return Loginaa235dba092b3c842df89bcd1401f1b7.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
const Loginaa235dba092b3c842df89bcd1401f1b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Loginaa235dba092b3c842df89bcd1401f1b7.form = Loginaa235dba092b3c842df89bcd1401f1b7Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
const Login89c01f6e90696715780cbf74fe3ddebe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

Login89c01f6e90696715780cbf74fe3ddebe.definition = {
    methods: ["get","head"],
    url: '/nds/files/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.url = (options?: RouteQueryOptions) => {
    return Login89c01f6e90696715780cbf74fe3ddebe.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
const Login89c01f6e90696715780cbf74fe3ddebeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login89c01f6e90696715780cbf74fe3ddebe.form = Login89c01f6e90696715780cbf74fe3ddebeForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
const Login5a3fedb0f45922ee47999b0a0d6c3fb2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url(options),
    method: 'get',
})

Login5a3fedb0f45922ee47999b0a0d6c3fb2.definition = {
    methods: ["get","head"],
    url: '/nds/finance/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
Login5a3fedb0f45922ee47999b0a0d6c3fb2.url = (options?: RouteQueryOptions) => {
    return Login5a3fedb0f45922ee47999b0a0d6c3fb2.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
Login5a3fedb0f45922ee47999b0a0d6c3fb2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
Login5a3fedb0f45922ee47999b0a0d6c3fb2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
const Login5a3fedb0f45922ee47999b0a0d6c3fb2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
Login5a3fedb0f45922ee47999b0a0d6c3fb2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/finance/login'
*/
Login5a3fedb0f45922ee47999b0a0d6c3fb2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5a3fedb0f45922ee47999b0a0d6c3fb2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login5a3fedb0f45922ee47999b0a0d6c3fb2.form = Login5a3fedb0f45922ee47999b0a0d6c3fb2Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
const Loginab9484dcc9909721ff7ae8c82b2b080c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginab9484dcc9909721ff7ae8c82b2b080c.url(options),
    method: 'get',
})

Loginab9484dcc9909721ff7ae8c82b2b080c.definition = {
    methods: ["get","head"],
    url: '/nds/locale/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
Loginab9484dcc9909721ff7ae8c82b2b080c.url = (options?: RouteQueryOptions) => {
    return Loginab9484dcc9909721ff7ae8c82b2b080c.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
Loginab9484dcc9909721ff7ae8c82b2b080c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginab9484dcc9909721ff7ae8c82b2b080c.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
Loginab9484dcc9909721ff7ae8c82b2b080c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginab9484dcc9909721ff7ae8c82b2b080c.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
const Loginab9484dcc9909721ff7ae8c82b2b080cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginab9484dcc9909721ff7ae8c82b2b080c.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
Loginab9484dcc9909721ff7ae8c82b2b080cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginab9484dcc9909721ff7ae8c82b2b080c.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/locale/login'
*/
Loginab9484dcc9909721ff7ae8c82b2b080cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginab9484dcc9909721ff7ae8c82b2b080c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Loginab9484dcc9909721ff7ae8c82b2b080c.form = Loginab9484dcc9909721ff7ae8c82b2b080cForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
const Login43a7e3183ae7636bd0d320fdeccdac90 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login43a7e3183ae7636bd0d320fdeccdac90.url(options),
    method: 'get',
})

Login43a7e3183ae7636bd0d320fdeccdac90.definition = {
    methods: ["get","head"],
    url: '/nds/manager/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
Login43a7e3183ae7636bd0d320fdeccdac90.url = (options?: RouteQueryOptions) => {
    return Login43a7e3183ae7636bd0d320fdeccdac90.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
Login43a7e3183ae7636bd0d320fdeccdac90.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login43a7e3183ae7636bd0d320fdeccdac90.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
Login43a7e3183ae7636bd0d320fdeccdac90.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login43a7e3183ae7636bd0d320fdeccdac90.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
const Login43a7e3183ae7636bd0d320fdeccdac90Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login43a7e3183ae7636bd0d320fdeccdac90.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
Login43a7e3183ae7636bd0d320fdeccdac90Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login43a7e3183ae7636bd0d320fdeccdac90.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/manager/login'
*/
Login43a7e3183ae7636bd0d320fdeccdac90Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login43a7e3183ae7636bd0d320fdeccdac90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login43a7e3183ae7636bd0d320fdeccdac90.form = Login43a7e3183ae7636bd0d320fdeccdac90Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
const Logincef8af70fbb617f49064eae4ba18b592 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

Logincef8af70fbb617f49064eae4ba18b592.definition = {
    methods: ["get","head"],
    url: '/nds/notify/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.url = (options?: RouteQueryOptions) => {
    return Logincef8af70fbb617f49064eae4ba18b592.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
const Logincef8af70fbb617f49064eae4ba18b592Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logincef8af70fbb617f49064eae4ba18b592.form = Logincef8af70fbb617f49064eae4ba18b592Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
const Login5d6342de7e7c5473a706f851c1dbd3a9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5d6342de7e7c5473a706f851c1dbd3a9.url(options),
    method: 'get',
})

Login5d6342de7e7c5473a706f851c1dbd3a9.definition = {
    methods: ["get","head"],
    url: '/nds/oauth/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
Login5d6342de7e7c5473a706f851c1dbd3a9.url = (options?: RouteQueryOptions) => {
    return Login5d6342de7e7c5473a706f851c1dbd3a9.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
Login5d6342de7e7c5473a706f851c1dbd3a9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5d6342de7e7c5473a706f851c1dbd3a9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
Login5d6342de7e7c5473a706f851c1dbd3a9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login5d6342de7e7c5473a706f851c1dbd3a9.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
const Login5d6342de7e7c5473a706f851c1dbd3a9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5d6342de7e7c5473a706f851c1dbd3a9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
Login5d6342de7e7c5473a706f851c1dbd3a9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5d6342de7e7c5473a706f851c1dbd3a9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/oauth/login'
*/
Login5d6342de7e7c5473a706f851c1dbd3a9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5d6342de7e7c5473a706f851c1dbd3a9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login5d6342de7e7c5473a706f851c1dbd3a9.form = Login5d6342de7e7c5473a706f851c1dbd3a9Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
const Login292425fab84c20624163db1fd8f94938 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login292425fab84c20624163db1fd8f94938.url(options),
    method: 'get',
})

Login292425fab84c20624163db1fd8f94938.definition = {
    methods: ["get","head"],
    url: '/nds/partner/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
Login292425fab84c20624163db1fd8f94938.url = (options?: RouteQueryOptions) => {
    return Login292425fab84c20624163db1fd8f94938.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
Login292425fab84c20624163db1fd8f94938.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login292425fab84c20624163db1fd8f94938.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
Login292425fab84c20624163db1fd8f94938.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login292425fab84c20624163db1fd8f94938.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
const Login292425fab84c20624163db1fd8f94938Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login292425fab84c20624163db1fd8f94938.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
Login292425fab84c20624163db1fd8f94938Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login292425fab84c20624163db1fd8f94938.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/partner/login'
*/
Login292425fab84c20624163db1fd8f94938Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login292425fab84c20624163db1fd8f94938.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login292425fab84c20624163db1fd8f94938.form = Login292425fab84c20624163db1fd8f94938Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
const Login94ac2a14f85e735fae85367cdd9d7a41 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login94ac2a14f85e735fae85367cdd9d7a41.url(options),
    method: 'get',
})

Login94ac2a14f85e735fae85367cdd9d7a41.definition = {
    methods: ["get","head"],
    url: '/nds/plugins/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
Login94ac2a14f85e735fae85367cdd9d7a41.url = (options?: RouteQueryOptions) => {
    return Login94ac2a14f85e735fae85367cdd9d7a41.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
Login94ac2a14f85e735fae85367cdd9d7a41.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login94ac2a14f85e735fae85367cdd9d7a41.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
Login94ac2a14f85e735fae85367cdd9d7a41.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login94ac2a14f85e735fae85367cdd9d7a41.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
const Login94ac2a14f85e735fae85367cdd9d7a41Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login94ac2a14f85e735fae85367cdd9d7a41.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
Login94ac2a14f85e735fae85367cdd9d7a41Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login94ac2a14f85e735fae85367cdd9d7a41.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/plugins/login'
*/
Login94ac2a14f85e735fae85367cdd9d7a41Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login94ac2a14f85e735fae85367cdd9d7a41.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login94ac2a14f85e735fae85367cdd9d7a41.form = Login94ac2a14f85e735fae85367cdd9d7a41Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
const Logine11ed0ce07ac237b0f6f9bcb98591cd6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url(options),
    method: 'get',
})

Logine11ed0ce07ac237b0f6f9bcb98591cd6.definition = {
    methods: ["get","head"],
    url: '/nds/private/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
Logine11ed0ce07ac237b0f6f9bcb98591cd6.url = (options?: RouteQueryOptions) => {
    return Logine11ed0ce07ac237b0f6f9bcb98591cd6.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
Logine11ed0ce07ac237b0f6f9bcb98591cd6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
Logine11ed0ce07ac237b0f6f9bcb98591cd6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
const Logine11ed0ce07ac237b0f6f9bcb98591cd6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
Logine11ed0ce07ac237b0f6f9bcb98591cd6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/private/login'
*/
Logine11ed0ce07ac237b0f6f9bcb98591cd6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine11ed0ce07ac237b0f6f9bcb98591cd6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine11ed0ce07ac237b0f6f9bcb98591cd6.form = Logine11ed0ce07ac237b0f6f9bcb98591cd6Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
const Login3cfea4902d3e786dc7dc7760dd5b41d8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3cfea4902d3e786dc7dc7760dd5b41d8.url(options),
    method: 'get',
})

Login3cfea4902d3e786dc7dc7760dd5b41d8.definition = {
    methods: ["get","head"],
    url: '/nds/product/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
Login3cfea4902d3e786dc7dc7760dd5b41d8.url = (options?: RouteQueryOptions) => {
    return Login3cfea4902d3e786dc7dc7760dd5b41d8.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
Login3cfea4902d3e786dc7dc7760dd5b41d8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3cfea4902d3e786dc7dc7760dd5b41d8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
Login3cfea4902d3e786dc7dc7760dd5b41d8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login3cfea4902d3e786dc7dc7760dd5b41d8.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
const Login3cfea4902d3e786dc7dc7760dd5b41d8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3cfea4902d3e786dc7dc7760dd5b41d8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
Login3cfea4902d3e786dc7dc7760dd5b41d8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3cfea4902d3e786dc7dc7760dd5b41d8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/product/login'
*/
Login3cfea4902d3e786dc7dc7760dd5b41d8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3cfea4902d3e786dc7dc7760dd5b41d8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login3cfea4902d3e786dc7dc7760dd5b41d8.form = Login3cfea4902d3e786dc7dc7760dd5b41d8Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
const Login8c281e0f558569877a70e1beb5823d0a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

Login8c281e0f558569877a70e1beb5823d0a.definition = {
    methods: ["get","head"],
    url: '/nds/queue/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.url = (options?: RouteQueryOptions) => {
    return Login8c281e0f558569877a70e1beb5823d0a.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
const Login8c281e0f558569877a70e1beb5823d0aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login8c281e0f558569877a70e1beb5823d0a.form = Login8c281e0f558569877a70e1beb5823d0aForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
const Login36dbcf06cabb63612e057fb9778e55ba = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login36dbcf06cabb63612e057fb9778e55ba.url(options),
    method: 'get',
})

Login36dbcf06cabb63612e057fb9778e55ba.definition = {
    methods: ["get","head"],
    url: '/nds/script/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
Login36dbcf06cabb63612e057fb9778e55ba.url = (options?: RouteQueryOptions) => {
    return Login36dbcf06cabb63612e057fb9778e55ba.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
Login36dbcf06cabb63612e057fb9778e55ba.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login36dbcf06cabb63612e057fb9778e55ba.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
Login36dbcf06cabb63612e057fb9778e55ba.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login36dbcf06cabb63612e057fb9778e55ba.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
const Login36dbcf06cabb63612e057fb9778e55baForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login36dbcf06cabb63612e057fb9778e55ba.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
Login36dbcf06cabb63612e057fb9778e55baForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login36dbcf06cabb63612e057fb9778e55ba.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/script/login'
*/
Login36dbcf06cabb63612e057fb9778e55baForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login36dbcf06cabb63612e057fb9778e55ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login36dbcf06cabb63612e057fb9778e55ba.form = Login36dbcf06cabb63612e057fb9778e55baForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
const Login4e2e952f52b17319181c1503c1559dc5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login4e2e952f52b17319181c1503c1559dc5.url(options),
    method: 'get',
})

Login4e2e952f52b17319181c1503c1559dc5.definition = {
    methods: ["get","head"],
    url: '/nds/server/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
Login4e2e952f52b17319181c1503c1559dc5.url = (options?: RouteQueryOptions) => {
    return Login4e2e952f52b17319181c1503c1559dc5.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
Login4e2e952f52b17319181c1503c1559dc5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login4e2e952f52b17319181c1503c1559dc5.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
Login4e2e952f52b17319181c1503c1559dc5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login4e2e952f52b17319181c1503c1559dc5.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
const Login4e2e952f52b17319181c1503c1559dc5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login4e2e952f52b17319181c1503c1559dc5.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
Login4e2e952f52b17319181c1503c1559dc5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login4e2e952f52b17319181c1503c1559dc5.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/server/login'
*/
Login4e2e952f52b17319181c1503c1559dc5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login4e2e952f52b17319181c1503c1559dc5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login4e2e952f52b17319181c1503c1559dc5.form = Login4e2e952f52b17319181c1503c1559dc5Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
const Logine58093b6a682687d1813638efc99a1ea = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine58093b6a682687d1813638efc99a1ea.url(options),
    method: 'get',
})

Logine58093b6a682687d1813638efc99a1ea.definition = {
    methods: ["get","head"],
    url: '/nds/service/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
Logine58093b6a682687d1813638efc99a1ea.url = (options?: RouteQueryOptions) => {
    return Logine58093b6a682687d1813638efc99a1ea.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
Logine58093b6a682687d1813638efc99a1ea.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine58093b6a682687d1813638efc99a1ea.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
Logine58093b6a682687d1813638efc99a1ea.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine58093b6a682687d1813638efc99a1ea.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
const Logine58093b6a682687d1813638efc99a1eaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine58093b6a682687d1813638efc99a1ea.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
Logine58093b6a682687d1813638efc99a1eaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine58093b6a682687d1813638efc99a1ea.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/service/login'
*/
Logine58093b6a682687d1813638efc99a1eaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine58093b6a682687d1813638efc99a1ea.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine58093b6a682687d1813638efc99a1ea.form = Logine58093b6a682687d1813638efc99a1eaForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
const Logincc908f278d1c610d4a461127bde1d723 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincc908f278d1c610d4a461127bde1d723.url(options),
    method: 'get',
})

Logincc908f278d1c610d4a461127bde1d723.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
Logincc908f278d1c610d4a461127bde1d723.url = (options?: RouteQueryOptions) => {
    return Logincc908f278d1c610d4a461127bde1d723.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
Logincc908f278d1c610d4a461127bde1d723.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincc908f278d1c610d4a461127bde1d723.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
Logincc908f278d1c610d4a461127bde1d723.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logincc908f278d1c610d4a461127bde1d723.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
const Logincc908f278d1c610d4a461127bde1d723Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincc908f278d1c610d4a461127bde1d723.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
Logincc908f278d1c610d4a461127bde1d723Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincc908f278d1c610d4a461127bde1d723.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/sheets/login'
*/
Logincc908f278d1c610d4a461127bde1d723Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincc908f278d1c610d4a461127bde1d723.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logincc908f278d1c610d4a461127bde1d723.form = Logincc908f278d1c610d4a461127bde1d723Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
const Login830bc7caf86e749e682c5d24f658bef2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login830bc7caf86e749e682c5d24f658bef2.url(options),
    method: 'get',
})

Login830bc7caf86e749e682c5d24f658bef2.definition = {
    methods: ["get","head"],
    url: '/nds/stats/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
Login830bc7caf86e749e682c5d24f658bef2.url = (options?: RouteQueryOptions) => {
    return Login830bc7caf86e749e682c5d24f658bef2.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
Login830bc7caf86e749e682c5d24f658bef2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login830bc7caf86e749e682c5d24f658bef2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
Login830bc7caf86e749e682c5d24f658bef2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login830bc7caf86e749e682c5d24f658bef2.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
const Login830bc7caf86e749e682c5d24f658bef2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login830bc7caf86e749e682c5d24f658bef2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
Login830bc7caf86e749e682c5d24f658bef2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login830bc7caf86e749e682c5d24f658bef2.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/stats/login'
*/
Login830bc7caf86e749e682c5d24f658bef2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login830bc7caf86e749e682c5d24f658bef2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login830bc7caf86e749e682c5d24f658bef2.form = Login830bc7caf86e749e682c5d24f658bef2Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
const Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url(options),
    method: 'get',
})

Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.definition = {
    methods: ["get","head"],
    url: '/nds/storage/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url = (options?: RouteQueryOptions) => {
    return Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
const Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7.form = Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
const Logine984e9f0c831b3e9b0cdf1ba2d7d3a65 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.definition = {
    methods: ["get","head"],
    url: '/nds/super/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url = (options?: RouteQueryOptions) => {
    return Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
const Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.form = Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
const Login3b35ff4e2ad06361d2b6341e42b3e79d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3b35ff4e2ad06361d2b6341e42b3e79d.url(options),
    method: 'get',
})

Login3b35ff4e2ad06361d2b6341e42b3e79d.definition = {
    methods: ["get","head"],
    url: '/nds/system/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
Login3b35ff4e2ad06361d2b6341e42b3e79d.url = (options?: RouteQueryOptions) => {
    return Login3b35ff4e2ad06361d2b6341e42b3e79d.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
Login3b35ff4e2ad06361d2b6341e42b3e79d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3b35ff4e2ad06361d2b6341e42b3e79d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
Login3b35ff4e2ad06361d2b6341e42b3e79d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login3b35ff4e2ad06361d2b6341e42b3e79d.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
const Login3b35ff4e2ad06361d2b6341e42b3e79dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3b35ff4e2ad06361d2b6341e42b3e79d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
Login3b35ff4e2ad06361d2b6341e42b3e79dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3b35ff4e2ad06361d2b6341e42b3e79d.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/system/login'
*/
Login3b35ff4e2ad06361d2b6341e42b3e79dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3b35ff4e2ad06361d2b6341e42b3e79d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login3b35ff4e2ad06361d2b6341e42b3e79d.form = Login3b35ff4e2ad06361d2b6341e42b3e79dForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
const Login63a3562f0c6506fb1dbb47d26a527007 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

Login63a3562f0c6506fb1dbb47d26a527007.definition = {
    methods: ["get","head"],
    url: '/nds/tools/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.url = (options?: RouteQueryOptions) => {
    return Login63a3562f0c6506fb1dbb47d26a527007.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
const Login63a3562f0c6506fb1dbb47d26a527007Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login63a3562f0c6506fb1dbb47d26a527007.form = Login63a3562f0c6506fb1dbb47d26a527007Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
const Loginf4e3d89239ea8995201ce57e938ab2ac = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf4e3d89239ea8995201ce57e938ab2ac.url(options),
    method: 'get',
})

Loginf4e3d89239ea8995201ce57e938ab2ac.definition = {
    methods: ["get","head"],
    url: '/nds/user/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
Loginf4e3d89239ea8995201ce57e938ab2ac.url = (options?: RouteQueryOptions) => {
    return Loginf4e3d89239ea8995201ce57e938ab2ac.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
Loginf4e3d89239ea8995201ce57e938ab2ac.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf4e3d89239ea8995201ce57e938ab2ac.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
Loginf4e3d89239ea8995201ce57e938ab2ac.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginf4e3d89239ea8995201ce57e938ab2ac.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
const Loginf4e3d89239ea8995201ce57e938ab2acForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginf4e3d89239ea8995201ce57e938ab2ac.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
Loginf4e3d89239ea8995201ce57e938ab2acForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginf4e3d89239ea8995201ce57e938ab2ac.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/user/login'
*/
Loginf4e3d89239ea8995201ce57e938ab2acForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginf4e3d89239ea8995201ce57e938ab2ac.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Loginf4e3d89239ea8995201ce57e938ab2ac.form = Loginf4e3d89239ea8995201ce57e938ab2acForm

const Login = {
    '/nds/admin/login': Login40e9032fd8c53fc0d884663cfb39516d,
    '/nds/app/login': Login3628b7c7cab1f5480a3d1a395a43a118,
    '/nds/booking/login': Logine3d7702d5c92df86176fa7c716eaede9,
    '/nds/calendar/login': Login2ab0ebebc9cd021cbf24c68c1b4259ad,
    '/nds/chat/login': Logind5d11fdcc7fb4be97549d651efa630b6,
    '/nds/clients/login': Logina02b61f900f668fcb04d343bbedc413b,
    '/nds/content/login': Login77cd9f434f84d3d58feb59856612c0ab,
    '/nds/dev/login': Login407c09843fbe2eb8b5ad8f4dee555c64,
    '/nds/dialer/login': Login2bf36ab243bdfbbc3a6e27c11f17e5e2,
    '/nds/email/login': Loginaa235dba092b3c842df89bcd1401f1b7,
    '/nds/files/login': Login89c01f6e90696715780cbf74fe3ddebe,
    '/nds/finance/login': Login5a3fedb0f45922ee47999b0a0d6c3fb2,
    '/nds/locale/login': Loginab9484dcc9909721ff7ae8c82b2b080c,
    '/nds/manager/login': Login43a7e3183ae7636bd0d320fdeccdac90,
    '/nds/notify/login': Logincef8af70fbb617f49064eae4ba18b592,
    '/nds/oauth/login': Login5d6342de7e7c5473a706f851c1dbd3a9,
    '/nds/partner/login': Login292425fab84c20624163db1fd8f94938,
    '/nds/plugins/login': Login94ac2a14f85e735fae85367cdd9d7a41,
    '/nds/private/login': Logine11ed0ce07ac237b0f6f9bcb98591cd6,
    '/nds/product/login': Login3cfea4902d3e786dc7dc7760dd5b41d8,
    '/nds/queue/login': Login8c281e0f558569877a70e1beb5823d0a,
    '/nds/script/login': Login36dbcf06cabb63612e057fb9778e55ba,
    '/nds/server/login': Login4e2e952f52b17319181c1503c1559dc5,
    '/nds/service/login': Logine58093b6a682687d1813638efc99a1ea,
    '/nds/sheets/login': Logincc908f278d1c610d4a461127bde1d723,
    '/nds/stats/login': Login830bc7caf86e749e682c5d24f658bef2,
    '/nds/storage/login': Loginc4f9bd89f0c34ecc6846a36fcb7f7fa7,
    '/nds/super/login': Logine984e9f0c831b3e9b0cdf1ba2d7d3a65,
    '/nds/system/login': Login3b35ff4e2ad06361d2b6341e42b3e79d,
    '/nds/tools/login': Login63a3562f0c6506fb1dbb47d26a527007,
    '/nds/user/login': Loginf4e3d89239ea8995201ce57e938ab2ac,
}

export default Login