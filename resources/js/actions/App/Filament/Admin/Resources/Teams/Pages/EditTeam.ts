import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
const EditTeam89fa6f38d73e1615e57f389f7d25b67d = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, options),
    method: 'get',
})

EditTeam89fa6f38d73e1615e57f389f7d25b67d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
EditTeam89fa6f38d73e1615e57f389f7d25b67d.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditTeam89fa6f38d73e1615e57f389f7d25b67d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
EditTeam89fa6f38d73e1615e57f389f7d25b67d.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
EditTeam89fa6f38d73e1615e57f389f7d25b67d.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
const EditTeam89fa6f38d73e1615e57f389f7d25b67dForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
EditTeam89fa6f38d73e1615e57f389f7d25b67dForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/admin/tenant/{tenant}/teams/{record}/edit'
*/
EditTeam89fa6f38d73e1615e57f389f7d25b67dForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeam89fa6f38d73e1615e57f389f7d25b67d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeam89fa6f38d73e1615e57f389f7d25b67d.form = EditTeam89fa6f38d73e1615e57f389f7d25b67dForm
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
const EditTeamafd2740ad5fa7753d9d90dd48df30504 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, options),
    method: 'get',
})

EditTeamafd2740ad5fa7753d9d90dd48df30504.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
EditTeamafd2740ad5fa7753d9d90dd48df30504.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTeamafd2740ad5fa7753d9d90dd48df30504.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
EditTeamafd2740ad5fa7753d9d90dd48df30504.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
EditTeamafd2740ad5fa7753d9d90dd48df30504.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
const EditTeamafd2740ad5fa7753d9d90dd48df30504Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
EditTeamafd2740ad5fa7753d9d90dd48df30504Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/adm/teams/{record}/edit'
*/
EditTeamafd2740ad5fa7753d9d90dd48df30504Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamafd2740ad5fa7753d9d90dd48df30504.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeamafd2740ad5fa7753d9d90dd48df30504.form = EditTeamafd2740ad5fa7753d9d90dd48df30504Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
const EditTeamd442b35d1bea26d1fffb2242b1882365 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

EditTeamd442b35d1bea26d1fffb2242b1882365.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTeamd442b35d1bea26d1fffb2242b1882365.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
const EditTeamd442b35d1bea26d1fffb2242b1882365Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/super/teams/{record}/edit'
*/
EditTeamd442b35d1bea26d1fffb2242b1882365Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamd442b35d1bea26d1fffb2242b1882365.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeamd442b35d1bea26d1fffb2242b1882365.form = EditTeamd442b35d1bea26d1fffb2242b1882365Form

const EditTeam = {
    '/admin/tenant/{tenant}/teams/{record}/edit': EditTeam89fa6f38d73e1615e57f389f7d25b67d,
    '/nds/adm/teams/{record}/edit': EditTeamafd2740ad5fa7753d9d90dd48df30504,
    '/nds/super/teams/{record}/edit': EditTeamd442b35d1bea26d1fffb2242b1882365,
}

export default EditTeam