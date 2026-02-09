import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
const index05e4d1f0c51e876e21934592a5a56279 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'get',
})

index05e4d1f0c51e876e21934592a5a56279.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index05e4d1f0c51e876e21934592a5a56279.url = (options?: RouteQueryOptions) => {
    return index05e4d1f0c51e876e21934592a5a56279.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index05e4d1f0c51e876e21934592a5a56279.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index05e4d1f0c51e876e21934592a5a56279.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
const index05e4d1f0c51e876e21934592a5a56279Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index05e4d1f0c51e876e21934592a5a56279Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index05e4d1f0c51e876e21934592a5a56279Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index05e4d1f0c51e876e21934592a5a56279.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index05e4d1f0c51e876e21934592a5a56279.form = index05e4d1f0c51e876e21934592a5a56279Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
const index71b290343e459db19e3005b6cfae9f0c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'get',
})

index71b290343e459db19e3005b6cfae9f0c.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-personer-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
index71b290343e459db19e3005b6cfae9f0c.url = (options?: RouteQueryOptions) => {
    return index71b290343e459db19e3005b6cfae9f0c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
index71b290343e459db19e3005b6cfae9f0c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
index71b290343e459db19e3005b6cfae9f0c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
const index71b290343e459db19e3005b6cfae9f0cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
index71b290343e459db19e3005b6cfae9f0cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-personer-data'
*/
index71b290343e459db19e3005b6cfae9f0cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71b290343e459db19e3005b6cfae9f0c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index71b290343e459db19e3005b6cfae9f0c.form = index71b290343e459db19e3005b6cfae9f0cForm

export const index = {
    '/api/ratsit-data': index05e4d1f0c51e876e21934592a5a56279,
    '/api/ratsit-personer-data': index71b290343e459db19e3005b6cfae9f0c,
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
const store05e4d1f0c51e876e21934592a5a56279 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'post',
})

store05e4d1f0c51e876e21934592a5a56279.definition = {
    methods: ["post"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
store05e4d1f0c51e876e21934592a5a56279.url = (options?: RouteQueryOptions) => {
    return store05e4d1f0c51e876e21934592a5a56279.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
store05e4d1f0c51e876e21934592a5a56279.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
const store05e4d1f0c51e876e21934592a5a56279Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
store05e4d1f0c51e876e21934592a5a56279Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store05e4d1f0c51e876e21934592a5a56279.url(options),
    method: 'post',
})

store05e4d1f0c51e876e21934592a5a56279.form = store05e4d1f0c51e876e21934592a5a56279Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-personer-data'
*/
const store71b290343e459db19e3005b6cfae9f0c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'post',
})

store71b290343e459db19e3005b6cfae9f0c.definition = {
    methods: ["post"],
    url: '/api/ratsit-personer-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-personer-data'
*/
store71b290343e459db19e3005b6cfae9f0c.url = (options?: RouteQueryOptions) => {
    return store71b290343e459db19e3005b6cfae9f0c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-personer-data'
*/
store71b290343e459db19e3005b6cfae9f0c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-personer-data'
*/
const store71b290343e459db19e3005b6cfae9f0cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-personer-data'
*/
store71b290343e459db19e3005b6cfae9f0cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store71b290343e459db19e3005b6cfae9f0c.url(options),
    method: 'post',
})

store71b290343e459db19e3005b6cfae9f0c.form = store71b290343e459db19e3005b6cfae9f0cForm

export const store = {
    '/api/ratsit-data': store05e4d1f0c51e876e21934592a5a56279,
    '/api/ratsit-personer-data': store71b290343e459db19e3005b6cfae9f0c,
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-data/bulk'
*/
const bulkStorec24ee9271e0d442a99342dfb76f115e7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStorec24ee9271e0d442a99342dfb76f115e7.url(options),
    method: 'post',
})

bulkStorec24ee9271e0d442a99342dfb76f115e7.definition = {
    methods: ["post"],
    url: '/api/ratsit-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-data/bulk'
*/
bulkStorec24ee9271e0d442a99342dfb76f115e7.url = (options?: RouteQueryOptions) => {
    return bulkStorec24ee9271e0d442a99342dfb76f115e7.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-data/bulk'
*/
bulkStorec24ee9271e0d442a99342dfb76f115e7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStorec24ee9271e0d442a99342dfb76f115e7.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-data/bulk'
*/
const bulkStorec24ee9271e0d442a99342dfb76f115e7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStorec24ee9271e0d442a99342dfb76f115e7.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-data/bulk'
*/
bulkStorec24ee9271e0d442a99342dfb76f115e7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStorec24ee9271e0d442a99342dfb76f115e7.url(options),
    method: 'post',
})

bulkStorec24ee9271e0d442a99342dfb76f115e7.form = bulkStorec24ee9271e0d442a99342dfb76f115e7Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-personer-data/bulk'
*/
const bulkStored48d9be48c8277f098c3e7d2628a94d8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStored48d9be48c8277f098c3e7d2628a94d8.url(options),
    method: 'post',
})

bulkStored48d9be48c8277f098c3e7d2628a94d8.definition = {
    methods: ["post"],
    url: '/api/ratsit-personer-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-personer-data/bulk'
*/
bulkStored48d9be48c8277f098c3e7d2628a94d8.url = (options?: RouteQueryOptions) => {
    return bulkStored48d9be48c8277f098c3e7d2628a94d8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-personer-data/bulk'
*/
bulkStored48d9be48c8277f098c3e7d2628a94d8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStored48d9be48c8277f098c3e7d2628a94d8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-personer-data/bulk'
*/
const bulkStored48d9be48c8277f098c3e7d2628a94d8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStored48d9be48c8277f098c3e7d2628a94d8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::bulkStore
* @see app/Http/Controllers/Api/RatsitDataController.php:220
* @route '/api/ratsit-personer-data/bulk'
*/
bulkStored48d9be48c8277f098c3e7d2628a94d8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStored48d9be48c8277f098c3e7d2628a94d8.url(options),
    method: 'post',
})

bulkStored48d9be48c8277f098c3e7d2628a94d8.form = bulkStored48d9be48c8277f098c3e7d2628a94d8Form

export const bulkStore = {
    '/api/ratsit-data/bulk': bulkStorec24ee9271e0d442a99342dfb76f115e7,
    '/api/ratsit-personer-data/bulk': bulkStored48d9be48c8277f098c3e7d2628a94d8,
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const showb2c6a938f4faecf346adaf5b82d1c5a3 = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

showb2c6a938f4faecf346adaf5b82d1c5a3.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_datum: args.ratsit_datum,
    }

    return showb2c6a938f4faecf346adaf5b82d1c5a3.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const showb2c6a938f4faecf346adaf5b82d1c5a3Form = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3Form.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showb2c6a938f4faecf346adaf5b82d1c5a3Form.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showb2c6a938f4faecf346adaf5b82d1c5a3.form = showb2c6a938f4faecf346adaf5b82d1c5a3Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const show86e6555a3357498a3ed870b5cea41992 = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'get',
})

show86e6555a3357498a3ed870b5cea41992.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-personer-data/{ratsit_personer_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
show86e6555a3357498a3ed870b5cea41992.url = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_personer_datum: args.ratsit_personer_datum,
    }

    return show86e6555a3357498a3ed870b5cea41992.definition.url
            .replace('{ratsit_personer_datum}', parsedArgs.ratsit_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
show86e6555a3357498a3ed870b5cea41992.get = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
show86e6555a3357498a3ed870b5cea41992.head = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const show86e6555a3357498a3ed870b5cea41992Form = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
show86e6555a3357498a3ed870b5cea41992Form.get = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
show86e6555a3357498a3ed870b5cea41992Form.head = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show86e6555a3357498a3ed870b5cea41992.form = show86e6555a3357498a3ed870b5cea41992Form

export const show = {
    '/api/ratsit-data/{ratsit_datum}': showb2c6a938f4faecf346adaf5b82d1c5a3,
    '/api/ratsit-personer-data/{ratsit_personer_datum}': show86e6555a3357498a3ed870b5cea41992,
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const updateb2c6a938f4faecf346adaf5b82d1c5a3 = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'put',
})

updateb2c6a938f4faecf346adaf5b82d1c5a3.definition = {
    methods: ["put","patch"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
updateb2c6a938f4faecf346adaf5b82d1c5a3.url = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_datum: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { ratsit_datum: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_datum: typeof args.ratsit_datum === 'object'
        ? args.ratsit_datum.id
        : args.ratsit_datum,
    }

    return updateb2c6a938f4faecf346adaf5b82d1c5a3.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
updateb2c6a938f4faecf346adaf5b82d1c5a3.put = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
updateb2c6a938f4faecf346adaf5b82d1c5a3.patch = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const updateb2c6a938f4faecf346adaf5b82d1c5a3Form = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
updateb2c6a938f4faecf346adaf5b82d1c5a3Form.put = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
updateb2c6a938f4faecf346adaf5b82d1c5a3Form.patch = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateb2c6a938f4faecf346adaf5b82d1c5a3.form = updateb2c6a938f4faecf346adaf5b82d1c5a3Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const update86e6555a3357498a3ed870b5cea41992 = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'put',
})

update86e6555a3357498a3ed870b5cea41992.definition = {
    methods: ["put","patch"],
    url: '/api/ratsit-personer-data/{ratsit_personer_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
update86e6555a3357498a3ed870b5cea41992.url = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_personer_datum: args.ratsit_personer_datum,
    }

    return update86e6555a3357498a3ed870b5cea41992.definition.url
            .replace('{ratsit_personer_datum}', parsedArgs.ratsit_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
update86e6555a3357498a3ed870b5cea41992.put = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
update86e6555a3357498a3ed870b5cea41992.patch = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const update86e6555a3357498a3ed870b5cea41992Form = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
update86e6555a3357498a3ed870b5cea41992Form.put = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
update86e6555a3357498a3ed870b5cea41992Form.patch = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update86e6555a3357498a3ed870b5cea41992.form = update86e6555a3357498a3ed870b5cea41992Form

export const update = {
    '/api/ratsit-data/{ratsit_datum}': updateb2c6a938f4faecf346adaf5b82d1c5a3,
    '/api/ratsit-personer-data/{ratsit_personer_datum}': update86e6555a3357498a3ed870b5cea41992,
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const destroyb2c6a938f4faecf346adaf5b82d1c5a3 = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'delete',
})

destroyb2c6a938f4faecf346adaf5b82d1c5a3.definition = {
    methods: ["delete"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
destroyb2c6a938f4faecf346adaf5b82d1c5a3.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_datum: args.ratsit_datum,
    }

    return destroyb2c6a938f4faecf346adaf5b82d1c5a3.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
destroyb2c6a938f4faecf346adaf5b82d1c5a3.delete = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb2c6a938f4faecf346adaf5b82d1c5a3.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const destroyb2c6a938f4faecf346adaf5b82d1c5a3Form = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
destroyb2c6a938f4faecf346adaf5b82d1c5a3Form.delete = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb2c6a938f4faecf346adaf5b82d1c5a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyb2c6a938f4faecf346adaf5b82d1c5a3.form = destroyb2c6a938f4faecf346adaf5b82d1c5a3Form
/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const destroy86e6555a3357498a3ed870b5cea41992 = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'delete',
})

destroy86e6555a3357498a3ed870b5cea41992.definition = {
    methods: ["delete"],
    url: '/api/ratsit-personer-data/{ratsit_personer_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
destroy86e6555a3357498a3ed870b5cea41992.url = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ratsit_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            ratsit_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ratsit_personer_datum: args.ratsit_personer_datum,
    }

    return destroy86e6555a3357498a3ed870b5cea41992.definition.url
            .replace('{ratsit_personer_datum}', parsedArgs.ratsit_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
destroy86e6555a3357498a3ed870b5cea41992.delete = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy86e6555a3357498a3ed870b5cea41992.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
const destroy86e6555a3357498a3ed870b5cea41992Form = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-personer-data/{ratsit_personer_datum}'
*/
destroy86e6555a3357498a3ed870b5cea41992Form.delete = (args: { ratsit_personer_datum: string | number } | [ratsit_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy86e6555a3357498a3ed870b5cea41992.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy86e6555a3357498a3ed870b5cea41992.form = destroy86e6555a3357498a3ed870b5cea41992Form

export const destroy = {
    '/api/ratsit-data/{ratsit_datum}': destroyb2c6a938f4faecf346adaf5b82d1c5a3,
    '/api/ratsit-personer-data/{ratsit_personer_datum}': destroy86e6555a3357498a3ed870b5cea41992,
}

const RatsitDataController = { index, store, bulkStore, show, update, destroy }

export default RatsitDataController