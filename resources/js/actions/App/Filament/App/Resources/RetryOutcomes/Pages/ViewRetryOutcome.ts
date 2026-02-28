import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, options),
    method: 'get',
})

ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/retry-outcomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5.form = ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5Form
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, options),
    method: 'get',
})

ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcome8bf0ade44f673def5a2a41793895b5aeForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome8bf0ade44f673def5a2a41793895b5aeForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome8bf0ade44f673def5a2a41793895b5aeForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae.form = ViewRetryOutcome8bf0ade44f673def5a2a41793895b5aeForm

const ViewRetryOutcome = {
    '/admin/tenant/{tenant}/retry-outcomes/{record}': ViewRetryOutcome38af4ad7defc63d75c8292b4c6ca3fe5,
    '/nds/app/team/{tenant}/retry-outcomes/{record}': ViewRetryOutcome8bf0ade44f673def5a2a41793895b5ae,
}

export default ViewRetryOutcome