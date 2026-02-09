import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
const ListActionsb855bfd57ec731c93403559e3df98033 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActionsb855bfd57ec731c93403559e3df98033.url(options),
    method: 'get',
})

ListActionsb855bfd57ec731c93403559e3df98033.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsb855bfd57ec731c93403559e3df98033.url = (options?: RouteQueryOptions) => {
    return ListActionsb855bfd57ec731c93403559e3df98033.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsb855bfd57ec731c93403559e3df98033.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActionsb855bfd57ec731c93403559e3df98033.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsb855bfd57ec731c93403559e3df98033.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActionsb855bfd57ec731c93403559e3df98033.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
const ListActionsb855bfd57ec731c93403559e3df98033Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsb855bfd57ec731c93403559e3df98033.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsb855bfd57ec731c93403559e3df98033Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsb855bfd57ec731c93403559e3df98033.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsb855bfd57ec731c93403559e3df98033Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsb855bfd57ec731c93403559e3df98033.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActionsb855bfd57ec731c93403559e3df98033.form = ListActionsb855bfd57ec731c93403559e3df98033Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
const ListActionsd26262fe7502f7a775d1cc810e6fa581 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActionsd26262fe7502f7a775d1cc810e6fa581.url(options),
    method: 'get',
})

ListActionsd26262fe7502f7a775d1cc810e6fa581.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
ListActionsd26262fe7502f7a775d1cc810e6fa581.url = (options?: RouteQueryOptions) => {
    return ListActionsd26262fe7502f7a775d1cc810e6fa581.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
ListActionsd26262fe7502f7a775d1cc810e6fa581.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActionsd26262fe7502f7a775d1cc810e6fa581.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
ListActionsd26262fe7502f7a775d1cc810e6fa581.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActionsd26262fe7502f7a775d1cc810e6fa581.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
const ListActionsd26262fe7502f7a775d1cc810e6fa581Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsd26262fe7502f7a775d1cc810e6fa581.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
ListActionsd26262fe7502f7a775d1cc810e6fa581Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsd26262fe7502f7a775d1cc810e6fa581.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/user/passport-scope-actions'
*/
ListActionsd26262fe7502f7a775d1cc810e6fa581Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActionsd26262fe7502f7a775d1cc810e6fa581.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActionsd26262fe7502f7a775d1cc810e6fa581.form = ListActionsd26262fe7502f7a775d1cc810e6fa581Form

const ListActions = {
    '/nds/super/passport-scope-actions': ListActionsb855bfd57ec731c93403559e3df98033,
    '/nds/user/passport-scope-actions': ListActionsd26262fe7502f7a775d1cc810e6fa581,
}

export default ListActions