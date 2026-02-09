import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
const EditClient2ce4bdca8accfd835376fa89dbcd03b2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, options),
    method: 'get',
})

EditClient2ce4bdca8accfd835376fa89dbcd03b2.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
EditClient2ce4bdca8accfd835376fa89dbcd03b2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClient2ce4bdca8accfd835376fa89dbcd03b2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
EditClient2ce4bdca8accfd835376fa89dbcd03b2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
EditClient2ce4bdca8accfd835376fa89dbcd03b2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
const EditClient2ce4bdca8accfd835376fa89dbcd03b2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
EditClient2ce4bdca8accfd835376fa89dbcd03b2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/super/clients/{record}/edit'
*/
EditClient2ce4bdca8accfd835376fa89dbcd03b2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClient2ce4bdca8accfd835376fa89dbcd03b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditClient2ce4bdca8accfd835376fa89dbcd03b2.form = EditClient2ce4bdca8accfd835376fa89dbcd03b2Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
const EditClientea47cd26f5c2666d30fa377b95f9953f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, options),
    method: 'get',
})

EditClientea47cd26f5c2666d30fa377b95f9953f.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
EditClientea47cd26f5c2666d30fa377b95f9953f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientea47cd26f5c2666d30fa377b95f9953f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
EditClientea47cd26f5c2666d30fa377b95f9953f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
EditClientea47cd26f5c2666d30fa377b95f9953f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
const EditClientea47cd26f5c2666d30fa377b95f9953fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
EditClientea47cd26f5c2666d30fa377b95f9953fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\EditClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/EditClient.php:7
* @route '/nds/user/clients/{record}/edit'
*/
EditClientea47cd26f5c2666d30fa377b95f9953fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditClientea47cd26f5c2666d30fa377b95f9953f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditClientea47cd26f5c2666d30fa377b95f9953f.form = EditClientea47cd26f5c2666d30fa377b95f9953fForm

const EditClient = {
    '/nds/super/clients/{record}/edit': EditClient2ce4bdca8accfd835376fa89dbcd03b2,
    '/nds/user/clients/{record}/edit': EditClientea47cd26f5c2666d30fa377b95f9953f,
}

export default EditClient