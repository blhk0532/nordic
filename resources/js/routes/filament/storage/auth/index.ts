import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import passwordReset from './password-reset'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/nds/storage/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/storage/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/storage/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/nds/storage/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/storage/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/storage/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/storage/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/storage/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

const auth = {
    login: Object.assign(login, login),
    passwordReset: Object.assign(passwordReset, passwordReset),
    logout: Object.assign(logout, logout),
}

export default auth