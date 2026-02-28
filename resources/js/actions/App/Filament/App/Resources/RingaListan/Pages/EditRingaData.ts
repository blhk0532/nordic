import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
const EditRingaData5ce293fa700a1d060b1e9458b7d85314 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, options),
    method: 'get',
})

EditRingaData5ce293fa700a1d060b1e9458b7d85314.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/listor/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData5ce293fa700a1d060b1e9458b7d85314.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaData5ce293fa700a1d060b1e9458b7d85314.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData5ce293fa700a1d060b1e9458b7d85314.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData5ce293fa700a1d060b1e9458b7d85314.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
const EditRingaData5ce293fa700a1d060b1e9458b7d85314Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData5ce293fa700a1d060b1e9458b7d85314Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData5ce293fa700a1d060b1e9458b7d85314Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData5ce293fa700a1d060b1e9458b7d85314.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaData5ce293fa700a1d060b1e9458b7d85314.form = EditRingaData5ce293fa700a1d060b1e9458b7d85314Form
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
const EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, options),
    method: 'get',
})

EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/listor/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
const EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0bForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0bForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/{record}/edit'
*/
EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0bForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b.form = EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0bForm

const EditRingaData = {
    '/admin/tenant/{tenant}/ringa/listor/{record}/edit': EditRingaData5ce293fa700a1d060b1e9458b7d85314,
    '/nds/app/team/{tenant}/ringa/listor/{record}/edit': EditRingaData270a7e4c8c19dd6cd7c6c087ad979f0b,
}

export default EditRingaData