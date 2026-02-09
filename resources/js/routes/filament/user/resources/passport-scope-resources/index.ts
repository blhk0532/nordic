import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\ListResources::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/ListResources.php:7
* @route '/nds/user/passport-scope-resources'
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
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\CreateResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/CreateResource.php:7
* @route '/nds/user/passport-scope-resources/create'
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
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
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
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
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

const passportScopeResources = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default passportScopeResources