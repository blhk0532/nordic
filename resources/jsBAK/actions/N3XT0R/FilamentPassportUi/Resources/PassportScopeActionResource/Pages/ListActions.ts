import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
const ListActions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActions.url(options),
    method: 'get',
})

ListActions.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActions.url = (options?: RouteQueryOptions) => {
    return ListActions.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListActions.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListActions.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
const ListActionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActions.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActions.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\ListActions::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/ListActions.php:7
* @route '/nds/super/passport-scope-actions'
*/
ListActionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListActions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListActions.form = ListActionsForm

export default ListActions