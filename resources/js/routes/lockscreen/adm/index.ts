import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
export const lockSession = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

lockSession.definition = {
    methods: ["post"],
    url: '/nds/adm/lock-session',
} satisfies RouteDefinition<["post"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSession.url = (options?: RouteQueryOptions) => {
    return lockSession.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSession.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
const lockSessionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\LockscreenSessionController::lockSession
* @see vendor/marjose123/filament-lockscreen/src/Http/LockscreenSessionController.php:14
* @route '/nds/adm/lock-session'
*/
lockSessionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: lockSession.url(options),
    method: 'post',
})

lockSession.form = lockSessionForm

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
export const page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/nds/adm/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
page.url = (options?: RouteQueryOptions) => {
    return page.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
const pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
pageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: page.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

page.form = pageForm

const adm = {
    lockSession: Object.assign(lockSession, lockSession),
    page: Object.assign(page, page),
}

export default adm