import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
const CreateSearch41b2a0982134eabf380c25c508749aff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

CreateSearch41b2a0982134eabf380c25c508749aff.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.url = (options?: RouteQueryOptions) => {
    return CreateSearch41b2a0982134eabf380c25c508749aff.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
const CreateSearch41b2a0982134eabf380c25c508749affForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749affForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749affForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch41b2a0982134eabf380c25c508749aff.form = CreateSearch41b2a0982134eabf380c25c508749affForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
const CreateSearch7ddd2f8e13819d504d711cec74acfd76 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

CreateSearch7ddd2f8e13819d504d711cec74acfd76.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.url = (options?: RouteQueryOptions) => {
    return CreateSearch7ddd2f8e13819d504d711cec74acfd76.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
const CreateSearch7ddd2f8e13819d504d711cec74acfd76Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch7ddd2f8e13819d504d711cec74acfd76.form = CreateSearch7ddd2f8e13819d504d711cec74acfd76Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
const CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url(options),
    method: 'get',
})

CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.definition = {
    methods: ["get","head"],
    url: '/nds/clients/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url = (options?: RouteQueryOptions) => {
    return CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
const CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/clients/searches/create'
*/
CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5.form = CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
const CreateSearch21e1c11e2ddad57b44ac5608c17c9490 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

CreateSearch21e1c11e2ddad57b44ac5608c17c9490.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url = (options?: RouteQueryOptions) => {
    return CreateSearch21e1c11e2ddad57b44ac5608c17c9490.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
const CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch21e1c11e2ddad57b44ac5608c17c9490.form = CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
const CreateSearcha3dff00435462898adeb0cf7090736d5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearcha3dff00435462898adeb0cf7090736d5.url(options),
    method: 'get',
})

CreateSearcha3dff00435462898adeb0cf7090736d5.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
CreateSearcha3dff00435462898adeb0cf7090736d5.url = (options?: RouteQueryOptions) => {
    return CreateSearcha3dff00435462898adeb0cf7090736d5.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
CreateSearcha3dff00435462898adeb0cf7090736d5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearcha3dff00435462898adeb0cf7090736d5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
CreateSearcha3dff00435462898adeb0cf7090736d5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearcha3dff00435462898adeb0cf7090736d5.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
const CreateSearcha3dff00435462898adeb0cf7090736d5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha3dff00435462898adeb0cf7090736d5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
CreateSearcha3dff00435462898adeb0cf7090736d5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha3dff00435462898adeb0cf7090736d5.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dialer/searches/create'
*/
CreateSearcha3dff00435462898adeb0cf7090736d5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha3dff00435462898adeb0cf7090736d5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearcha3dff00435462898adeb0cf7090736d5.form = CreateSearcha3dff00435462898adeb0cf7090736d5Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
const CreateSearch65e7e64f76760db1788eb0c34d22674f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

CreateSearch65e7e64f76760db1788eb0c34d22674f.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.url = (options?: RouteQueryOptions) => {
    return CreateSearch65e7e64f76760db1788eb0c34d22674f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
const CreateSearch65e7e64f76760db1788eb0c34d22674fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch65e7e64f76760db1788eb0c34d22674f.form = CreateSearch65e7e64f76760db1788eb0c34d22674fForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
const CreateSearch51c492d7e097d673821ede1dcd6af67a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

CreateSearch51c492d7e097d673821ede1dcd6af67a.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.url = (options?: RouteQueryOptions) => {
    return CreateSearch51c492d7e097d673821ede1dcd6af67a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
const CreateSearch51c492d7e097d673821ede1dcd6af67aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch51c492d7e097d673821ede1dcd6af67a.form = CreateSearch51c492d7e097d673821ede1dcd6af67aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
const CreateSearch0d6c86f84546774716de180ae434f87e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0d6c86f84546774716de180ae434f87e.url(options),
    method: 'get',
})

CreateSearch0d6c86f84546774716de180ae434f87e.definition = {
    methods: ["get","head"],
    url: '/nds/finance/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
CreateSearch0d6c86f84546774716de180ae434f87e.url = (options?: RouteQueryOptions) => {
    return CreateSearch0d6c86f84546774716de180ae434f87e.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
CreateSearch0d6c86f84546774716de180ae434f87e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0d6c86f84546774716de180ae434f87e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
CreateSearch0d6c86f84546774716de180ae434f87e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch0d6c86f84546774716de180ae434f87e.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
const CreateSearch0d6c86f84546774716de180ae434f87eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0d6c86f84546774716de180ae434f87e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
CreateSearch0d6c86f84546774716de180ae434f87eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0d6c86f84546774716de180ae434f87e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/finance/searches/create'
*/
CreateSearch0d6c86f84546774716de180ae434f87eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0d6c86f84546774716de180ae434f87e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch0d6c86f84546774716de180ae434f87e.form = CreateSearch0d6c86f84546774716de180ae434f87eForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
const CreateSearchfd592c292612a923022e84a114c00ce7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchfd592c292612a923022e84a114c00ce7.url(options),
    method: 'get',
})

CreateSearchfd592c292612a923022e84a114c00ce7.definition = {
    methods: ["get","head"],
    url: '/nds/locale/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
CreateSearchfd592c292612a923022e84a114c00ce7.url = (options?: RouteQueryOptions) => {
    return CreateSearchfd592c292612a923022e84a114c00ce7.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
CreateSearchfd592c292612a923022e84a114c00ce7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchfd592c292612a923022e84a114c00ce7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
CreateSearchfd592c292612a923022e84a114c00ce7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchfd592c292612a923022e84a114c00ce7.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
const CreateSearchfd592c292612a923022e84a114c00ce7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchfd592c292612a923022e84a114c00ce7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
CreateSearchfd592c292612a923022e84a114c00ce7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchfd592c292612a923022e84a114c00ce7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/locale/searches/create'
*/
CreateSearchfd592c292612a923022e84a114c00ce7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchfd592c292612a923022e84a114c00ce7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchfd592c292612a923022e84a114c00ce7.form = CreateSearchfd592c292612a923022e84a114c00ce7Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
const CreateSearch66c37a5c51532dc978ec07347a52657c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch66c37a5c51532dc978ec07347a52657c.url(options),
    method: 'get',
})

CreateSearch66c37a5c51532dc978ec07347a52657c.definition = {
    methods: ["get","head"],
    url: '/nds/manager/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
CreateSearch66c37a5c51532dc978ec07347a52657c.url = (options?: RouteQueryOptions) => {
    return CreateSearch66c37a5c51532dc978ec07347a52657c.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
CreateSearch66c37a5c51532dc978ec07347a52657c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch66c37a5c51532dc978ec07347a52657c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
CreateSearch66c37a5c51532dc978ec07347a52657c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch66c37a5c51532dc978ec07347a52657c.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
const CreateSearch66c37a5c51532dc978ec07347a52657cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch66c37a5c51532dc978ec07347a52657c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
CreateSearch66c37a5c51532dc978ec07347a52657cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch66c37a5c51532dc978ec07347a52657c.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/manager/searches/create'
*/
CreateSearch66c37a5c51532dc978ec07347a52657cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch66c37a5c51532dc978ec07347a52657c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch66c37a5c51532dc978ec07347a52657c.form = CreateSearch66c37a5c51532dc978ec07347a52657cForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
const CreateSearchb26968091044647a915a8dd7c5b91c30 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

CreateSearchb26968091044647a915a8dd7c5b91c30.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.url = (options?: RouteQueryOptions) => {
    return CreateSearchb26968091044647a915a8dd7c5b91c30.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
const CreateSearchb26968091044647a915a8dd7c5b91c30Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchb26968091044647a915a8dd7c5b91c30.form = CreateSearchb26968091044647a915a8dd7c5b91c30Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
const CreateSearchc25dee3f4860c66adcc8b54648229025 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc25dee3f4860c66adcc8b54648229025.url(options),
    method: 'get',
})

CreateSearchc25dee3f4860c66adcc8b54648229025.definition = {
    methods: ["get","head"],
    url: '/nds/partner/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
CreateSearchc25dee3f4860c66adcc8b54648229025.url = (options?: RouteQueryOptions) => {
    return CreateSearchc25dee3f4860c66adcc8b54648229025.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
CreateSearchc25dee3f4860c66adcc8b54648229025.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc25dee3f4860c66adcc8b54648229025.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
CreateSearchc25dee3f4860c66adcc8b54648229025.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchc25dee3f4860c66adcc8b54648229025.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
const CreateSearchc25dee3f4860c66adcc8b54648229025Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc25dee3f4860c66adcc8b54648229025.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
CreateSearchc25dee3f4860c66adcc8b54648229025Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc25dee3f4860c66adcc8b54648229025.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/partner/searches/create'
*/
CreateSearchc25dee3f4860c66adcc8b54648229025Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc25dee3f4860c66adcc8b54648229025.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchc25dee3f4860c66adcc8b54648229025.form = CreateSearchc25dee3f4860c66adcc8b54648229025Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
const CreateSearch54969025970946b2df6d968c1cd54c7b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch54969025970946b2df6d968c1cd54c7b.url(options),
    method: 'get',
})

CreateSearch54969025970946b2df6d968c1cd54c7b.definition = {
    methods: ["get","head"],
    url: '/nds/private/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
CreateSearch54969025970946b2df6d968c1cd54c7b.url = (options?: RouteQueryOptions) => {
    return CreateSearch54969025970946b2df6d968c1cd54c7b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
CreateSearch54969025970946b2df6d968c1cd54c7b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch54969025970946b2df6d968c1cd54c7b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
CreateSearch54969025970946b2df6d968c1cd54c7b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch54969025970946b2df6d968c1cd54c7b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
const CreateSearch54969025970946b2df6d968c1cd54c7bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch54969025970946b2df6d968c1cd54c7b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
CreateSearch54969025970946b2df6d968c1cd54c7bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch54969025970946b2df6d968c1cd54c7b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/private/searches/create'
*/
CreateSearch54969025970946b2df6d968c1cd54c7bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch54969025970946b2df6d968c1cd54c7b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch54969025970946b2df6d968c1cd54c7b.form = CreateSearch54969025970946b2df6d968c1cd54c7bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
const CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url = (options?: RouteQueryOptions) => {
    return CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
const CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.form = CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
const CreateSearch6d1d372e5094b9f18349156a1e803669 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch6d1d372e5094b9f18349156a1e803669.url(options),
    method: 'get',
})

CreateSearch6d1d372e5094b9f18349156a1e803669.definition = {
    methods: ["get","head"],
    url: '/nds/script/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
CreateSearch6d1d372e5094b9f18349156a1e803669.url = (options?: RouteQueryOptions) => {
    return CreateSearch6d1d372e5094b9f18349156a1e803669.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
CreateSearch6d1d372e5094b9f18349156a1e803669.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch6d1d372e5094b9f18349156a1e803669.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
CreateSearch6d1d372e5094b9f18349156a1e803669.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch6d1d372e5094b9f18349156a1e803669.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
const CreateSearch6d1d372e5094b9f18349156a1e803669Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch6d1d372e5094b9f18349156a1e803669.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
CreateSearch6d1d372e5094b9f18349156a1e803669Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch6d1d372e5094b9f18349156a1e803669.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/script/searches/create'
*/
CreateSearch6d1d372e5094b9f18349156a1e803669Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch6d1d372e5094b9f18349156a1e803669.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch6d1d372e5094b9f18349156a1e803669.form = CreateSearch6d1d372e5094b9f18349156a1e803669Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
const CreateSearch21177b0f442e271567e7b780eb6daee8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21177b0f442e271567e7b780eb6daee8.url(options),
    method: 'get',
})

CreateSearch21177b0f442e271567e7b780eb6daee8.definition = {
    methods: ["get","head"],
    url: '/nds/server/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
CreateSearch21177b0f442e271567e7b780eb6daee8.url = (options?: RouteQueryOptions) => {
    return CreateSearch21177b0f442e271567e7b780eb6daee8.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
CreateSearch21177b0f442e271567e7b780eb6daee8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21177b0f442e271567e7b780eb6daee8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
CreateSearch21177b0f442e271567e7b780eb6daee8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch21177b0f442e271567e7b780eb6daee8.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
const CreateSearch21177b0f442e271567e7b780eb6daee8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21177b0f442e271567e7b780eb6daee8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
CreateSearch21177b0f442e271567e7b780eb6daee8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21177b0f442e271567e7b780eb6daee8.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/server/searches/create'
*/
CreateSearch21177b0f442e271567e7b780eb6daee8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21177b0f442e271567e7b780eb6daee8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch21177b0f442e271567e7b780eb6daee8.form = CreateSearch21177b0f442e271567e7b780eb6daee8Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
const CreateSearchda0c4de1a2d0f6897e64c18c268f587e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url(options),
    method: 'get',
})

CreateSearchda0c4de1a2d0f6897e64c18c268f587e.definition = {
    methods: ["get","head"],
    url: '/nds/service/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url = (options?: RouteQueryOptions) => {
    return CreateSearchda0c4de1a2d0f6897e64c18c268f587e.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
CreateSearchda0c4de1a2d0f6897e64c18c268f587e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
CreateSearchda0c4de1a2d0f6897e64c18c268f587e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
const CreateSearchda0c4de1a2d0f6897e64c18c268f587eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
CreateSearchda0c4de1a2d0f6897e64c18c268f587eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/service/searches/create'
*/
CreateSearchda0c4de1a2d0f6897e64c18c268f587eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchda0c4de1a2d0f6897e64c18c268f587e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchda0c4de1a2d0f6897e64c18c268f587e.form = CreateSearchda0c4de1a2d0f6897e64c18c268f587eForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
const CreateSearchb352f1c7305cc87637c968f507f952ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb352f1c7305cc87637c968f507f952ed.url(options),
    method: 'get',
})

CreateSearchb352f1c7305cc87637c968f507f952ed.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
CreateSearchb352f1c7305cc87637c968f507f952ed.url = (options?: RouteQueryOptions) => {
    return CreateSearchb352f1c7305cc87637c968f507f952ed.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
CreateSearchb352f1c7305cc87637c968f507f952ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb352f1c7305cc87637c968f507f952ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
CreateSearchb352f1c7305cc87637c968f507f952ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchb352f1c7305cc87637c968f507f952ed.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
const CreateSearchb352f1c7305cc87637c968f507f952edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb352f1c7305cc87637c968f507f952ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
CreateSearchb352f1c7305cc87637c968f507f952edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb352f1c7305cc87637c968f507f952ed.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/sheets/searches/create'
*/
CreateSearchb352f1c7305cc87637c968f507f952edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb352f1c7305cc87637c968f507f952ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchb352f1c7305cc87637c968f507f952ed.form = CreateSearchb352f1c7305cc87637c968f507f952edForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
const CreateSearchc11b7eca2e3696cb7603026fe2ddf83a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url(options),
    method: 'get',
})

CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.definition = {
    methods: ["get","head"],
    url: '/nds/stats/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url = (options?: RouteQueryOptions) => {
    return CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
const CreateSearchc11b7eca2e3696cb7603026fe2ddf83aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
CreateSearchc11b7eca2e3696cb7603026fe2ddf83aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/stats/searches/create'
*/
CreateSearchc11b7eca2e3696cb7603026fe2ddf83aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchc11b7eca2e3696cb7603026fe2ddf83a.form = CreateSearchc11b7eca2e3696cb7603026fe2ddf83aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
const CreateSearchbaf3a17aadab159b0f4c50bcd523af9e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url(options),
    method: 'get',
})

CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.definition = {
    methods: ["get","head"],
    url: '/nds/storage/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url = (options?: RouteQueryOptions) => {
    return CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
const CreateSearchbaf3a17aadab159b0f4c50bcd523af9eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
CreateSearchbaf3a17aadab159b0f4c50bcd523af9eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/storage/searches/create'
*/
CreateSearchbaf3a17aadab159b0f4c50bcd523af9eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchbaf3a17aadab159b0f4c50bcd523af9e.form = CreateSearchbaf3a17aadab159b0f4c50bcd523af9eForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
const CreateSearchc2feddf989a477b0d0d86d1422055848 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc2feddf989a477b0d0d86d1422055848.url(options),
    method: 'get',
})

CreateSearchc2feddf989a477b0d0d86d1422055848.definition = {
    methods: ["get","head"],
    url: '/nds/system/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
CreateSearchc2feddf989a477b0d0d86d1422055848.url = (options?: RouteQueryOptions) => {
    return CreateSearchc2feddf989a477b0d0d86d1422055848.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
CreateSearchc2feddf989a477b0d0d86d1422055848.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchc2feddf989a477b0d0d86d1422055848.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
CreateSearchc2feddf989a477b0d0d86d1422055848.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchc2feddf989a477b0d0d86d1422055848.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
const CreateSearchc2feddf989a477b0d0d86d1422055848Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc2feddf989a477b0d0d86d1422055848.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
CreateSearchc2feddf989a477b0d0d86d1422055848Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc2feddf989a477b0d0d86d1422055848.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/system/searches/create'
*/
CreateSearchc2feddf989a477b0d0d86d1422055848Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchc2feddf989a477b0d0d86d1422055848.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchc2feddf989a477b0d0d86d1422055848.form = CreateSearchc2feddf989a477b0d0d86d1422055848Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
const CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url = (options?: RouteQueryOptions) => {
    return CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
const CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.form = CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
const CreateSearcha5208ece513170300e2b2bb8d62f0177 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearcha5208ece513170300e2b2bb8d62f0177.url(options),
    method: 'get',
})

CreateSearcha5208ece513170300e2b2bb8d62f0177.definition = {
    methods: ["get","head"],
    url: '/nds/user/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
CreateSearcha5208ece513170300e2b2bb8d62f0177.url = (options?: RouteQueryOptions) => {
    return CreateSearcha5208ece513170300e2b2bb8d62f0177.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
CreateSearcha5208ece513170300e2b2bb8d62f0177.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearcha5208ece513170300e2b2bb8d62f0177.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
CreateSearcha5208ece513170300e2b2bb8d62f0177.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearcha5208ece513170300e2b2bb8d62f0177.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
const CreateSearcha5208ece513170300e2b2bb8d62f0177Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha5208ece513170300e2b2bb8d62f0177.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
CreateSearcha5208ece513170300e2b2bb8d62f0177Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha5208ece513170300e2b2bb8d62f0177.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/user/searches/create'
*/
CreateSearcha5208ece513170300e2b2bb8d62f0177Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearcha5208ece513170300e2b2bb8d62f0177.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearcha5208ece513170300e2b2bb8d62f0177.form = CreateSearcha5208ece513170300e2b2bb8d62f0177Form

const CreateSearch = {
    '/nds/booking/searches/create': CreateSearch41b2a0982134eabf380c25c508749aff,
    '/nds/chat/searches/create': CreateSearch7ddd2f8e13819d504d711cec74acfd76,
    '/nds/clients/searches/create': CreateSearch1e1c2da0d2c0c6fdc3ab3f43c03b10c5,
    '/nds/dev/searches/create': CreateSearch21e1c11e2ddad57b44ac5608c17c9490,
    '/nds/dialer/searches/create': CreateSearcha3dff00435462898adeb0cf7090736d5,
    '/nds/email/searches/create': CreateSearch65e7e64f76760db1788eb0c34d22674f,
    '/nds/files/searches/create': CreateSearch51c492d7e097d673821ede1dcd6af67a,
    '/nds/finance/searches/create': CreateSearch0d6c86f84546774716de180ae434f87e,
    '/nds/locale/searches/create': CreateSearchfd592c292612a923022e84a114c00ce7,
    '/nds/manager/searches/create': CreateSearch66c37a5c51532dc978ec07347a52657c,
    '/nds/notify/searches/create': CreateSearchb26968091044647a915a8dd7c5b91c30,
    '/nds/partner/searches/create': CreateSearchc25dee3f4860c66adcc8b54648229025,
    '/nds/private/searches/create': CreateSearch54969025970946b2df6d968c1cd54c7b,
    '/nds/queue/searches/create': CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b,
    '/nds/script/searches/create': CreateSearch6d1d372e5094b9f18349156a1e803669,
    '/nds/server/searches/create': CreateSearch21177b0f442e271567e7b780eb6daee8,
    '/nds/service/searches/create': CreateSearchda0c4de1a2d0f6897e64c18c268f587e,
    '/nds/sheets/searches/create': CreateSearchb352f1c7305cc87637c968f507f952ed,
    '/nds/stats/searches/create': CreateSearchc11b7eca2e3696cb7603026fe2ddf83a,
    '/nds/storage/searches/create': CreateSearchbaf3a17aadab159b0f4c50bcd523af9e,
    '/nds/system/searches/create': CreateSearchc2feddf989a477b0d0d86d1422055848,
    '/nds/tools/searches/create': CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42,
    '/nds/user/searches/create': CreateSearcha5208ece513170300e2b2bb8d62f0177,
}

export default CreateSearch