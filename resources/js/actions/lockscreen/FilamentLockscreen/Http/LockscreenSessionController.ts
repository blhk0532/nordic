import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/admin/lock-session'
*/
const lockSession199a4160303fa4f49c2ea29588167f89 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession199a4160303fa4f49c2ea29588167f89.url(options),
    method: 'post',
})

lockSession199a4160303fa4f49c2ea29588167f89.definition = {
    methods: ["post"],
    url: '/nds/admin/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/admin/lock-session'
*/
lockSession199a4160303fa4f49c2ea29588167f89.url = (options?: RouteQueryOptions) => {
    return lockSession199a4160303fa4f49c2ea29588167f89.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/admin/lock-session'
*/
lockSession199a4160303fa4f49c2ea29588167f89.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession199a4160303fa4f49c2ea29588167f89.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/admin/lock-session'
*/
const lockSession199a4160303fa4f49c2ea29588167f89Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession199a4160303fa4f49c2ea29588167f89.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/admin/lock-session'
*/
lockSession199a4160303fa4f49c2ea29588167f89Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession199a4160303fa4f49c2ea29588167f89.url(options),
    method: 'post',
})

lockSession199a4160303fa4f49c2ea29588167f89.form = lockSession199a4160303fa4f49c2ea29588167f89Form
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
const lockSessiondfba708ed98b7b3dc5b78db3439fb911 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

lockSessiondfba708ed98b7b3dc5b78db3439fb911.definition = {
    methods: ["post"],
    url: '/nds/super/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911.url = (options?: RouteQueryOptions) => {
    return lockSessiondfba708ed98b7b3dc5b78db3439fb911.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
const lockSessiondfba708ed98b7b3dc5b78db3439fb911Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/super/lock-session'
*/
lockSessiondfba708ed98b7b3dc5b78db3439fb911Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSessiondfba708ed98b7b3dc5b78db3439fb911.url(options),
    method: 'post',
})

lockSessiondfba708ed98b7b3dc5b78db3439fb911.form = lockSessiondfba708ed98b7b3dc5b78db3439fb911Form

export const lockSession = {
    '/nds/admin/lock-session': lockSession199a4160303fa4f49c2ea29588167f89,
    '/nds/super/lock-session': lockSessiondfba708ed98b7b3dc5b78db3439fb911,
}

const LockscreenSessionController = { lockSession }

export default LockscreenSessionController