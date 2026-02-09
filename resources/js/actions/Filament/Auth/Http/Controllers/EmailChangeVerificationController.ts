import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, options),
    method: 'get',
})

EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.definition = {
    methods: ["get","head"],
    url: '/nds/admin/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            email: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        email: args.email,
    }

    return EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0dForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0dForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0dForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d.form = EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0dForm
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0 = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.definition = {
    methods: ["get","head"],
    url: '/nds/super/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            email: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        email: args.email,
    }

    return EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.form = EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form

const EmailChangeVerificationController = {
    '/nds/admin/email-change-verification/verify/{id}/{email}': EmailChangeVerificationControllerc3f332dde658fddca6e4dfa5cd9b7b0d,
    '/nds/super/email-change-verification/verify/{id}/{email}': EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0,
}

export default EmailChangeVerificationController