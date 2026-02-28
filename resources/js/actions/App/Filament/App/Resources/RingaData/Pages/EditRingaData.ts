import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
const EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, options),
    method: 'get',
})

EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/nummer/lista/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
const EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41dForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41dForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41dForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d.form = EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41dForm
/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
const EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, options),
    method: 'get',
})

EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/nummer/lista/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
const EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/{record}/edit'
*/
EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564.form = EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564Form

const EditRingaData = {
    '/admin/tenant/{tenant}/nummer/lista/{record}/edit': EditRingaDataa2eb5d563ad6968a6ab9f7b648d0d41d,
    '/nds/app/team/{tenant}/nummer/lista/{record}/edit': EditRingaDataf5051179d32f6d8033e5cfc6e8bf5564,
}

export default EditRingaData