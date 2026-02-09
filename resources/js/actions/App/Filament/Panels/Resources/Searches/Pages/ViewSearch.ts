import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
const ViewSearch1457e2c48bc4996e06d2f95be512b6bd = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

ViewSearch1457e2c48bc4996e06d2f95be512b6bd.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch1457e2c48bc4996e06d2f95be512b6bd.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
const ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch1457e2c48bc4996e06d2f95be512b6bd.form = ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
const ViewSearchfefe59097a80b5de71cc5c89986c3f77 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

ViewSearchfefe59097a80b5de71cc5c89986c3f77.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearchfefe59097a80b5de71cc5c89986c3f77.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
const ViewSearchfefe59097a80b5de71cc5c89986c3f77Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchfefe59097a80b5de71cc5c89986c3f77.form = ViewSearchfefe59097a80b5de71cc5c89986c3f77Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
const ViewSearch9d128ea3441e08d459c44b720851564b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, options),
    method: 'get',
})

ViewSearch9d128ea3441e08d459c44b720851564b.definition = {
    methods: ["get","head"],
    url: '/nds/clients/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
ViewSearch9d128ea3441e08d459c44b720851564b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch9d128ea3441e08d459c44b720851564b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
ViewSearch9d128ea3441e08d459c44b720851564b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
ViewSearch9d128ea3441e08d459c44b720851564b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
const ViewSearch9d128ea3441e08d459c44b720851564bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
ViewSearch9d128ea3441e08d459c44b720851564bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/clients/searches/{record}'
*/
ViewSearch9d128ea3441e08d459c44b720851564bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9d128ea3441e08d459c44b720851564b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch9d128ea3441e08d459c44b720851564b.form = ViewSearch9d128ea3441e08d459c44b720851564bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
const ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
const ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.form = ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
const ViewSearch50894667cd2a13857913ef0a1a217513 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, options),
    method: 'get',
})

ViewSearch50894667cd2a13857913ef0a1a217513.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
ViewSearch50894667cd2a13857913ef0a1a217513.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch50894667cd2a13857913ef0a1a217513.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
ViewSearch50894667cd2a13857913ef0a1a217513.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
ViewSearch50894667cd2a13857913ef0a1a217513.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
const ViewSearch50894667cd2a13857913ef0a1a217513Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
ViewSearch50894667cd2a13857913ef0a1a217513Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dialer/searches/{record}'
*/
ViewSearch50894667cd2a13857913ef0a1a217513Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch50894667cd2a13857913ef0a1a217513.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch50894667cd2a13857913ef0a1a217513.form = ViewSearch50894667cd2a13857913ef0a1a217513Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
const ViewSearch617d0b3b23ebe9d5c76012697abb10b6 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

ViewSearch617d0b3b23ebe9d5c76012697abb10b6.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch617d0b3b23ebe9d5c76012697abb10b6.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
const ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch617d0b3b23ebe9d5c76012697abb10b6.form = ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
const ViewSearch636a65f3579a2295a83bbf8be3ae90f5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

ViewSearch636a65f3579a2295a83bbf8be3ae90f5.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch636a65f3579a2295a83bbf8be3ae90f5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
const ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch636a65f3579a2295a83bbf8be3ae90f5.form = ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
const ViewSearch095d73eaa292b240c8ef64296dbb1f01 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, options),
    method: 'get',
})

ViewSearch095d73eaa292b240c8ef64296dbb1f01.definition = {
    methods: ["get","head"],
    url: '/nds/finance/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
ViewSearch095d73eaa292b240c8ef64296dbb1f01.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch095d73eaa292b240c8ef64296dbb1f01.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
ViewSearch095d73eaa292b240c8ef64296dbb1f01.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
ViewSearch095d73eaa292b240c8ef64296dbb1f01.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
const ViewSearch095d73eaa292b240c8ef64296dbb1f01Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
ViewSearch095d73eaa292b240c8ef64296dbb1f01Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/finance/searches/{record}'
*/
ViewSearch095d73eaa292b240c8ef64296dbb1f01Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch095d73eaa292b240c8ef64296dbb1f01.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch095d73eaa292b240c8ef64296dbb1f01.form = ViewSearch095d73eaa292b240c8ef64296dbb1f01Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
const ViewSearch56744b4cea9a51605d4c84d9d24656b8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, options),
    method: 'get',
})

ViewSearch56744b4cea9a51605d4c84d9d24656b8.definition = {
    methods: ["get","head"],
    url: '/nds/locale/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
ViewSearch56744b4cea9a51605d4c84d9d24656b8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch56744b4cea9a51605d4c84d9d24656b8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
ViewSearch56744b4cea9a51605d4c84d9d24656b8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
ViewSearch56744b4cea9a51605d4c84d9d24656b8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
const ViewSearch56744b4cea9a51605d4c84d9d24656b8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
ViewSearch56744b4cea9a51605d4c84d9d24656b8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/locale/searches/{record}'
*/
ViewSearch56744b4cea9a51605d4c84d9d24656b8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch56744b4cea9a51605d4c84d9d24656b8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch56744b4cea9a51605d4c84d9d24656b8.form = ViewSearch56744b4cea9a51605d4c84d9d24656b8Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
const ViewSearch88af849079d1ad0b53a36dc58ba03928 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, options),
    method: 'get',
})

ViewSearch88af849079d1ad0b53a36dc58ba03928.definition = {
    methods: ["get","head"],
    url: '/nds/manager/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
ViewSearch88af849079d1ad0b53a36dc58ba03928.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch88af849079d1ad0b53a36dc58ba03928.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
ViewSearch88af849079d1ad0b53a36dc58ba03928.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
ViewSearch88af849079d1ad0b53a36dc58ba03928.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
const ViewSearch88af849079d1ad0b53a36dc58ba03928Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
ViewSearch88af849079d1ad0b53a36dc58ba03928Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/manager/searches/{record}'
*/
ViewSearch88af849079d1ad0b53a36dc58ba03928Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch88af849079d1ad0b53a36dc58ba03928.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch88af849079d1ad0b53a36dc58ba03928.form = ViewSearch88af849079d1ad0b53a36dc58ba03928Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
const ViewSearch4af21ec6c42f540005910381a28c1d73 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

ViewSearch4af21ec6c42f540005910381a28c1d73.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch4af21ec6c42f540005910381a28c1d73.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
const ViewSearch4af21ec6c42f540005910381a28c1d73Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch4af21ec6c42f540005910381a28c1d73.form = ViewSearch4af21ec6c42f540005910381a28c1d73Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
const ViewSearcheb15ecb2f9fcb427876969075103fead = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, options),
    method: 'get',
})

ViewSearcheb15ecb2f9fcb427876969075103fead.definition = {
    methods: ["get","head"],
    url: '/nds/partner/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
ViewSearcheb15ecb2f9fcb427876969075103fead.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearcheb15ecb2f9fcb427876969075103fead.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
ViewSearcheb15ecb2f9fcb427876969075103fead.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
ViewSearcheb15ecb2f9fcb427876969075103fead.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
const ViewSearcheb15ecb2f9fcb427876969075103feadForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
ViewSearcheb15ecb2f9fcb427876969075103feadForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/partner/searches/{record}'
*/
ViewSearcheb15ecb2f9fcb427876969075103feadForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearcheb15ecb2f9fcb427876969075103fead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearcheb15ecb2f9fcb427876969075103fead.form = ViewSearcheb15ecb2f9fcb427876969075103feadForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
const ViewSearch37a8dfb48de92d02aad407ab52681bf2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, options),
    method: 'get',
})

ViewSearch37a8dfb48de92d02aad407ab52681bf2.definition = {
    methods: ["get","head"],
    url: '/nds/private/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
ViewSearch37a8dfb48de92d02aad407ab52681bf2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch37a8dfb48de92d02aad407ab52681bf2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
ViewSearch37a8dfb48de92d02aad407ab52681bf2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
ViewSearch37a8dfb48de92d02aad407ab52681bf2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
const ViewSearch37a8dfb48de92d02aad407ab52681bf2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
ViewSearch37a8dfb48de92d02aad407ab52681bf2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/private/searches/{record}'
*/
ViewSearch37a8dfb48de92d02aad407ab52681bf2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch37a8dfb48de92d02aad407ab52681bf2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch37a8dfb48de92d02aad407ab52681bf2.form = ViewSearch37a8dfb48de92d02aad407ab52681bf2Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
const ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
const ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.form = ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
const ViewSearchd2e3eba5c729c728fd45026005328d36 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, options),
    method: 'get',
})

ViewSearchd2e3eba5c729c728fd45026005328d36.definition = {
    methods: ["get","head"],
    url: '/nds/script/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
ViewSearchd2e3eba5c729c728fd45026005328d36.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearchd2e3eba5c729c728fd45026005328d36.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
ViewSearchd2e3eba5c729c728fd45026005328d36.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
ViewSearchd2e3eba5c729c728fd45026005328d36.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
const ViewSearchd2e3eba5c729c728fd45026005328d36Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
ViewSearchd2e3eba5c729c728fd45026005328d36Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/script/searches/{record}'
*/
ViewSearchd2e3eba5c729c728fd45026005328d36Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchd2e3eba5c729c728fd45026005328d36.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchd2e3eba5c729c728fd45026005328d36.form = ViewSearchd2e3eba5c729c728fd45026005328d36Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
const ViewSearch637d65a8c7f695dd4fe389513b1dc3c8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, options),
    method: 'get',
})

ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.definition = {
    methods: ["get","head"],
    url: '/nds/server/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
const ViewSearch637d65a8c7f695dd4fe389513b1dc3c8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
ViewSearch637d65a8c7f695dd4fe389513b1dc3c8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/server/searches/{record}'
*/
ViewSearch637d65a8c7f695dd4fe389513b1dc3c8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch637d65a8c7f695dd4fe389513b1dc3c8.form = ViewSearch637d65a8c7f695dd4fe389513b1dc3c8Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
const ViewSearch9ce3a1c9bc470fc4cef527b03295ea76 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, options),
    method: 'get',
})

ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.definition = {
    methods: ["get","head"],
    url: '/nds/service/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
const ViewSearch9ce3a1c9bc470fc4cef527b03295ea76Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
ViewSearch9ce3a1c9bc470fc4cef527b03295ea76Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/service/searches/{record}'
*/
ViewSearch9ce3a1c9bc470fc4cef527b03295ea76Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch9ce3a1c9bc470fc4cef527b03295ea76.form = ViewSearch9ce3a1c9bc470fc4cef527b03295ea76Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
const ViewSearch24df32d46b1fd3c4ae5556829eceedc9 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, options),
    method: 'get',
})

ViewSearch24df32d46b1fd3c4ae5556829eceedc9.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch24df32d46b1fd3c4ae5556829eceedc9.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
ViewSearch24df32d46b1fd3c4ae5556829eceedc9.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
ViewSearch24df32d46b1fd3c4ae5556829eceedc9.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
const ViewSearch24df32d46b1fd3c4ae5556829eceedc9Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
ViewSearch24df32d46b1fd3c4ae5556829eceedc9Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/sheets/searches/{record}'
*/
ViewSearch24df32d46b1fd3c4ae5556829eceedc9Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch24df32d46b1fd3c4ae5556829eceedc9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch24df32d46b1fd3c4ae5556829eceedc9.form = ViewSearch24df32d46b1fd3c4ae5556829eceedc9Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
const ViewSearch63f6f73973aa430e999a886dcc80d137 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, options),
    method: 'get',
})

ViewSearch63f6f73973aa430e999a886dcc80d137.definition = {
    methods: ["get","head"],
    url: '/nds/stats/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
ViewSearch63f6f73973aa430e999a886dcc80d137.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch63f6f73973aa430e999a886dcc80d137.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
ViewSearch63f6f73973aa430e999a886dcc80d137.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
ViewSearch63f6f73973aa430e999a886dcc80d137.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
const ViewSearch63f6f73973aa430e999a886dcc80d137Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
ViewSearch63f6f73973aa430e999a886dcc80d137Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/stats/searches/{record}'
*/
ViewSearch63f6f73973aa430e999a886dcc80d137Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch63f6f73973aa430e999a886dcc80d137.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch63f6f73973aa430e999a886dcc80d137.form = ViewSearch63f6f73973aa430e999a886dcc80d137Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
const ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, options),
    method: 'get',
})

ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.definition = {
    methods: ["get","head"],
    url: '/nds/storage/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
const ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/storage/searches/{record}'
*/
ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63.form = ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
const ViewSearchc7b64da76280f12e065240109903bdf7 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, options),
    method: 'get',
})

ViewSearchc7b64da76280f12e065240109903bdf7.definition = {
    methods: ["get","head"],
    url: '/nds/system/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
ViewSearchc7b64da76280f12e065240109903bdf7.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearchc7b64da76280f12e065240109903bdf7.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
ViewSearchc7b64da76280f12e065240109903bdf7.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
ViewSearchc7b64da76280f12e065240109903bdf7.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
const ViewSearchc7b64da76280f12e065240109903bdf7Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
ViewSearchc7b64da76280f12e065240109903bdf7Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/system/searches/{record}'
*/
ViewSearchc7b64da76280f12e065240109903bdf7Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchc7b64da76280f12e065240109903bdf7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchc7b64da76280f12e065240109903bdf7.form = ViewSearchc7b64da76280f12e065240109903bdf7Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
const ViewSearch42c925e50350757508354d24b49ec126 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

ViewSearch42c925e50350757508354d24b49ec126.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch42c925e50350757508354d24b49ec126.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
const ViewSearch42c925e50350757508354d24b49ec126Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch42c925e50350757508354d24b49ec126.form = ViewSearch42c925e50350757508354d24b49ec126Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
const ViewSearch6a0af25187a5bea765b0a7347c85a2ee = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, options),
    method: 'get',
})

ViewSearch6a0af25187a5bea765b0a7347c85a2ee.definition = {
    methods: ["get","head"],
    url: '/nds/user/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewSearch6a0af25187a5bea765b0a7347c85a2ee.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
ViewSearch6a0af25187a5bea765b0a7347c85a2ee.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
ViewSearch6a0af25187a5bea765b0a7347c85a2ee.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
const ViewSearch6a0af25187a5bea765b0a7347c85a2eeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
ViewSearch6a0af25187a5bea765b0a7347c85a2eeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/user/searches/{record}'
*/
ViewSearch6a0af25187a5bea765b0a7347c85a2eeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch6a0af25187a5bea765b0a7347c85a2ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch6a0af25187a5bea765b0a7347c85a2ee.form = ViewSearch6a0af25187a5bea765b0a7347c85a2eeForm

const ViewSearch = {
    '/nds/booking/searches/{record}': ViewSearch1457e2c48bc4996e06d2f95be512b6bd,
    '/nds/chat/searches/{record}': ViewSearchfefe59097a80b5de71cc5c89986c3f77,
    '/nds/clients/searches/{record}': ViewSearch9d128ea3441e08d459c44b720851564b,
    '/nds/dev/searches/{record}': ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0,
    '/nds/dialer/searches/{record}': ViewSearch50894667cd2a13857913ef0a1a217513,
    '/nds/email/searches/{record}': ViewSearch617d0b3b23ebe9d5c76012697abb10b6,
    '/nds/files/searches/{record}': ViewSearch636a65f3579a2295a83bbf8be3ae90f5,
    '/nds/finance/searches/{record}': ViewSearch095d73eaa292b240c8ef64296dbb1f01,
    '/nds/locale/searches/{record}': ViewSearch56744b4cea9a51605d4c84d9d24656b8,
    '/nds/manager/searches/{record}': ViewSearch88af849079d1ad0b53a36dc58ba03928,
    '/nds/notify/searches/{record}': ViewSearch4af21ec6c42f540005910381a28c1d73,
    '/nds/partner/searches/{record}': ViewSearcheb15ecb2f9fcb427876969075103fead,
    '/nds/private/searches/{record}': ViewSearch37a8dfb48de92d02aad407ab52681bf2,
    '/nds/queue/searches/{record}': ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d,
    '/nds/script/searches/{record}': ViewSearchd2e3eba5c729c728fd45026005328d36,
    '/nds/server/searches/{record}': ViewSearch637d65a8c7f695dd4fe389513b1dc3c8,
    '/nds/service/searches/{record}': ViewSearch9ce3a1c9bc470fc4cef527b03295ea76,
    '/nds/sheets/searches/{record}': ViewSearch24df32d46b1fd3c4ae5556829eceedc9,
    '/nds/stats/searches/{record}': ViewSearch63f6f73973aa430e999a886dcc80d137,
    '/nds/storage/searches/{record}': ViewSearch9a5101c16ea7ab44b0a3f9b058bbda63,
    '/nds/system/searches/{record}': ViewSearchc7b64da76280f12e065240109903bdf7,
    '/nds/tools/searches/{record}': ViewSearch42c925e50350757508354d24b49ec126,
    '/nds/user/searches/{record}': ViewSearch6a0af25187a5bea765b0a7347c85a2ee,
}

export default ViewSearch