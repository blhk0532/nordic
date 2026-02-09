import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController.url(args, options),
    method: 'get',
})

EmailChangeVerificationController.definition = {
    methods: ["get","head"],
    url: '/nds/adm/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return EmailChangeVerificationController.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationController.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationControllerForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllerForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationController.form = EmailChangeVerificationControllerForm

export default EmailChangeVerificationController