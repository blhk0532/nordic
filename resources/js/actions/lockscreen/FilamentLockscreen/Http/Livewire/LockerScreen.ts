import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
const LockerScreenb1c6d77f32fea208353ad92a2931eade = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenb1c6d77f32fea208353ad92a2931eade.url(options),
    method: 'get',
})

LockerScreenb1c6d77f32fea208353ad92a2931eade.definition = {
    methods: ["get","head"],
    url: '/nds/admin/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
LockerScreenb1c6d77f32fea208353ad92a2931eade.url = (options?: RouteQueryOptions) => {
    return LockerScreenb1c6d77f32fea208353ad92a2931eade.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
LockerScreenb1c6d77f32fea208353ad92a2931eade.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenb1c6d77f32fea208353ad92a2931eade.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
LockerScreenb1c6d77f32fea208353ad92a2931eade.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LockerScreenb1c6d77f32fea208353ad92a2931eade.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
const LockerScreenb1c6d77f32fea208353ad92a2931eadeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenb1c6d77f32fea208353ad92a2931eade.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
LockerScreenb1c6d77f32fea208353ad92a2931eadeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenb1c6d77f32fea208353ad92a2931eade.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/admin/screen/lock'
*/
LockerScreenb1c6d77f32fea208353ad92a2931eadeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenb1c6d77f32fea208353ad92a2931eade.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LockerScreenb1c6d77f32fea208353ad92a2931eade.form = LockerScreenb1c6d77f32fea208353ad92a2931eadeForm
/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
const LockerScreenf2c8f56cc9febb63da7843379b08d472 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenf2c8f56cc9febb63da7843379b08d472.url(options),
    method: 'get',
})

LockerScreenf2c8f56cc9febb63da7843379b08d472.definition = {
    methods: ["get","head"],
    url: '/nds/super/screen/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
LockerScreenf2c8f56cc9febb63da7843379b08d472.url = (options?: RouteQueryOptions) => {
    return LockerScreenf2c8f56cc9febb63da7843379b08d472.definition.url + queryParams(options)
}

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
LockerScreenf2c8f56cc9febb63da7843379b08d472.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LockerScreenf2c8f56cc9febb63da7843379b08d472.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
LockerScreenf2c8f56cc9febb63da7843379b08d472.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LockerScreenf2c8f56cc9febb63da7843379b08d472.url(options),
    method: 'head',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
const LockerScreenf2c8f56cc9febb63da7843379b08d472Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf2c8f56cc9febb63da7843379b08d472.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
LockerScreenf2c8f56cc9febb63da7843379b08d472Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf2c8f56cc9febb63da7843379b08d472.url(options),
    method: 'get',
})

/**
* @see \lockscreen\FilamentLockscreen\Http\Livewire\LockerScreen::__invoke
* @see vendor/marjose123/filament-lockscreen/src/Http/Livewire/LockerScreen.php:7
* @route '/nds/super/screen/lock'
*/
LockerScreenf2c8f56cc9febb63da7843379b08d472Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LockerScreenf2c8f56cc9febb63da7843379b08d472.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LockerScreenf2c8f56cc9febb63da7843379b08d472.form = LockerScreenf2c8f56cc9febb63da7843379b08d472Form

const LockerScreen = {
    '/nds/admin/screen/lock': LockerScreenb1c6d77f32fea208353ad92a2931eade,
    '/nds/super/screen/lock': LockerScreenf2c8f56cc9febb63da7843379b08d472,
}

export default LockerScreen