import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
const ListTokens = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokens.url(options),
    method: 'get',
})

ListTokens.definition = {
    methods: ["get","head"],
    url: '/nds/super/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokens.url = (options?: RouteQueryOptions) => {
    return ListTokens.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokens.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTokens.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokens.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTokens.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
const ListTokensForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\TokenResource\Pages\ListTokens::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/TokenResource/Pages/ListTokens.php:7
* @route '/nds/super/tokens'
*/
ListTokensForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTokens.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTokens.form = ListTokensForm

export default ListTokens