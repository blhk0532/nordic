import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
const ViewClientcdb6f45e9075f124aa0841150557383f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, options),
    method: 'get',
})

ViewClientcdb6f45e9075f124aa0841150557383f.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
ViewClientcdb6f45e9075f124aa0841150557383f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientcdb6f45e9075f124aa0841150557383f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
ViewClientcdb6f45e9075f124aa0841150557383f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
ViewClientcdb6f45e9075f124aa0841150557383f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
const ViewClientcdb6f45e9075f124aa0841150557383fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
ViewClientcdb6f45e9075f124aa0841150557383fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/super/clients/{record}'
*/
ViewClientcdb6f45e9075f124aa0841150557383fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClientcdb6f45e9075f124aa0841150557383f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewClientcdb6f45e9075f124aa0841150557383f.form = ViewClientcdb6f45e9075f124aa0841150557383fForm
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
const ViewClient72fe4435b1ff628b16e55455a706b5d5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, options),
    method: 'get',
})

ViewClient72fe4435b1ff628b16e55455a706b5d5.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
ViewClient72fe4435b1ff628b16e55455a706b5d5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClient72fe4435b1ff628b16e55455a706b5d5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
ViewClient72fe4435b1ff628b16e55455a706b5d5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
ViewClient72fe4435b1ff628b16e55455a706b5d5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
const ViewClient72fe4435b1ff628b16e55455a706b5d5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
ViewClient72fe4435b1ff628b16e55455a706b5d5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\ViewClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/ViewClient.php:7
* @route '/nds/user/clients/{record}'
*/
ViewClient72fe4435b1ff628b16e55455a706b5d5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewClient72fe4435b1ff628b16e55455a706b5d5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewClient72fe4435b1ff628b16e55455a706b5d5.form = ViewClient72fe4435b1ff628b16e55455a706b5d5Form

const ViewClient = {
    '/nds/super/clients/{record}': ViewClientcdb6f45e9075f124aa0841150557383f,
    '/nds/user/clients/{record}': ViewClient72fe4435b1ff628b16e55455a706b5d5,
}

export default ViewClient