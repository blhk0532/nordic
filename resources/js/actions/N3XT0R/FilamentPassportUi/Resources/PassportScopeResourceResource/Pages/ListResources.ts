import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
const ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url(options),
    method: 'get',
})

ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url = (options?: RouteQueryOptions) => {
    return ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
const ListResources23525d6c68d4a3a81fc3f9ad7e6ccefbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources23525d6c68d4a3a81fc3f9ad7e6ccefbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/super/passport-scope-resources'
*/
ListResources23525d6c68d4a3a81fc3f9ad7e6ccefbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb.form = ListResources23525d6c68d4a3a81fc3f9ad7e6ccefbForm
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
const ListResources35e2611c75f93600a6a81e8a85fff24a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources35e2611c75f93600a6a81e8a85fff24a.url(options),
    method: 'get',
})

ListResources35e2611c75f93600a6a81e8a85fff24a.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
ListResources35e2611c75f93600a6a81e8a85fff24a.url = (options?: RouteQueryOptions) => {
    return ListResources35e2611c75f93600a6a81e8a85fff24a.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
ListResources35e2611c75f93600a6a81e8a85fff24a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListResources35e2611c75f93600a6a81e8a85fff24a.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
ListResources35e2611c75f93600a6a81e8a85fff24a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListResources35e2611c75f93600a6a81e8a85fff24a.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
const ListResources35e2611c75f93600a6a81e8a85fff24aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources35e2611c75f93600a6a81e8a85fff24a.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
ListResources35e2611c75f93600a6a81e8a85fff24aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources35e2611c75f93600a6a81e8a85fff24a.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
ListResources35e2611c75f93600a6a81e8a85fff24aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListResources35e2611c75f93600a6a81e8a85fff24a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListResources35e2611c75f93600a6a81e8a85fff24a.form = ListResources35e2611c75f93600a6a81e8a85fff24aForm

const ListResources = {
    '/nds/super/passport-scope-resources': ListResources23525d6c68d4a3a81fc3f9ad7e6ccefb,
    '/nds/user/passport-scope-resources': ListResources35e2611c75f93600a6a81e8a85fff24a,
}

export default ListResources