import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
const ViewTeam5a787fd49b526ef5f1b001543fd87644 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, options),
    method: 'get',
})

ViewTeam5a787fd49b526ef5f1b001543fd87644.definition = {
    methods: ["get","head"],
    url: '/nds/admin/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
ViewTeam5a787fd49b526ef5f1b001543fd87644.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam5a787fd49b526ef5f1b001543fd87644.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
ViewTeam5a787fd49b526ef5f1b001543fd87644.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
ViewTeam5a787fd49b526ef5f1b001543fd87644.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
const ViewTeam5a787fd49b526ef5f1b001543fd87644Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
ViewTeam5a787fd49b526ef5f1b001543fd87644Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/admin/teams/{record}'
*/
ViewTeam5a787fd49b526ef5f1b001543fd87644Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam5a787fd49b526ef5f1b001543fd87644.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam5a787fd49b526ef5f1b001543fd87644.form = ViewTeam5a787fd49b526ef5f1b001543fd87644Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
const ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/super/teams/{record}'
*/
ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b.form = ViewTeam82b1b0aca8c96cc24e708c71a18b5f1bForm

const ViewTeam = {
    '/nds/admin/teams/{record}': ViewTeam5a787fd49b526ef5f1b001543fd87644,
    '/nds/super/teams/{record}': ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b,
}

export default ViewTeam