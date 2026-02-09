import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::index
* @see app/Http/Controllers/Api/RatsitDataController.php:21
* @route '/api/ratsit-data'
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
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/ratsit-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::store
* @see app/Http/Controllers/Api/RatsitDataController.php:67
* @route '/api/ratsit-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
export const show = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
show.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
show.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
show.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const showForm = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showForm.get = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::show
* @see app/Http/Controllers/Api/RatsitDataController.php:111
* @route '/api/ratsit-data/{ratsit_datum}'
*/
showForm.head = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
export const update = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
update.url = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
update.put = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
update.patch = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::update
* @see app/Http/Controllers/Api/RatsitDataController.php:116
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const updateForm = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { ratsit_datum: number | { id: number } } | [ratsit_datum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
export const destroy = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/ratsit-data/{ratsit_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
destroy.url = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{ratsit_datum}', parsedArgs.ratsit_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
destroy.delete = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\RatsitDataController::destroy
* @see app/Http/Controllers/Api/RatsitDataController.php:210
* @route '/api/ratsit-data/{ratsit_datum}'
*/
const destroyForm = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { ratsit_datum: string | number } | [ratsit_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ratsitData = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default ratsitData