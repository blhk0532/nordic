import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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

const ViewSearch = {
    '/nds/chat/searches/{record}': ViewSearchfefe59097a80b5de71cc5c89986c3f77,
    '/nds/notify/searches/{record}': ViewSearch4af21ec6c42f540005910381a28c1d73,
    '/nds/tools/searches/{record}': ViewSearch42c925e50350757508354d24b49ec126,
}

export default ViewSearch