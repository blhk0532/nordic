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

const Login = {
    '/nds/adm/login': Login5cacbc5c3dad06975424a9bdc99ac737,
    '/nds/app/login': Login3628b7c7cab1f5480a3d1a395a43a118,
}

export default Login