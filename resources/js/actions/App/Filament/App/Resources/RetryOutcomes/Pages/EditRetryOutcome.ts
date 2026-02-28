import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcomeda136805b6cbc9be8470fc8363962b96 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, options),
    method: 'get',
})

EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/retry-outcomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcomeda136805b6cbc9be8470fc8363962b96Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeda136805b6cbc9be8470fc8363962b96Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/admin/tenant/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeda136805b6cbc9be8470fc8363962b96Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRetryOutcomeda136805b6cbc9be8470fc8363962b96.form = EditRetryOutcomeda136805b6cbc9be8470fc8363962b96Form
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, options),
    method: 'get',
})

EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcomecb1c9ae7a67a19629c5d58535187204fForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomecb1c9ae7a67a19629c5d58535187204fForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomecb1c9ae7a67a19629c5d58535187204fForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f.form = EditRetryOutcomecb1c9ae7a67a19629c5d58535187204fForm

const EditRetryOutcome = {
    '/admin/tenant/{tenant}/retry-outcomes/{record}/edit': EditRetryOutcomeda136805b6cbc9be8470fc8363962b96,
    '/nds/app/team/{tenant}/retry-outcomes/{record}/edit': EditRetryOutcomecb1c9ae7a67a19629c5d58535187204f,
}

export default EditRetryOutcome