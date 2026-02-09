import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
const CreateClientbddd1a0fe6d6890ccdee94d934581f97 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url(options),
    method: 'get',
})

CreateClientbddd1a0fe6d6890ccdee94d934581f97.definition = {
    methods: ["get","head"],
    url: '/nds/super/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientbddd1a0fe6d6890ccdee94d934581f97.url = (options?: RouteQueryOptions) => {
    return CreateClientbddd1a0fe6d6890ccdee94d934581f97.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientbddd1a0fe6d6890ccdee94d934581f97.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientbddd1a0fe6d6890ccdee94d934581f97.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
const CreateClientbddd1a0fe6d6890ccdee94d934581f97Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientbddd1a0fe6d6890ccdee94d934581f97Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/super/clients/create'
*/
CreateClientbddd1a0fe6d6890ccdee94d934581f97Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClientbddd1a0fe6d6890ccdee94d934581f97.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateClientbddd1a0fe6d6890ccdee94d934581f97.form = CreateClientbddd1a0fe6d6890ccdee94d934581f97Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
const CreateClient8c658553070322889ca3df8d7ddc8567 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient8c658553070322889ca3df8d7ddc8567.url(options),
    method: 'get',
})

CreateClient8c658553070322889ca3df8d7ddc8567.definition = {
    methods: ["get","head"],
    url: '/nds/user/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
CreateClient8c658553070322889ca3df8d7ddc8567.url = (options?: RouteQueryOptions) => {
    return CreateClient8c658553070322889ca3df8d7ddc8567.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
CreateClient8c658553070322889ca3df8d7ddc8567.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient8c658553070322889ca3df8d7ddc8567.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
CreateClient8c658553070322889ca3df8d7ddc8567.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClient8c658553070322889ca3df8d7ddc8567.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
const CreateClient8c658553070322889ca3df8d7ddc8567Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient8c658553070322889ca3df8d7ddc8567.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
CreateClient8c658553070322889ca3df8d7ddc8567Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient8c658553070322889ca3df8d7ddc8567.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\ClientResource\Pages\CreateClient::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/ClientResource/Pages/CreateClient.php:7
* @route '/nds/user/clients/create'
*/
CreateClient8c658553070322889ca3df8d7ddc8567Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateClient8c658553070322889ca3df8d7ddc8567.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateClient8c658553070322889ca3df8d7ddc8567.form = CreateClient8c658553070322889ca3df8d7ddc8567Form

const CreateClient = {
    '/nds/super/clients/create': CreateClientbddd1a0fe6d6890ccdee94d934581f97,
    '/nds/user/clients/create': CreateClient8c658553070322889ca3df8d7ddc8567,
}

export default CreateClient