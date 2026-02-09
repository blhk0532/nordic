import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
const EditResource3dbddaabefa84e48435b1a5756630b20 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, options),
    method: 'get',
})

EditResource3dbddaabefa84e48435b1a5756630b20.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource3dbddaabefa84e48435b1a5756630b20.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditResource3dbddaabefa84e48435b1a5756630b20.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource3dbddaabefa84e48435b1a5756630b20.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource3dbddaabefa84e48435b1a5756630b20.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
const EditResource3dbddaabefa84e48435b1a5756630b20Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource3dbddaabefa84e48435b1a5756630b20Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource3dbddaabefa84e48435b1a5756630b20Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource3dbddaabefa84e48435b1a5756630b20.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditResource3dbddaabefa84e48435b1a5756630b20.form = EditResource3dbddaabefa84e48435b1a5756630b20Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
const EditResource39a6838daefb747deddddf89959e3f6d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource39a6838daefb747deddddf89959e3f6d.url(args, options),
    method: 'get',
})

EditResource39a6838daefb747deddddf89959e3f6d.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-resources/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
EditResource39a6838daefb747deddddf89959e3f6d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditResource39a6838daefb747deddddf89959e3f6d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
EditResource39a6838daefb747deddddf89959e3f6d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource39a6838daefb747deddddf89959e3f6d.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
EditResource39a6838daefb747deddddf89959e3f6d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditResource39a6838daefb747deddddf89959e3f6d.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
const EditResource39a6838daefb747deddddf89959e3f6dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource39a6838daefb747deddddf89959e3f6d.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
EditResource39a6838daefb747deddddf89959e3f6dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource39a6838daefb747deddddf89959e3f6d.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/user/passport-scope-resources/{record}/edit'
*/
EditResource39a6838daefb747deddddf89959e3f6dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource39a6838daefb747deddddf89959e3f6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditResource39a6838daefb747deddddf89959e3f6d.form = EditResource39a6838daefb747deddddf89959e3f6dForm

const EditResource = {
    '/nds/super/passport-scope-resources/{record}/edit': EditResource3dbddaabefa84e48435b1a5756630b20,
    '/nds/user/passport-scope-resources/{record}/edit': EditResource39a6838daefb747deddddf89959e3f6d,
}

export default EditResource