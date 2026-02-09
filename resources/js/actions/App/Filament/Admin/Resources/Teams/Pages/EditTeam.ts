import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
const EditTeamcecdd2f76455d0f3682dff2e9ec22117 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, options),
    method: 'get',
})

EditTeamcecdd2f76455d0f3682dff2e9ec22117.definition = {
    methods: ["get","head"],
    url: '/nds/admin/teams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
EditTeamcecdd2f76455d0f3682dff2e9ec22117.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTeamcecdd2f76455d0f3682dff2e9ec22117.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
EditTeamcecdd2f76455d0f3682dff2e9ec22117.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
EditTeamcecdd2f76455d0f3682dff2e9ec22117.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
const EditTeamcecdd2f76455d0f3682dff2e9ec22117Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
EditTeamcecdd2f76455d0f3682dff2e9ec22117Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\EditTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/EditTeam.php:7
* @route '/nds/admin/teams/{record}/edit'
*/
EditTeamcecdd2f76455d0f3682dff2e9ec22117Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamcecdd2f76455d0f3682dff2e9ec22117.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeamcecdd2f76455d0f3682dff2e9ec22117.form = EditTeamcecdd2f76455d0f3682dff2e9ec22117Form
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
    '/nds/admin/teams/{record}/edit': EditTeamcecdd2f76455d0f3682dff2e9ec22117,
    '/nds/super/teams/{record}/edit': EditTeamd442b35d1bea26d1fffb2242b1882365,
}

export default EditTeam