import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
const EditResource = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource.url(args, options),
    method: 'get',
})

EditResource.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-resources/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditResource.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditResource.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResource.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditResource.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
const EditResourceForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResourceForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeResourceResource\Pages\EditResource::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeResourceResource/Pages/EditResource.php:7
* @route '/nds/super/passport-scope-resources/{record}/edit'
*/
EditResourceForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditResource.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditResource.form = EditResourceForm

export default EditResource