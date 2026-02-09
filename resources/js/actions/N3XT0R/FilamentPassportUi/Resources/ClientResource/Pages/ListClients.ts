import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
const ListClients4b539e46cc1c241171b2aafa4d05d352 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients4b539e46cc1c241171b2aafa4d05d352.url(options),
    method: 'get',
})

ListClients4b539e46cc1c241171b2aafa4d05d352.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients4b539e46cc1c241171b2aafa4d05d352.url = (options?: RouteQueryOptions) => {
    return ListClients4b539e46cc1c241171b2aafa4d05d352.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients4b539e46cc1c241171b2aafa4d05d352.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients4b539e46cc1c241171b2aafa4d05d352.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients4b539e46cc1c241171b2aafa4d05d352.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients4b539e46cc1c241171b2aafa4d05d352.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
const ListClients4b539e46cc1c241171b2aafa4d05d352Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients4b539e46cc1c241171b2aafa4d05d352.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients4b539e46cc1c241171b2aafa4d05d352Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients4b539e46cc1c241171b2aafa4d05d352.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/super/clients'
*/
ListClients4b539e46cc1c241171b2aafa4d05d352Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients4b539e46cc1c241171b2aafa4d05d352.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListClients4b539e46cc1c241171b2aafa4d05d352.form = ListClients4b539e46cc1c241171b2aafa4d05d352Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
const ListClients3594a784659c177652cf9b242ae870f5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients3594a784659c177652cf9b242ae870f5.url(options),
    method: 'get',
})

ListClients3594a784659c177652cf9b242ae870f5.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
ListClients3594a784659c177652cf9b242ae870f5.url = (options?: RouteQueryOptions) => {
    return ListClients3594a784659c177652cf9b242ae870f5.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
ListClients3594a784659c177652cf9b242ae870f5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients3594a784659c177652cf9b242ae870f5.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
ListClients3594a784659c177652cf9b242ae870f5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients3594a784659c177652cf9b242ae870f5.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
const ListClients3594a784659c177652cf9b242ae870f5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients3594a784659c177652cf9b242ae870f5.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
ListClients3594a784659c177652cf9b242ae870f5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients3594a784659c177652cf9b242ae870f5.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
ListClients3594a784659c177652cf9b242ae870f5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListClients3594a784659c177652cf9b242ae870f5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListClients3594a784659c177652cf9b242ae870f5.form = ListClients3594a784659c177652cf9b242ae870f5Form

const ListClients = {
    '/nds/super/clients': ListClients4b539e46cc1c241171b2aafa4d05d352,
    '/nds/user/clients': ListClients3594a784659c177652cf9b242ae870f5,
}

export default ListClients