import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
const LockerScreen2af6eaf045511c32f91d156fc6601986 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreen2af6eaf045511c32f91d156fc6601986.url(options),
    method: 'get',
})

LockerScreen2af6eaf045511c32f91d156fc6601986.definition = {
    methods: ["get","head"],
    url: '/admin/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
LockerScreen2af6eaf045511c32f91d156fc6601986.url = (options?: RouteQueryOptions) => {
    return LockerScreen2af6eaf045511c32f91d156fc6601986.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
LockerScreen2af6eaf045511c32f91d156fc6601986.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreen2af6eaf045511c32f91d156fc6601986.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
LockerScreen2af6eaf045511c32f91d156fc6601986.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LockerScreen2af6eaf045511c32f91d156fc6601986.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
const LockerScreen2af6eaf045511c32f91d156fc6601986Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreen2af6eaf045511c32f91d156fc6601986.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
LockerScreen2af6eaf045511c32f91d156fc6601986Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreen2af6eaf045511c32f91d156fc6601986.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/admin/screen/lock'
*/
LockerScreen2af6eaf045511c32f91d156fc6601986Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreen2af6eaf045511c32f91d156fc6601986.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LockerScreen2af6eaf045511c32f91d156fc6601986.form = LockerScreen2af6eaf045511c32f91d156fc6601986Form
/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
const LockerScreenf345a146a4e91762684144e26da4c144 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenf345a146a4e91762684144e26da4c144.url(options),
    method: 'get',
})

LockerScreenf345a146a4e91762684144e26da4c144.definition = {
    methods: ["get","head"],
    url: '/nds/adm/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
LockerScreenf345a146a4e91762684144e26da4c144.url = (options?: RouteQueryOptions) => {
    return LockerScreenf345a146a4e91762684144e26da4c144.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
LockerScreenf345a146a4e91762684144e26da4c144.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenf345a146a4e91762684144e26da4c144.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
LockerScreenf345a146a4e91762684144e26da4c144.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LockerScreenf345a146a4e91762684144e26da4c144.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
const LockerScreenf345a146a4e91762684144e26da4c144Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf345a146a4e91762684144e26da4c144.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
LockerScreenf345a146a4e91762684144e26da4c144Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf345a146a4e91762684144e26da4c144.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/adm/screen/lock'
*/
LockerScreenf345a146a4e91762684144e26da4c144Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf345a146a4e91762684144e26da4c144.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LockerScreenf345a146a4e91762684144e26da4c144.form = LockerScreenf345a146a4e91762684144e26da4c144Form

const LockerScreen = {
    '/admin/screen/lock': LockerScreen2af6eaf045511c32f91d156fc6601986,
    '/nds/adm/screen/lock': LockerScreenf345a146a4e91762684144e26da4c144,
}

export default LockerScreen