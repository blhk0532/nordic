import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/user/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/user/tokens'
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

const tokens = {
    index: Object.assign(index, index),
}

export default tokens