import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
const EditAction = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAction.url(args, options),
    method: 'get',
})

EditAction.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAction.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAction.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAction.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
const EditActionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditActionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditActionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAction.form = EditActionForm

export default EditAction