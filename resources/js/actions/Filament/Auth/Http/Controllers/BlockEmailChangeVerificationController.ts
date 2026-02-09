import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationController = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController.url(args, options),
    method: 'get',
})

BlockEmailChangeVerificationController.definition = {
    methods: ["get","head"],
    url: '/nds/adm/email-change-verification/verify/{id}/{email}/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return BlockEmailChangeVerificationController.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BlockEmailChangeVerificationController.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationControllerForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationControllerForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/adm/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationControllerForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BlockEmailChangeVerificationController.form = BlockEmailChangeVerificationControllerForm

export default BlockEmailChangeVerificationController