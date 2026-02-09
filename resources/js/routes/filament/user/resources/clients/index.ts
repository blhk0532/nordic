import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ListClients::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ListClients.php:7
* @route '/nds/user/clients'
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

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const clients = {
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
}

export default clients