import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
const StorageDashboard5e1554fd66eaa8d00f842ae946413cf3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url(options),
    method: 'get',
})

StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.definition = {
    methods: ["get","head"],
    url: '/nds/script',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url = (options?: RouteQueryOptions) => {
    return StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
const StorageDashboard5e1554fd66eaa8d00f842ae946413cf3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
StorageDashboard5e1554fd66eaa8d00f842ae946413cf3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/script'
*/
StorageDashboard5e1554fd66eaa8d00f842ae946413cf3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StorageDashboard5e1554fd66eaa8d00f842ae946413cf3.form = StorageDashboard5e1554fd66eaa8d00f842ae946413cf3Form
/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
const StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url(options),
    method: 'get',
})

StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.definition = {
    methods: ["get","head"],
    url: '/nds/storage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url = (options?: RouteQueryOptions) => {
    return StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
const StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Storage\Pages\StorageDashboard::__invoke
* @see app/Filament/Storage/Pages/StorageDashboard.php:7
* @route '/nds/storage'
*/
StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612.form = StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612Form

const StorageDashboard = {
    '/nds/script': StorageDashboard5e1554fd66eaa8d00f842ae946413cf3,
    '/nds/storage': StorageDashboardc5ba8cadbd5479c9fa15ffc99955d612,
}

export default StorageDashboard