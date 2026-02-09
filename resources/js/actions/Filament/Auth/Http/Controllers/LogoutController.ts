import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
const LogoutController0bf9725898bf54069779505e96ede62a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

LogoutController0bf9725898bf54069779505e96ede62a.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
LogoutController0bf9725898bf54069779505e96ede62a.url = (options?: RouteQueryOptions) => {
    return LogoutController0bf9725898bf54069779505e96ede62a.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
LogoutController0bf9725898bf54069779505e96ede62a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
const LogoutController0bf9725898bf54069779505e96ede62aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
LogoutController0bf9725898bf54069779505e96ede62aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

LogoutController0bf9725898bf54069779505e96ede62a.form = LogoutController0bf9725898bf54069779505e96ede62aForm
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/adm/logout'
*/
const LogoutController2b04e35eda79e1673a4c6ffa77b610e3 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController2b04e35eda79e1673a4c6ffa77b610e3.url(options),
    method: 'post',
})

LogoutController2b04e35eda79e1673a4c6ffa77b610e3.definition = {
    methods: ["post"],
    url: '/nds/adm/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/adm/logout'
*/
LogoutController2b04e35eda79e1673a4c6ffa77b610e3.url = (options?: RouteQueryOptions) => {
    return LogoutController2b04e35eda79e1673a4c6ffa77b610e3.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/adm/logout'
*/
LogoutController2b04e35eda79e1673a4c6ffa77b610e3.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController2b04e35eda79e1673a4c6ffa77b610e3.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/adm/logout'
*/
const LogoutController2b04e35eda79e1673a4c6ffa77b610e3Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutController2b04e35eda79e1673a4c6ffa77b610e3.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/adm/logout'
*/
LogoutController2b04e35eda79e1673a4c6ffa77b610e3Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutController2b04e35eda79e1673a4c6ffa77b610e3.url(options),
    method: 'post',
})

LogoutController2b04e35eda79e1673a4c6ffa77b610e3.form = LogoutController2b04e35eda79e1673a4c6ffa77b610e3Form
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/app/logout'
*/
const LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.url(options),
    method: 'post',
})

LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.definition = {
    methods: ["post"],
    url: '/nds/app/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/app/logout'
*/
LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.url = (options?: RouteQueryOptions) => {
    return LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/app/logout'
*/
LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/app/logout'
*/
const LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.url(options),
    method: 'post',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/nds/app/logout'
*/
LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.url(options),
    method: 'post',
})

LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0.form = LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0Form

const LogoutController = {
    '/admin/logout': LogoutController0bf9725898bf54069779505e96ede62a,
    '/nds/adm/logout': LogoutController2b04e35eda79e1673a4c6ffa77b610e3,
    '/nds/app/logout': LogoutControllerf5fce2ca4f895b01c2e14b2b095e24e0,
}

export default LogoutController