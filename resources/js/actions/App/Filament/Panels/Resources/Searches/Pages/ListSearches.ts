import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
const ListSearches0b27a2039d6f08c78d83e0b03fb6d512 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

ListSearches0b27a2039d6f08c78d83e0b03fb6d512.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url = (options?: RouteQueryOptions) => {
    return ListSearches0b27a2039d6f08c78d83e0b03fb6d512.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
const ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0b27a2039d6f08c78d83e0b03fb6d512.form = ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
const ListSearches0d679ef96ce513ca3873950998731deb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

ListSearches0d679ef96ce513ca3873950998731deb.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.url = (options?: RouteQueryOptions) => {
    return ListSearches0d679ef96ce513ca3873950998731deb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
const ListSearches0d679ef96ce513ca3873950998731debForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731debForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731debForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0d679ef96ce513ca3873950998731deb.form = ListSearches0d679ef96ce513ca3873950998731debForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
const ListSearchesc73c85ed91d22e70997713eef8e7f8f6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url(options),
    method: 'get',
})

ListSearchesc73c85ed91d22e70997713eef8e7f8f6.definition = {
    methods: ["get","head"],
    url: '/nds/clients/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url = (options?: RouteQueryOptions) => {
    return ListSearchesc73c85ed91d22e70997713eef8e7f8f6.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
ListSearchesc73c85ed91d22e70997713eef8e7f8f6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
ListSearchesc73c85ed91d22e70997713eef8e7f8f6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
const ListSearchesc73c85ed91d22e70997713eef8e7f8f6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
ListSearchesc73c85ed91d22e70997713eef8e7f8f6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/clients/searches'
*/
ListSearchesc73c85ed91d22e70997713eef8e7f8f6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc73c85ed91d22e70997713eef8e7f8f6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesc73c85ed91d22e70997713eef8e7f8f6.form = ListSearchesc73c85ed91d22e70997713eef8e7f8f6Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
const ListSearches090dc064749d084a15b927d3b7ab324a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

ListSearches090dc064749d084a15b927d3b7ab324a.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.url = (options?: RouteQueryOptions) => {
    return ListSearches090dc064749d084a15b927d3b7ab324a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
const ListSearches090dc064749d084a15b927d3b7ab324aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches090dc064749d084a15b927d3b7ab324a.form = ListSearches090dc064749d084a15b927d3b7ab324aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
const ListSearchesb24754b2605325ffce339537298b48fd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesb24754b2605325ffce339537298b48fd.url(options),
    method: 'get',
})

ListSearchesb24754b2605325ffce339537298b48fd.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
ListSearchesb24754b2605325ffce339537298b48fd.url = (options?: RouteQueryOptions) => {
    return ListSearchesb24754b2605325ffce339537298b48fd.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
ListSearchesb24754b2605325ffce339537298b48fd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesb24754b2605325ffce339537298b48fd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
ListSearchesb24754b2605325ffce339537298b48fd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesb24754b2605325ffce339537298b48fd.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
const ListSearchesb24754b2605325ffce339537298b48fdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesb24754b2605325ffce339537298b48fd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
ListSearchesb24754b2605325ffce339537298b48fdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesb24754b2605325ffce339537298b48fd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dialer/searches'
*/
ListSearchesb24754b2605325ffce339537298b48fdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesb24754b2605325ffce339537298b48fd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesb24754b2605325ffce339537298b48fd.form = ListSearchesb24754b2605325ffce339537298b48fdForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
const ListSearches6efc96f1788b29f160513ae9e9ad2820 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

ListSearches6efc96f1788b29f160513ae9e9ad2820.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.url = (options?: RouteQueryOptions) => {
    return ListSearches6efc96f1788b29f160513ae9e9ad2820.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
const ListSearches6efc96f1788b29f160513ae9e9ad2820Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches6efc96f1788b29f160513ae9e9ad2820.form = ListSearches6efc96f1788b29f160513ae9e9ad2820Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
const ListSearches9f23a05972b2ea1a4a8ca6fae373091a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

ListSearches9f23a05972b2ea1a4a8ca6fae373091a.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url = (options?: RouteQueryOptions) => {
    return ListSearches9f23a05972b2ea1a4a8ca6fae373091a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
const ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches9f23a05972b2ea1a4a8ca6fae373091a.form = ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
const ListSearches0a2e4c116815fcfe554bfc67bc67168c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url(options),
    method: 'get',
})

ListSearches0a2e4c116815fcfe554bfc67bc67168c.definition = {
    methods: ["get","head"],
    url: '/nds/finance/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
ListSearches0a2e4c116815fcfe554bfc67bc67168c.url = (options?: RouteQueryOptions) => {
    return ListSearches0a2e4c116815fcfe554bfc67bc67168c.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
ListSearches0a2e4c116815fcfe554bfc67bc67168c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
ListSearches0a2e4c116815fcfe554bfc67bc67168c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
const ListSearches0a2e4c116815fcfe554bfc67bc67168cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
ListSearches0a2e4c116815fcfe554bfc67bc67168cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/finance/searches'
*/
ListSearches0a2e4c116815fcfe554bfc67bc67168cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a2e4c116815fcfe554bfc67bc67168c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0a2e4c116815fcfe554bfc67bc67168c.form = ListSearches0a2e4c116815fcfe554bfc67bc67168cForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
const ListSearches524e0734c876eba48aff248f76ff0243 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches524e0734c876eba48aff248f76ff0243.url(options),
    method: 'get',
})

ListSearches524e0734c876eba48aff248f76ff0243.definition = {
    methods: ["get","head"],
    url: '/nds/locale/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
ListSearches524e0734c876eba48aff248f76ff0243.url = (options?: RouteQueryOptions) => {
    return ListSearches524e0734c876eba48aff248f76ff0243.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
ListSearches524e0734c876eba48aff248f76ff0243.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches524e0734c876eba48aff248f76ff0243.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
ListSearches524e0734c876eba48aff248f76ff0243.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches524e0734c876eba48aff248f76ff0243.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
const ListSearches524e0734c876eba48aff248f76ff0243Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches524e0734c876eba48aff248f76ff0243.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
ListSearches524e0734c876eba48aff248f76ff0243Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches524e0734c876eba48aff248f76ff0243.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/locale/searches'
*/
ListSearches524e0734c876eba48aff248f76ff0243Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches524e0734c876eba48aff248f76ff0243.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches524e0734c876eba48aff248f76ff0243.form = ListSearches524e0734c876eba48aff248f76ff0243Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
const ListSearches3ef5463b9eb60056de6c840e7f8ffb40 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url(options),
    method: 'get',
})

ListSearches3ef5463b9eb60056de6c840e7f8ffb40.definition = {
    methods: ["get","head"],
    url: '/nds/manager/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url = (options?: RouteQueryOptions) => {
    return ListSearches3ef5463b9eb60056de6c840e7f8ffb40.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
ListSearches3ef5463b9eb60056de6c840e7f8ffb40.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
ListSearches3ef5463b9eb60056de6c840e7f8ffb40.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
const ListSearches3ef5463b9eb60056de6c840e7f8ffb40Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
ListSearches3ef5463b9eb60056de6c840e7f8ffb40Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/manager/searches'
*/
ListSearches3ef5463b9eb60056de6c840e7f8ffb40Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3ef5463b9eb60056de6c840e7f8ffb40.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches3ef5463b9eb60056de6c840e7f8ffb40.form = ListSearches3ef5463b9eb60056de6c840e7f8ffb40Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
const ListSearchesc17433135a23af775220e3657f664cdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

ListSearchesc17433135a23af775220e3657f664cdf.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.url = (options?: RouteQueryOptions) => {
    return ListSearchesc17433135a23af775220e3657f664cdf.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
const ListSearchesc17433135a23af775220e3657f664cdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesc17433135a23af775220e3657f664cdf.form = ListSearchesc17433135a23af775220e3657f664cdfForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
const ListSearchesdd5984499803f1b7a18929fcc4f00cc5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url(options),
    method: 'get',
})

ListSearchesdd5984499803f1b7a18929fcc4f00cc5.definition = {
    methods: ["get","head"],
    url: '/nds/partner/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url = (options?: RouteQueryOptions) => {
    return ListSearchesdd5984499803f1b7a18929fcc4f00cc5.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
ListSearchesdd5984499803f1b7a18929fcc4f00cc5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
ListSearchesdd5984499803f1b7a18929fcc4f00cc5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
const ListSearchesdd5984499803f1b7a18929fcc4f00cc5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
ListSearchesdd5984499803f1b7a18929fcc4f00cc5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/partner/searches'
*/
ListSearchesdd5984499803f1b7a18929fcc4f00cc5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesdd5984499803f1b7a18929fcc4f00cc5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesdd5984499803f1b7a18929fcc4f00cc5.form = ListSearchesdd5984499803f1b7a18929fcc4f00cc5Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
const ListSearches3069a9ecd202940ae42a6279d675c934 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches3069a9ecd202940ae42a6279d675c934.url(options),
    method: 'get',
})

ListSearches3069a9ecd202940ae42a6279d675c934.definition = {
    methods: ["get","head"],
    url: '/nds/private/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
ListSearches3069a9ecd202940ae42a6279d675c934.url = (options?: RouteQueryOptions) => {
    return ListSearches3069a9ecd202940ae42a6279d675c934.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
ListSearches3069a9ecd202940ae42a6279d675c934.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches3069a9ecd202940ae42a6279d675c934.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
ListSearches3069a9ecd202940ae42a6279d675c934.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches3069a9ecd202940ae42a6279d675c934.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
const ListSearches3069a9ecd202940ae42a6279d675c934Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3069a9ecd202940ae42a6279d675c934.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
ListSearches3069a9ecd202940ae42a6279d675c934Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3069a9ecd202940ae42a6279d675c934.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/private/searches'
*/
ListSearches3069a9ecd202940ae42a6279d675c934Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches3069a9ecd202940ae42a6279d675c934.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches3069a9ecd202940ae42a6279d675c934.form = ListSearches3069a9ecd202940ae42a6279d675c934Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
const ListSearches548c615b669dfb46e86cb1a21cb1d2bf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

ListSearches548c615b669dfb46e86cb1a21cb1d2bf.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url = (options?: RouteQueryOptions) => {
    return ListSearches548c615b669dfb46e86cb1a21cb1d2bf.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
const ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches548c615b669dfb46e86cb1a21cb1d2bf.form = ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
const ListSearches9e7ca963ef37a8a92f0b661fd1b3a078 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url(options),
    method: 'get',
})

ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.definition = {
    methods: ["get","head"],
    url: '/nds/script/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url = (options?: RouteQueryOptions) => {
    return ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
const ListSearches9e7ca963ef37a8a92f0b661fd1b3a078Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
ListSearches9e7ca963ef37a8a92f0b661fd1b3a078Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/script/searches'
*/
ListSearches9e7ca963ef37a8a92f0b661fd1b3a078Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches9e7ca963ef37a8a92f0b661fd1b3a078.form = ListSearches9e7ca963ef37a8a92f0b661fd1b3a078Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
const ListSearches00069fb424b0186b5c352201b96de2fb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches00069fb424b0186b5c352201b96de2fb.url(options),
    method: 'get',
})

ListSearches00069fb424b0186b5c352201b96de2fb.definition = {
    methods: ["get","head"],
    url: '/nds/server/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
ListSearches00069fb424b0186b5c352201b96de2fb.url = (options?: RouteQueryOptions) => {
    return ListSearches00069fb424b0186b5c352201b96de2fb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
ListSearches00069fb424b0186b5c352201b96de2fb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches00069fb424b0186b5c352201b96de2fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
ListSearches00069fb424b0186b5c352201b96de2fb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches00069fb424b0186b5c352201b96de2fb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
const ListSearches00069fb424b0186b5c352201b96de2fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches00069fb424b0186b5c352201b96de2fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
ListSearches00069fb424b0186b5c352201b96de2fbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches00069fb424b0186b5c352201b96de2fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/server/searches'
*/
ListSearches00069fb424b0186b5c352201b96de2fbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches00069fb424b0186b5c352201b96de2fb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches00069fb424b0186b5c352201b96de2fb.form = ListSearches00069fb424b0186b5c352201b96de2fbForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
const ListSearches61900a950b90b0b36273638a7fdc40fb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches61900a950b90b0b36273638a7fdc40fb.url(options),
    method: 'get',
})

ListSearches61900a950b90b0b36273638a7fdc40fb.definition = {
    methods: ["get","head"],
    url: '/nds/service/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
ListSearches61900a950b90b0b36273638a7fdc40fb.url = (options?: RouteQueryOptions) => {
    return ListSearches61900a950b90b0b36273638a7fdc40fb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
ListSearches61900a950b90b0b36273638a7fdc40fb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches61900a950b90b0b36273638a7fdc40fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
ListSearches61900a950b90b0b36273638a7fdc40fb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches61900a950b90b0b36273638a7fdc40fb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
const ListSearches61900a950b90b0b36273638a7fdc40fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches61900a950b90b0b36273638a7fdc40fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
ListSearches61900a950b90b0b36273638a7fdc40fbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches61900a950b90b0b36273638a7fdc40fb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/service/searches'
*/
ListSearches61900a950b90b0b36273638a7fdc40fbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches61900a950b90b0b36273638a7fdc40fb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches61900a950b90b0b36273638a7fdc40fb.form = ListSearches61900a950b90b0b36273638a7fdc40fbForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
const ListSearchesadef4cad0adddc21c0b22e3eed4c15eb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url(options),
    method: 'get',
})

ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url = (options?: RouteQueryOptions) => {
    return ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
const ListSearchesadef4cad0adddc21c0b22e3eed4c15ebForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
ListSearchesadef4cad0adddc21c0b22e3eed4c15ebForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/sheets/searches'
*/
ListSearchesadef4cad0adddc21c0b22e3eed4c15ebForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesadef4cad0adddc21c0b22e3eed4c15eb.form = ListSearchesadef4cad0adddc21c0b22e3eed4c15ebForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
const ListSearches4424e0eb87f9b5e3119bab2734af54e3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url(options),
    method: 'get',
})

ListSearches4424e0eb87f9b5e3119bab2734af54e3.definition = {
    methods: ["get","head"],
    url: '/nds/stats/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
ListSearches4424e0eb87f9b5e3119bab2734af54e3.url = (options?: RouteQueryOptions) => {
    return ListSearches4424e0eb87f9b5e3119bab2734af54e3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
ListSearches4424e0eb87f9b5e3119bab2734af54e3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
ListSearches4424e0eb87f9b5e3119bab2734af54e3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
const ListSearches4424e0eb87f9b5e3119bab2734af54e3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
ListSearches4424e0eb87f9b5e3119bab2734af54e3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/stats/searches'
*/
ListSearches4424e0eb87f9b5e3119bab2734af54e3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches4424e0eb87f9b5e3119bab2734af54e3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches4424e0eb87f9b5e3119bab2734af54e3.form = ListSearches4424e0eb87f9b5e3119bab2734af54e3Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
const ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url(options),
    method: 'get',
})

ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.definition = {
    methods: ["get","head"],
    url: '/nds/storage/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url = (options?: RouteQueryOptions) => {
    return ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
const ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/storage/searches'
*/
ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126.form = ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
const ListSearchesc6921ca6019abc5c34669805459c6bc2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc6921ca6019abc5c34669805459c6bc2.url(options),
    method: 'get',
})

ListSearchesc6921ca6019abc5c34669805459c6bc2.definition = {
    methods: ["get","head"],
    url: '/nds/system/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
ListSearchesc6921ca6019abc5c34669805459c6bc2.url = (options?: RouteQueryOptions) => {
    return ListSearchesc6921ca6019abc5c34669805459c6bc2.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
ListSearchesc6921ca6019abc5c34669805459c6bc2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc6921ca6019abc5c34669805459c6bc2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
ListSearchesc6921ca6019abc5c34669805459c6bc2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesc6921ca6019abc5c34669805459c6bc2.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
const ListSearchesc6921ca6019abc5c34669805459c6bc2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc6921ca6019abc5c34669805459c6bc2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
ListSearchesc6921ca6019abc5c34669805459c6bc2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc6921ca6019abc5c34669805459c6bc2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/system/searches'
*/
ListSearchesc6921ca6019abc5c34669805459c6bc2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc6921ca6019abc5c34669805459c6bc2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesc6921ca6019abc5c34669805459c6bc2.form = ListSearchesc6921ca6019abc5c34669805459c6bc2Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
const ListSearches875b656d052065d45c2fd5ddbd2c8b1d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

ListSearches875b656d052065d45c2fd5ddbd2c8b1d.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url = (options?: RouteQueryOptions) => {
    return ListSearches875b656d052065d45c2fd5ddbd2c8b1d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
const ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches875b656d052065d45c2fd5ddbd2c8b1d.form = ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
const ListSearches0a54a37c8443bdc00ca641c7d78050dd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url(options),
    method: 'get',
})

ListSearches0a54a37c8443bdc00ca641c7d78050dd.definition = {
    methods: ["get","head"],
    url: '/nds/user/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
ListSearches0a54a37c8443bdc00ca641c7d78050dd.url = (options?: RouteQueryOptions) => {
    return ListSearches0a54a37c8443bdc00ca641c7d78050dd.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
ListSearches0a54a37c8443bdc00ca641c7d78050dd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
ListSearches0a54a37c8443bdc00ca641c7d78050dd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
const ListSearches0a54a37c8443bdc00ca641c7d78050ddForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
ListSearches0a54a37c8443bdc00ca641c7d78050ddForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/user/searches'
*/
ListSearches0a54a37c8443bdc00ca641c7d78050ddForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0a54a37c8443bdc00ca641c7d78050dd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0a54a37c8443bdc00ca641c7d78050dd.form = ListSearches0a54a37c8443bdc00ca641c7d78050ddForm

const ListSearches = {
    '/nds/booking/searches': ListSearches0b27a2039d6f08c78d83e0b03fb6d512,
    '/nds/chat/searches': ListSearches0d679ef96ce513ca3873950998731deb,
    '/nds/clients/searches': ListSearchesc73c85ed91d22e70997713eef8e7f8f6,
    '/nds/dev/searches': ListSearches090dc064749d084a15b927d3b7ab324a,
    '/nds/dialer/searches': ListSearchesb24754b2605325ffce339537298b48fd,
    '/nds/email/searches': ListSearches6efc96f1788b29f160513ae9e9ad2820,
    '/nds/files/searches': ListSearches9f23a05972b2ea1a4a8ca6fae373091a,
    '/nds/finance/searches': ListSearches0a2e4c116815fcfe554bfc67bc67168c,
    '/nds/locale/searches': ListSearches524e0734c876eba48aff248f76ff0243,
    '/nds/manager/searches': ListSearches3ef5463b9eb60056de6c840e7f8ffb40,
    '/nds/notify/searches': ListSearchesc17433135a23af775220e3657f664cdf,
    '/nds/partner/searches': ListSearchesdd5984499803f1b7a18929fcc4f00cc5,
    '/nds/private/searches': ListSearches3069a9ecd202940ae42a6279d675c934,
    '/nds/queue/searches': ListSearches548c615b669dfb46e86cb1a21cb1d2bf,
    '/nds/script/searches': ListSearches9e7ca963ef37a8a92f0b661fd1b3a078,
    '/nds/server/searches': ListSearches00069fb424b0186b5c352201b96de2fb,
    '/nds/service/searches': ListSearches61900a950b90b0b36273638a7fdc40fb,
    '/nds/sheets/searches': ListSearchesadef4cad0adddc21c0b22e3eed4c15eb,
    '/nds/stats/searches': ListSearches4424e0eb87f9b5e3119bab2734af54e3,
    '/nds/storage/searches': ListSearches20f2f2ce0e2efc0753f22d6f1a5f7126,
    '/nds/system/searches': ListSearchesc6921ca6019abc5c34669805459c6bc2,
    '/nds/tools/searches': ListSearches875b656d052065d45c2fd5ddbd2c8b1d,
    '/nds/user/searches': ListSearches0a54a37c8443bdc00ca641c7d78050dd,
}

export default ListSearches