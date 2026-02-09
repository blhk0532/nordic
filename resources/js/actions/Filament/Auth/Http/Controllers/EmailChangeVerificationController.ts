import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240 = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, options),
    method: 'get',
})

EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.definition = {
    methods: ["get","head"],
    url: '/nds/adm/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240Form = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240Form.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240Form.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240.form = EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240Form
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
    '/nds/adm/email-change-verification/verify/{id}/{email}': EmailChangeVerificationController4e03d66110b918365b37ba0fe9414240,
    '/nds/super/email-change-verification/verify/{id}/{email}': EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0,
}

export default EmailChangeVerificationController