import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
const ListTokensb34885a84434ad4bf499b6b12fa6483d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokensb34885a84434ad4bf499b6b12fa6483d.url(options),
    method: 'get',
})

ListTokensb34885a84434ad4bf499b6b12fa6483d.definition = {
    methods: ["get","head"],
    url: '/nds/super/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensb34885a84434ad4bf499b6b12fa6483d.url = (options?: RouteQueryOptions) => {
    return ListTokensb34885a84434ad4bf499b6b12fa6483d.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensb34885a84434ad4bf499b6b12fa6483d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokensb34885a84434ad4bf499b6b12fa6483d.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensb34885a84434ad4bf499b6b12fa6483d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTokensb34885a84434ad4bf499b6b12fa6483d.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
const ListTokensb34885a84434ad4bf499b6b12fa6483dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokensb34885a84434ad4bf499b6b12fa6483d.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensb34885a84434ad4bf499b6b12fa6483dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokensb34885a84434ad4bf499b6b12fa6483d.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensb34885a84434ad4bf499b6b12fa6483dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokensb34885a84434ad4bf499b6b12fa6483d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTokensb34885a84434ad4bf499b6b12fa6483d.form = ListTokensb34885a84434ad4bf499b6b12fa6483dForm
/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
const ListTokens7d3bd7874f76db7d32b7a74bf39964dd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url(options),
    method: 'get',
})

ListTokens7d3bd7874f76db7d32b7a74bf39964dd.definition = {
    methods: ["get","head"],
    url: '/nds/user/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url = (options?: RouteQueryOptions) => {
    return ListTokens7d3bd7874f76db7d32b7a74bf39964dd.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
ListTokens7d3bd7874f76db7d32b7a74bf39964dd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
ListTokens7d3bd7874f76db7d32b7a74bf39964dd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
const ListTokens7d3bd7874f76db7d32b7a74bf39964ddForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
ListTokens7d3bd7874f76db7d32b7a74bf39964ddForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
ListTokens7d3bd7874f76db7d32b7a74bf39964ddForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens7d3bd7874f76db7d32b7a74bf39964dd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTokens7d3bd7874f76db7d32b7a74bf39964dd.form = ListTokens7d3bd7874f76db7d32b7a74bf39964ddForm

const ListTokens = {
    '/nds/super/tokens': ListTokensb34885a84434ad4bf499b6b12fa6483d,
    '/nds/user/tokens': ListTokens7d3bd7874f76db7d32b7a74bf39964dd,
}

export default ListTokens