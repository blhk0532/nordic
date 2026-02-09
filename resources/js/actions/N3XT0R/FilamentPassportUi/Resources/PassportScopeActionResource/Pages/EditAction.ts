import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
const EditAction1c7beeea28bde52cd6414e2cadf02bf9 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, options),
    method: 'get',
})

EditAction1c7beeea28bde52cd6414e2cadf02bf9.definition = {
    methods: ["get","head"],
    url: '/nds/super/passport-scope-actions/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction1c7beeea28bde52cd6414e2cadf02bf9.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAction1c7beeea28bde52cd6414e2cadf02bf9.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction1c7beeea28bde52cd6414e2cadf02bf9.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction1c7beeea28bde52cd6414e2cadf02bf9.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
const EditAction1c7beeea28bde52cd6414e2cadf02bf9Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction1c7beeea28bde52cd6414e2cadf02bf9Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/super/passport-scope-actions/{record}/edit'
*/
EditAction1c7beeea28bde52cd6414e2cadf02bf9Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAction1c7beeea28bde52cd6414e2cadf02bf9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAction1c7beeea28bde52cd6414e2cadf02bf9.form = EditAction1c7beeea28bde52cd6414e2cadf02bf9Form
/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
const EditActionf447e42cc6aa167a3e0cd26de72d887b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, options),
    method: 'get',
})

EditActionf447e42cc6aa167a3e0cd26de72d887b.definition = {
    methods: ["get","head"],
    url: '/nds/user/passport-scope-actions/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
EditActionf447e42cc6aa167a3e0cd26de72d887b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditActionf447e42cc6aa167a3e0cd26de72d887b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
EditActionf447e42cc6aa167a3e0cd26de72d887b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
EditActionf447e42cc6aa167a3e0cd26de72d887b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, options),
    method: 'head',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
const EditActionf447e42cc6aa167a3e0cd26de72d887bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
EditActionf447e42cc6aa167a3e0cd26de72d887bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, options),
    method: 'get',
})

/**
* @see \N3XT0R\FilamentPassportUi\Resources\PassportScopeActionResource\Pages\EditAction::__invoke
* @see vendor/n3xt0r/filament-passport-ui/src/Resources/PassportScopeActionResource/Pages/EditAction.php:7
* @route '/nds/user/passport-scope-actions/{record}/edit'
*/
EditActionf447e42cc6aa167a3e0cd26de72d887bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditActionf447e42cc6aa167a3e0cd26de72d887b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditActionf447e42cc6aa167a3e0cd26de72d887b.form = EditActionf447e42cc6aa167a3e0cd26de72d887bForm

const EditAction = {
    '/nds/super/passport-scope-actions/{record}/edit': EditAction1c7beeea28bde52cd6414e2cadf02bf9,
    '/nds/user/passport-scope-actions/{record}/edit': EditActionf447e42cc6aa167a3e0cd26de72d887b,
}

export default EditAction