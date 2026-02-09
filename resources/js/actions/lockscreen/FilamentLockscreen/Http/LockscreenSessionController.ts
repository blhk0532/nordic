import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
const lockSession9101e8e937ff331ad6e5c840c310e3db = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

lockSession9101e8e937ff331ad6e5c840c310e3db.definition = {
    methods: ["post"],
    url: '/admin/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3db.url = (options?: RouteQueryOptions) => {
    return lockSession9101e8e937ff331ad6e5c840c310e3db.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3db.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
const lockSession9101e8e937ff331ad6e5c840c310e3dbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/admin/lock-session'
*/
lockSession9101e8e937ff331ad6e5c840c310e3dbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession9101e8e937ff331ad6e5c840c310e3db.url(options),
    method: 'post',
})

lockSession9101e8e937ff331ad6e5c840c310e3db.form = lockSession9101e8e937ff331ad6e5c840c310e3dbForm
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
const lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.url(options),
    method: 'post',
})

lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.definition = {
    methods: ["post"],
    url: '/nds/adm/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.url = (options?: RouteQueryOptions) => {
    return lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
const lockSession6ba1f349a5edc76a36f1f0fdd3a6a85bForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSession6ba1f349a5edc76a36f1f0fdd3a6a85bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.url(options),
    method: 'post',
})

lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b.form = lockSession6ba1f349a5edc76a36f1f0fdd3a6a85bForm

export const lockSession = {
    '/admin/lock-session': lockSession9101e8e937ff331ad6e5c840c310e3db,
    '/nds/adm/lock-session': lockSession6ba1f349a5edc76a36f1f0fdd3a6a85b,
}

const LockscreenSessionController = { lockSession }

export default LockscreenSessionController