import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
const handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.url(options),
    method: 'post',
})

handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.definition = {
    methods: ["post"],
    url: '/livewire-86207cf2/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.url = (options?: RouteQueryOptions) => {
    return handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
const handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire-86207cf2/update'
*/
handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.url(options),
    method: 'post',
})

handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4.form = handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4Form
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire/update'
*/
const handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.url(options),
    method: 'post',
})

handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.definition = {
    methods: ["post"],
    url: '/livewire/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire/update'
*/
handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.url = (options?: RouteQueryOptions) => {
    return handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire/update'
*/
handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire/update'
*/
const handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:134
* @route '/livewire/update'
*/
handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.url(options),
    method: 'post',
})

handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6.form = handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6Form

export const handleUpdate = {
    '/livewire-86207cf2/update': handleUpdateb29e20422ac021e7a2c5c36dc5eb17d4,
    '/livewire/update': handleUpdatef6ab724e744f3e2ebb2338a8429f1aa6,
}

const HandleRequests = { handleUpdate }

export default HandleRequests