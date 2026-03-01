import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
const ListResources = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources.url(options),
    method: 'get',
})

ListResources.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources.url = (options?: RouteQueryOptions) => {
    return ListResources.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListResources.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
const ListResourcesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResourcesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResourcesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListResources.form = ListResourcesForm

export default ListResources