import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
const Login5cacbc5c3dad06975424a9bdc99ac737 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5cacbc5c3dad06975424a9bdc99ac737.url(options),
    method: 'get',
})

Login5cacbc5c3dad06975424a9bdc99ac737.definition = {
    methods: ["get","head"],
    url: '/nds/adm/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
Login5cacbc5c3dad06975424a9bdc99ac737.url = (options?: RouteQueryOptions) => {
    return Login5cacbc5c3dad06975424a9bdc99ac737.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
Login5cacbc5c3dad06975424a9bdc99ac737.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login5cacbc5c3dad06975424a9bdc99ac737.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
Login5cacbc5c3dad06975424a9bdc99ac737.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login5cacbc5c3dad06975424a9bdc99ac737.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
const Login5cacbc5c3dad06975424a9bdc99ac737Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5cacbc5c3dad06975424a9bdc99ac737.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
Login5cacbc5c3dad06975424a9bdc99ac737Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5cacbc5c3dad06975424a9bdc99ac737.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/adm/login'
*/
Login5cacbc5c3dad06975424a9bdc99ac737Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login5cacbc5c3dad06975424a9bdc99ac737.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login5cacbc5c3dad06975424a9bdc99ac737.form = Login5cacbc5c3dad06975424a9bdc99ac737Form
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

const Login = {
    '/nds/adm/login': Login5cacbc5c3dad06975424a9bdc99ac737,
    '/nds/app/login': Login3628b7c7cab1f5480a3d1a395a43a118,
    '/nds/chat/login': Logind5d11fdcc7fb4be97549d651efa630b6,
    '/nds/notify/login': Logincef8af70fbb617f49064eae4ba18b592,
    '/nds/tools/login': Login63a3562f0c6506fb1dbb47d26a527007,
    '/nds/super/login': Logine984e9f0c831b3e9b0cdf1ba2d7d3a65,
}

export default Login