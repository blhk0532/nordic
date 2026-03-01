import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
const index58862274941b222dcfee8ed12ba0f97d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'get',
})

index58862274941b222dcfee8ed12ba0f97d.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index58862274941b222dcfee8ed12ba0f97d.url = (options?: RouteQueryOptions) => {
    return index58862274941b222dcfee8ed12ba0f97d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index58862274941b222dcfee8ed12ba0f97d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index58862274941b222dcfee8ed12ba0f97d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
const index58862274941b222dcfee8ed12ba0f97dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index58862274941b222dcfee8ed12ba0f97dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-data'
*/
index58862274941b222dcfee8ed12ba0f97dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58862274941b222dcfee8ed12ba0f97d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index58862274941b222dcfee8ed12ba0f97d.form = index58862274941b222dcfee8ed12ba0f97dForm
/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
const index4bf6f54c18320571b050bcfc10c6f04e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'get',
})

index4bf6f54c18320571b050bcfc10c6f04e.definition = {
    methods: ["get","head"],
    url: '/api/hitta-personer-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
index4bf6f54c18320571b050bcfc10c6f04e.url = (options?: RouteQueryOptions) => {
    return index4bf6f54c18320571b050bcfc10c6f04e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
index4bf6f54c18320571b050bcfc10c6f04e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
index4bf6f54c18320571b050bcfc10c6f04e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
const index4bf6f54c18320571b050bcfc10c6f04eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
index4bf6f54c18320571b050bcfc10c6f04eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::index
* @see app/Http/Controllers/Api/HittaDataController.php:19
* @route '/api/hitta-personer-data'
*/
index4bf6f54c18320571b050bcfc10c6f04eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4bf6f54c18320571b050bcfc10c6f04e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4bf6f54c18320571b050bcfc10c6f04e.form = index4bf6f54c18320571b050bcfc10c6f04eForm

export const index = {
    '/api/hitta-data': index58862274941b222dcfee8ed12ba0f97d,
    '/api/hitta-personer-data': index4bf6f54c18320571b050bcfc10c6f04e,
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
const store58862274941b222dcfee8ed12ba0f97d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'post',
})

store58862274941b222dcfee8ed12ba0f97d.definition = {
    methods: ["post"],
    url: '/api/hitta-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store58862274941b222dcfee8ed12ba0f97d.url = (options?: RouteQueryOptions) => {
    return store58862274941b222dcfee8ed12ba0f97d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store58862274941b222dcfee8ed12ba0f97d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
const store58862274941b222dcfee8ed12ba0f97dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-data'
*/
store58862274941b222dcfee8ed12ba0f97dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store58862274941b222dcfee8ed12ba0f97d.url(options),
    method: 'post',
})

store58862274941b222dcfee8ed12ba0f97d.form = store58862274941b222dcfee8ed12ba0f97dForm
/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-personer-data'
*/
const store4bf6f54c18320571b050bcfc10c6f04e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'post',
})

store4bf6f54c18320571b050bcfc10c6f04e.definition = {
    methods: ["post"],
    url: '/api/hitta-personer-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-personer-data'
*/
store4bf6f54c18320571b050bcfc10c6f04e.url = (options?: RouteQueryOptions) => {
    return store4bf6f54c18320571b050bcfc10c6f04e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-personer-data'
*/
store4bf6f54c18320571b050bcfc10c6f04e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-personer-data'
*/
const store4bf6f54c18320571b050bcfc10c6f04eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::store
* @see app/Http/Controllers/Api/HittaDataController.php:65
* @route '/api/hitta-personer-data'
*/
store4bf6f54c18320571b050bcfc10c6f04eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4bf6f54c18320571b050bcfc10c6f04e.url(options),
    method: 'post',
})

store4bf6f54c18320571b050bcfc10c6f04e.form = store4bf6f54c18320571b050bcfc10c6f04eForm

export const store = {
    '/api/hitta-data': store58862274941b222dcfee8ed12ba0f97d,
    '/api/hitta-personer-data': store4bf6f54c18320571b050bcfc10c6f04e,
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-data/bulk'
*/
const bulkStore2361412a2a85476567e747594ca102b0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore2361412a2a85476567e747594ca102b0.url(options),
    method: 'post',
})

bulkStore2361412a2a85476567e747594ca102b0.definition = {
    methods: ["post"],
    url: '/api/hitta-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-data/bulk'
*/
bulkStore2361412a2a85476567e747594ca102b0.url = (options?: RouteQueryOptions) => {
    return bulkStore2361412a2a85476567e747594ca102b0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-data/bulk'
*/
bulkStore2361412a2a85476567e747594ca102b0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore2361412a2a85476567e747594ca102b0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-data/bulk'
*/
const bulkStore2361412a2a85476567e747594ca102b0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore2361412a2a85476567e747594ca102b0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-data/bulk'
*/
bulkStore2361412a2a85476567e747594ca102b0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore2361412a2a85476567e747594ca102b0.url(options),
    method: 'post',
})

bulkStore2361412a2a85476567e747594ca102b0.form = bulkStore2361412a2a85476567e747594ca102b0Form
/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-personer-data/bulk'
*/
const bulkStore09d641ada94988da6d9b5061d192712f = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore09d641ada94988da6d9b5061d192712f.url(options),
    method: 'post',
})

bulkStore09d641ada94988da6d9b5061d192712f.definition = {
    methods: ["post"],
    url: '/api/hitta-personer-data/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-personer-data/bulk'
*/
bulkStore09d641ada94988da6d9b5061d192712f.url = (options?: RouteQueryOptions) => {
    return bulkStore09d641ada94988da6d9b5061d192712f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-personer-data/bulk'
*/
bulkStore09d641ada94988da6d9b5061d192712f.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore09d641ada94988da6d9b5061d192712f.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-personer-data/bulk'
*/
const bulkStore09d641ada94988da6d9b5061d192712fForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore09d641ada94988da6d9b5061d192712f.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::bulkStore
* @see app/Http/Controllers/Api/HittaDataController.php:147
* @route '/api/hitta-personer-data/bulk'
*/
bulkStore09d641ada94988da6d9b5061d192712fForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStore09d641ada94988da6d9b5061d192712f.url(options),
    method: 'post',
})

bulkStore09d641ada94988da6d9b5061d192712f.form = bulkStore09d641ada94988da6d9b5061d192712fForm

export const bulkStore = {
    '/api/hitta-data/bulk': bulkStore2361412a2a85476567e747594ca102b0,
    '/api/hitta-personer-data/bulk': bulkStore09d641ada94988da6d9b5061d192712f,
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
const show3e7cb2bccaae449e54d5c60f908b96c7 = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

show3e7cb2bccaae449e54d5c60f908b96c7.definition = {
    methods: ["get","head"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show3e7cb2bccaae449e54d5c60f908b96c7.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
const show3e7cb2bccaae449e54d5c60f908b96c7Form = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7Form.get = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-data/{hitta_datum}'
*/
show3e7cb2bccaae449e54d5c60f908b96c7Form.head = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3e7cb2bccaae449e54d5c60f908b96c7.form = show3e7cb2bccaae449e54d5c60f908b96c7Form
/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const show13ffc56bb4ef006acf1c27f85bae3a0f = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'get',
})

show13ffc56bb4ef006acf1c27f85bae3a0f.definition = {
    methods: ["get","head"],
    url: '/api/hitta-personer-data/{hitta_personer_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
show13ffc56bb4ef006acf1c27f85bae3a0f.url = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_personer_datum: args.hitta_personer_datum,
    }

    return show13ffc56bb4ef006acf1c27f85bae3a0f.definition.url
            .replace('{hitta_personer_datum}', parsedArgs.hitta_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
show13ffc56bb4ef006acf1c27f85bae3a0f.get = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
show13ffc56bb4ef006acf1c27f85bae3a0f.head = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const show13ffc56bb4ef006acf1c27f85bae3a0fForm = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
show13ffc56bb4ef006acf1c27f85bae3a0fForm.get = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::show
* @see app/Http/Controllers/Api/HittaDataController.php:114
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
show13ffc56bb4ef006acf1c27f85bae3a0fForm.head = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show13ffc56bb4ef006acf1c27f85bae3a0f.form = show13ffc56bb4ef006acf1c27f85bae3a0fForm

export const show = {
    '/api/hitta-data/{hitta_datum}': show3e7cb2bccaae449e54d5c60f908b96c7,
    '/api/hitta-personer-data/{hitta_personer_datum}': show13ffc56bb4ef006acf1c27f85bae3a0f,
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
const update3e7cb2bccaae449e54d5c60f908b96c7 = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'put',
})

update3e7cb2bccaae449e54d5c60f908b96c7.definition = {
    methods: ["put","patch"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update3e7cb2bccaae449e54d5c60f908b96c7.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update3e7cb2bccaae449e54d5c60f908b96c7.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update3e7cb2bccaae449e54d5c60f908b96c7.put = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
update3e7cb2bccaae449e54d5c60f908b96c7.patch = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-data/{hitta_datum}'
*/
const update3e7cb2bccaae449e54d5c60f908b96c7Form = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
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
update3e7cb2bccaae449e54d5c60f908b96c7Form.put = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
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
update3e7cb2bccaae449e54d5c60f908b96c7Form.patch = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update3e7cb2bccaae449e54d5c60f908b96c7.form = update3e7cb2bccaae449e54d5c60f908b96c7Form
/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const update13ffc56bb4ef006acf1c27f85bae3a0f = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'put',
})

update13ffc56bb4ef006acf1c27f85bae3a0f.definition = {
    methods: ["put","patch"],
    url: '/api/hitta-personer-data/{hitta_personer_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
update13ffc56bb4ef006acf1c27f85bae3a0f.url = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_personer_datum: args.hitta_personer_datum,
    }

    return update13ffc56bb4ef006acf1c27f85bae3a0f.definition.url
            .replace('{hitta_personer_datum}', parsedArgs.hitta_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
update13ffc56bb4ef006acf1c27f85bae3a0f.put = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
update13ffc56bb4ef006acf1c27f85bae3a0f.patch = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::update
* @see app/Http/Controllers/Api/HittaDataController.php:119
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const update13ffc56bb4ef006acf1c27f85bae3a0fForm = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
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
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
update13ffc56bb4ef006acf1c27f85bae3a0fForm.put = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
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
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
update13ffc56bb4ef006acf1c27f85bae3a0fForm.patch = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update13ffc56bb4ef006acf1c27f85bae3a0f.form = update13ffc56bb4ef006acf1c27f85bae3a0fForm

export const update = {
    '/api/hitta-data/{hitta_datum}': update3e7cb2bccaae449e54d5c60f908b96c7,
    '/api/hitta-personer-data/{hitta_personer_datum}': update13ffc56bb4ef006acf1c27f85bae3a0f,
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
const destroy3e7cb2bccaae449e54d5c60f908b96c7 = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'delete',
})

destroy3e7cb2bccaae449e54d5c60f908b96c7.definition = {
    methods: ["delete"],
    url: '/api/hitta-data/{hitta_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
destroy3e7cb2bccaae449e54d5c60f908b96c7.url = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy3e7cb2bccaae449e54d5c60f908b96c7.definition.url
            .replace('{hitta_datum}', parsedArgs.hitta_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
destroy3e7cb2bccaae449e54d5c60f908b96c7.delete = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3e7cb2bccaae449e54d5c60f908b96c7.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-data/{hitta_datum}'
*/
const destroy3e7cb2bccaae449e54d5c60f908b96c7Form = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
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
destroy3e7cb2bccaae449e54d5c60f908b96c7Form.delete = (args: { hitta_datum: string | number } | [hitta_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy3e7cb2bccaae449e54d5c60f908b96c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy3e7cb2bccaae449e54d5c60f908b96c7.form = destroy3e7cb2bccaae449e54d5c60f908b96c7Form
/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const destroy13ffc56bb4ef006acf1c27f85bae3a0f = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'delete',
})

destroy13ffc56bb4ef006acf1c27f85bae3a0f.definition = {
    methods: ["delete"],
    url: '/api/hitta-personer-data/{hitta_personer_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
destroy13ffc56bb4ef006acf1c27f85bae3a0f.url = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hitta_personer_datum: args }
    }

    if (Array.isArray(args)) {
        args = {
            hitta_personer_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hitta_personer_datum: args.hitta_personer_datum,
    }

    return destroy13ffc56bb4ef006acf1c27f85bae3a0f.definition.url
            .replace('{hitta_personer_datum}', parsedArgs.hitta_personer_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
destroy13ffc56bb4ef006acf1c27f85bae3a0f.delete = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy13ffc56bb4ef006acf1c27f85bae3a0f.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\HittaDataController::destroy
* @see app/Http/Controllers/Api/HittaDataController.php:137
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
const destroy13ffc56bb4ef006acf1c27f85bae3a0fForm = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
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
* @route '/api/hitta-personer-data/{hitta_personer_datum}'
*/
destroy13ffc56bb4ef006acf1c27f85bae3a0fForm.delete = (args: { hitta_personer_datum: string | number } | [hitta_personer_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy13ffc56bb4ef006acf1c27f85bae3a0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy13ffc56bb4ef006acf1c27f85bae3a0f.form = destroy13ffc56bb4ef006acf1c27f85bae3a0fForm

export const destroy = {
    '/api/hitta-data/{hitta_datum}': destroy3e7cb2bccaae449e54d5c60f908b96c7,
    '/api/hitta-personer-data/{hitta_personer_datum}': destroy13ffc56bb4ef006acf1c27f85bae3a0f,
}

const HittaDataController = { index, store, bulkStore, show, update, destroy }

export default HittaDataController