import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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

const ListSearches = {
    '/nds/chat/searches': ListSearches0d679ef96ce513ca3873950998731deb,
    '/nds/notify/searches': ListSearchesc17433135a23af775220e3657f664cdf,
    '/nds/tools/searches': ListSearches875b656d052065d45c2fd5ddbd2c8b1d,
}

export default ListSearches