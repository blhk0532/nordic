import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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
    '/nds/adm/teams/{record}/edit': EditTeamafd2740ad5fa7753d9d90dd48df30504,
    '/nds/super/teams/{record}/edit': EditTeamd442b35d1bea26d1fffb2242b1882365,
}

export default EditTeam