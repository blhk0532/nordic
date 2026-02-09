import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
const EditSearchf604a699f73eb8d346b14abf61d46b2d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

EditSearchf604a699f73eb8d346b14abf61d46b2d.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchf604a699f73eb8d346b14abf61d46b2d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
const EditSearchf604a699f73eb8d346b14abf61d46b2dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchf604a699f73eb8d346b14abf61d46b2d.form = EditSearchf604a699f73eb8d346b14abf61d46b2dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
const EditSearchc8f69e27d44a8ca9e12ca137e37fd714 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

EditSearchc8f69e27d44a8ca9e12ca137e37fd714.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchc8f69e27d44a8ca9e12ca137e37fd714.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
const EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchc8f69e27d44a8ca9e12ca137e37fd714.form = EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
const EditSearche22b7d82bc900075ffb091e8417be91b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, options),
    method: 'get',
})

EditSearche22b7d82bc900075ffb091e8417be91b.definition = {
    methods: ["get","head"],
    url: '/nds/clients/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
EditSearche22b7d82bc900075ffb091e8417be91b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearche22b7d82bc900075ffb091e8417be91b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
EditSearche22b7d82bc900075ffb091e8417be91b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
EditSearche22b7d82bc900075ffb091e8417be91b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
const EditSearche22b7d82bc900075ffb091e8417be91bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
EditSearche22b7d82bc900075ffb091e8417be91bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/clients/searches/{record}/edit'
*/
EditSearche22b7d82bc900075ffb091e8417be91bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearche22b7d82bc900075ffb091e8417be91b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearche22b7d82bc900075ffb091e8417be91b.form = EditSearche22b7d82bc900075ffb091e8417be91bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
const EditSearch71ccbb5d60114277c98cc1ee95d45e49 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

EditSearch71ccbb5d60114277c98cc1ee95d45e49.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch71ccbb5d60114277c98cc1ee95d45e49.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
const EditSearch71ccbb5d60114277c98cc1ee95d45e49Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch71ccbb5d60114277c98cc1ee95d45e49.form = EditSearch71ccbb5d60114277c98cc1ee95d45e49Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
const EditSearcha1e31ed51d604aeb0ff42ec4cb857a34 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, options),
    method: 'get',
})

EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
const EditSearcha1e31ed51d604aeb0ff42ec4cb857a34Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
EditSearcha1e31ed51d604aeb0ff42ec4cb857a34Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dialer/searches/{record}/edit'
*/
EditSearcha1e31ed51d604aeb0ff42ec4cb857a34Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearcha1e31ed51d604aeb0ff42ec4cb857a34.form = EditSearcha1e31ed51d604aeb0ff42ec4cb857a34Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
const EditSearcha191a51652a5fa9d93c25d5083cab30f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

EditSearcha191a51652a5fa9d93c25d5083cab30f.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearcha191a51652a5fa9d93c25d5083cab30f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
const EditSearcha191a51652a5fa9d93c25d5083cab30fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearcha191a51652a5fa9d93c25d5083cab30f.form = EditSearcha191a51652a5fa9d93c25d5083cab30fForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
const EditSearch5bd8e8e5516b45b2108bb63330e8249b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

EditSearch5bd8e8e5516b45b2108bb63330e8249b.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch5bd8e8e5516b45b2108bb63330e8249b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
const EditSearch5bd8e8e5516b45b2108bb63330e8249bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch5bd8e8e5516b45b2108bb63330e8249b.form = EditSearch5bd8e8e5516b45b2108bb63330e8249bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
const EditSearchad16da3d4f78caa9fa47a5bbea339e1d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, options),
    method: 'get',
})

EditSearchad16da3d4f78caa9fa47a5bbea339e1d.definition = {
    methods: ["get","head"],
    url: '/nds/finance/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchad16da3d4f78caa9fa47a5bbea339e1d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
EditSearchad16da3d4f78caa9fa47a5bbea339e1d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
EditSearchad16da3d4f78caa9fa47a5bbea339e1d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
const EditSearchad16da3d4f78caa9fa47a5bbea339e1dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
EditSearchad16da3d4f78caa9fa47a5bbea339e1dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/finance/searches/{record}/edit'
*/
EditSearchad16da3d4f78caa9fa47a5bbea339e1dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchad16da3d4f78caa9fa47a5bbea339e1d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchad16da3d4f78caa9fa47a5bbea339e1d.form = EditSearchad16da3d4f78caa9fa47a5bbea339e1dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
const EditSearch9d0e3dd8e4143976a99a385517c7cde8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, options),
    method: 'get',
})

EditSearch9d0e3dd8e4143976a99a385517c7cde8.definition = {
    methods: ["get","head"],
    url: '/nds/locale/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
EditSearch9d0e3dd8e4143976a99a385517c7cde8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch9d0e3dd8e4143976a99a385517c7cde8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
EditSearch9d0e3dd8e4143976a99a385517c7cde8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
EditSearch9d0e3dd8e4143976a99a385517c7cde8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
const EditSearch9d0e3dd8e4143976a99a385517c7cde8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
EditSearch9d0e3dd8e4143976a99a385517c7cde8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/locale/searches/{record}/edit'
*/
EditSearch9d0e3dd8e4143976a99a385517c7cde8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch9d0e3dd8e4143976a99a385517c7cde8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch9d0e3dd8e4143976a99a385517c7cde8.form = EditSearch9d0e3dd8e4143976a99a385517c7cde8Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
const EditSearchb96e2a21b103efff5b5448918e928ea8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, options),
    method: 'get',
})

EditSearchb96e2a21b103efff5b5448918e928ea8.definition = {
    methods: ["get","head"],
    url: '/nds/manager/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
EditSearchb96e2a21b103efff5b5448918e928ea8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchb96e2a21b103efff5b5448918e928ea8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
EditSearchb96e2a21b103efff5b5448918e928ea8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
EditSearchb96e2a21b103efff5b5448918e928ea8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
const EditSearchb96e2a21b103efff5b5448918e928ea8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
EditSearchb96e2a21b103efff5b5448918e928ea8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/manager/searches/{record}/edit'
*/
EditSearchb96e2a21b103efff5b5448918e928ea8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb96e2a21b103efff5b5448918e928ea8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchb96e2a21b103efff5b5448918e928ea8.form = EditSearchb96e2a21b103efff5b5448918e928ea8Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
const EditSearch6fcfe6ae94d2f0d214ff5e9488049e53 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
const EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.form = EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
const EditSearchf51c947f8c2ed870a26fedef634b155f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, options),
    method: 'get',
})

EditSearchf51c947f8c2ed870a26fedef634b155f.definition = {
    methods: ["get","head"],
    url: '/nds/partner/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
EditSearchf51c947f8c2ed870a26fedef634b155f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchf51c947f8c2ed870a26fedef634b155f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
EditSearchf51c947f8c2ed870a26fedef634b155f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
EditSearchf51c947f8c2ed870a26fedef634b155f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
const EditSearchf51c947f8c2ed870a26fedef634b155fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
EditSearchf51c947f8c2ed870a26fedef634b155fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/partner/searches/{record}/edit'
*/
EditSearchf51c947f8c2ed870a26fedef634b155fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf51c947f8c2ed870a26fedef634b155f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchf51c947f8c2ed870a26fedef634b155f.form = EditSearchf51c947f8c2ed870a26fedef634b155fForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
const EditSearchb4243ac72406c12cab5423a13b2834b4 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, options),
    method: 'get',
})

EditSearchb4243ac72406c12cab5423a13b2834b4.definition = {
    methods: ["get","head"],
    url: '/nds/private/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
EditSearchb4243ac72406c12cab5423a13b2834b4.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchb4243ac72406c12cab5423a13b2834b4.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
EditSearchb4243ac72406c12cab5423a13b2834b4.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
EditSearchb4243ac72406c12cab5423a13b2834b4.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
const EditSearchb4243ac72406c12cab5423a13b2834b4Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
EditSearchb4243ac72406c12cab5423a13b2834b4Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/private/searches/{record}/edit'
*/
EditSearchb4243ac72406c12cab5423a13b2834b4Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchb4243ac72406c12cab5423a13b2834b4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchb4243ac72406c12cab5423a13b2834b4.form = EditSearchb4243ac72406c12cab5423a13b2834b4Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
const EditSearch99b6400dfec4104608439f83cac86521 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

EditSearch99b6400dfec4104608439f83cac86521.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch99b6400dfec4104608439f83cac86521.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
const EditSearch99b6400dfec4104608439f83cac86521Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch99b6400dfec4104608439f83cac86521.form = EditSearch99b6400dfec4104608439f83cac86521Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
const EditSearch01b715502e5982792f11e79f42f80490 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch01b715502e5982792f11e79f42f80490.url(args, options),
    method: 'get',
})

EditSearch01b715502e5982792f11e79f42f80490.definition = {
    methods: ["get","head"],
    url: '/nds/script/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
EditSearch01b715502e5982792f11e79f42f80490.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch01b715502e5982792f11e79f42f80490.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
EditSearch01b715502e5982792f11e79f42f80490.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch01b715502e5982792f11e79f42f80490.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
EditSearch01b715502e5982792f11e79f42f80490.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch01b715502e5982792f11e79f42f80490.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
const EditSearch01b715502e5982792f11e79f42f80490Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch01b715502e5982792f11e79f42f80490.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
EditSearch01b715502e5982792f11e79f42f80490Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch01b715502e5982792f11e79f42f80490.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/script/searches/{record}/edit'
*/
EditSearch01b715502e5982792f11e79f42f80490Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch01b715502e5982792f11e79f42f80490.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch01b715502e5982792f11e79f42f80490.form = EditSearch01b715502e5982792f11e79f42f80490Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
const EditSearchba4370b5794b8f8f5c8de70687380619 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, options),
    method: 'get',
})

EditSearchba4370b5794b8f8f5c8de70687380619.definition = {
    methods: ["get","head"],
    url: '/nds/server/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
EditSearchba4370b5794b8f8f5c8de70687380619.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchba4370b5794b8f8f5c8de70687380619.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
EditSearchba4370b5794b8f8f5c8de70687380619.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
EditSearchba4370b5794b8f8f5c8de70687380619.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
const EditSearchba4370b5794b8f8f5c8de70687380619Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
EditSearchba4370b5794b8f8f5c8de70687380619Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/server/searches/{record}/edit'
*/
EditSearchba4370b5794b8f8f5c8de70687380619Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchba4370b5794b8f8f5c8de70687380619.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchba4370b5794b8f8f5c8de70687380619.form = EditSearchba4370b5794b8f8f5c8de70687380619Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
const EditSearch2ed9208f5dbc5fd59754cf08673431d9 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, options),
    method: 'get',
})

EditSearch2ed9208f5dbc5fd59754cf08673431d9.definition = {
    methods: ["get","head"],
    url: '/nds/service/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
EditSearch2ed9208f5dbc5fd59754cf08673431d9.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch2ed9208f5dbc5fd59754cf08673431d9.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
EditSearch2ed9208f5dbc5fd59754cf08673431d9.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
EditSearch2ed9208f5dbc5fd59754cf08673431d9.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
const EditSearch2ed9208f5dbc5fd59754cf08673431d9Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
EditSearch2ed9208f5dbc5fd59754cf08673431d9Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/service/searches/{record}/edit'
*/
EditSearch2ed9208f5dbc5fd59754cf08673431d9Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch2ed9208f5dbc5fd59754cf08673431d9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch2ed9208f5dbc5fd59754cf08673431d9.form = EditSearch2ed9208f5dbc5fd59754cf08673431d9Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
const EditSearch607689c49fa14a6c5a28effceec8d006 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, options),
    method: 'get',
})

EditSearch607689c49fa14a6c5a28effceec8d006.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
EditSearch607689c49fa14a6c5a28effceec8d006.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch607689c49fa14a6c5a28effceec8d006.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
EditSearch607689c49fa14a6c5a28effceec8d006.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
EditSearch607689c49fa14a6c5a28effceec8d006.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
const EditSearch607689c49fa14a6c5a28effceec8d006Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
EditSearch607689c49fa14a6c5a28effceec8d006Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/sheets/searches/{record}/edit'
*/
EditSearch607689c49fa14a6c5a28effceec8d006Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch607689c49fa14a6c5a28effceec8d006.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch607689c49fa14a6c5a28effceec8d006.form = EditSearch607689c49fa14a6c5a28effceec8d006Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
const EditSearch6b44de306d48891572b00c09f524f529 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6b44de306d48891572b00c09f524f529.url(args, options),
    method: 'get',
})

EditSearch6b44de306d48891572b00c09f524f529.definition = {
    methods: ["get","head"],
    url: '/nds/stats/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
EditSearch6b44de306d48891572b00c09f524f529.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch6b44de306d48891572b00c09f524f529.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
EditSearch6b44de306d48891572b00c09f524f529.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6b44de306d48891572b00c09f524f529.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
EditSearch6b44de306d48891572b00c09f524f529.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch6b44de306d48891572b00c09f524f529.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
const EditSearch6b44de306d48891572b00c09f524f529Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6b44de306d48891572b00c09f524f529.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
EditSearch6b44de306d48891572b00c09f524f529Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6b44de306d48891572b00c09f524f529.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/stats/searches/{record}/edit'
*/
EditSearch6b44de306d48891572b00c09f524f529Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6b44de306d48891572b00c09f524f529.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch6b44de306d48891572b00c09f524f529.form = EditSearch6b44de306d48891572b00c09f524f529Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
const EditSearch7abfb126dfccf0cb80389412975012a1 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, options),
    method: 'get',
})

EditSearch7abfb126dfccf0cb80389412975012a1.definition = {
    methods: ["get","head"],
    url: '/nds/storage/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
EditSearch7abfb126dfccf0cb80389412975012a1.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch7abfb126dfccf0cb80389412975012a1.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
EditSearch7abfb126dfccf0cb80389412975012a1.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
EditSearch7abfb126dfccf0cb80389412975012a1.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
const EditSearch7abfb126dfccf0cb80389412975012a1Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
EditSearch7abfb126dfccf0cb80389412975012a1Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/storage/searches/{record}/edit'
*/
EditSearch7abfb126dfccf0cb80389412975012a1Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch7abfb126dfccf0cb80389412975012a1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch7abfb126dfccf0cb80389412975012a1.form = EditSearch7abfb126dfccf0cb80389412975012a1Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
const EditSearch82aaa2a2f47ba99c4398f807dba28507 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, options),
    method: 'get',
})

EditSearch82aaa2a2f47ba99c4398f807dba28507.definition = {
    methods: ["get","head"],
    url: '/nds/system/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
EditSearch82aaa2a2f47ba99c4398f807dba28507.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch82aaa2a2f47ba99c4398f807dba28507.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
EditSearch82aaa2a2f47ba99c4398f807dba28507.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
EditSearch82aaa2a2f47ba99c4398f807dba28507.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
const EditSearch82aaa2a2f47ba99c4398f807dba28507Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
EditSearch82aaa2a2f47ba99c4398f807dba28507Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/system/searches/{record}/edit'
*/
EditSearch82aaa2a2f47ba99c4398f807dba28507Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch82aaa2a2f47ba99c4398f807dba28507.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch82aaa2a2f47ba99c4398f807dba28507.form = EditSearch82aaa2a2f47ba99c4398f807dba28507Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
const EditSearchf06000cfcb91b5089856c20a354e2483 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

EditSearchf06000cfcb91b5089856c20a354e2483.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchf06000cfcb91b5089856c20a354e2483.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
const EditSearchf06000cfcb91b5089856c20a354e2483Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchf06000cfcb91b5089856c20a354e2483.form = EditSearchf06000cfcb91b5089856c20a354e2483Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
const EditSearch6852204c13f731da10d66b7aaafc13b5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, options),
    method: 'get',
})

EditSearch6852204c13f731da10d66b7aaafc13b5.definition = {
    methods: ["get","head"],
    url: '/nds/user/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
EditSearch6852204c13f731da10d66b7aaafc13b5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch6852204c13f731da10d66b7aaafc13b5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
EditSearch6852204c13f731da10d66b7aaafc13b5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
EditSearch6852204c13f731da10d66b7aaafc13b5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
const EditSearch6852204c13f731da10d66b7aaafc13b5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
EditSearch6852204c13f731da10d66b7aaafc13b5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/user/searches/{record}/edit'
*/
EditSearch6852204c13f731da10d66b7aaafc13b5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6852204c13f731da10d66b7aaafc13b5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch6852204c13f731da10d66b7aaafc13b5.form = EditSearch6852204c13f731da10d66b7aaafc13b5Form

const EditSearch = {
    '/nds/booking/searches/{record}/edit': EditSearchf604a699f73eb8d346b14abf61d46b2d,
    '/nds/chat/searches/{record}/edit': EditSearchc8f69e27d44a8ca9e12ca137e37fd714,
    '/nds/clients/searches/{record}/edit': EditSearche22b7d82bc900075ffb091e8417be91b,
    '/nds/dev/searches/{record}/edit': EditSearch71ccbb5d60114277c98cc1ee95d45e49,
    '/nds/dialer/searches/{record}/edit': EditSearcha1e31ed51d604aeb0ff42ec4cb857a34,
    '/nds/email/searches/{record}/edit': EditSearcha191a51652a5fa9d93c25d5083cab30f,
    '/nds/files/searches/{record}/edit': EditSearch5bd8e8e5516b45b2108bb63330e8249b,
    '/nds/finance/searches/{record}/edit': EditSearchad16da3d4f78caa9fa47a5bbea339e1d,
    '/nds/locale/searches/{record}/edit': EditSearch9d0e3dd8e4143976a99a385517c7cde8,
    '/nds/manager/searches/{record}/edit': EditSearchb96e2a21b103efff5b5448918e928ea8,
    '/nds/notify/searches/{record}/edit': EditSearch6fcfe6ae94d2f0d214ff5e9488049e53,
    '/nds/partner/searches/{record}/edit': EditSearchf51c947f8c2ed870a26fedef634b155f,
    '/nds/private/searches/{record}/edit': EditSearchb4243ac72406c12cab5423a13b2834b4,
    '/nds/queue/searches/{record}/edit': EditSearch99b6400dfec4104608439f83cac86521,
    '/nds/script/searches/{record}/edit': EditSearch01b715502e5982792f11e79f42f80490,
    '/nds/server/searches/{record}/edit': EditSearchba4370b5794b8f8f5c8de70687380619,
    '/nds/service/searches/{record}/edit': EditSearch2ed9208f5dbc5fd59754cf08673431d9,
    '/nds/sheets/searches/{record}/edit': EditSearch607689c49fa14a6c5a28effceec8d006,
    '/nds/stats/searches/{record}/edit': EditSearch6b44de306d48891572b00c09f524f529,
    '/nds/storage/searches/{record}/edit': EditSearch7abfb126dfccf0cb80389412975012a1,
    '/nds/system/searches/{record}/edit': EditSearch82aaa2a2f47ba99c4398f807dba28507,
    '/nds/tools/searches/{record}/edit': EditSearchf06000cfcb91b5089856c20a354e2483,
    '/nds/user/searches/{record}/edit': EditSearch6852204c13f731da10d66b7aaafc13b5,
}

export default EditSearch