import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
export const show = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_datum: args.hitta_datum,
    }

    return show.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
const showForm = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
showForm.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
showForm.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
export const update = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_datum: args.hitta_datum,
    }

    return update.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update.put = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update.patch = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
const updateForm = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
updateForm.put = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
updateForm.patch = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
export const destroy = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
destroy.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_datum: args.hitta_datum,
    }

    return destroy.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
destroy.delete = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
const destroyForm = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
destroyForm.delete = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const hittaData = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default hittaData