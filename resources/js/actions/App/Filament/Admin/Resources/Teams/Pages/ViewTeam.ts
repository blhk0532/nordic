import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
const ViewTeam8b703089189b8139a73fa57e24066f55 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, options),
    method: 'get',
})

ViewTeam8b703089189b8139a73fa57e24066f55.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
ViewTeam8b703089189b8139a73fa57e24066f55.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam8b703089189b8139a73fa57e24066f55.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
ViewTeam8b703089189b8139a73fa57e24066f55.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
ViewTeam8b703089189b8139a73fa57e24066f55.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
const ViewTeam8b703089189b8139a73fa57e24066f55Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
ViewTeam8b703089189b8139a73fa57e24066f55Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ViewTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ViewTeam.php:7
* @route '/nds/adm/teams/{record}'
*/
ViewTeam8b703089189b8139a73fa57e24066f55Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTeam8b703089189b8139a73fa57e24066f55.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTeam8b703089189b8139a73fa57e24066f55.form = ViewTeam8b703089189b8139a73fa57e24066f55Form
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
    '/nds/adm/teams/{record}': ViewTeam8b703089189b8139a73fa57e24066f55,
    '/nds/super/teams/{record}': ViewTeam82b1b0aca8c96cc24e708c71a18b5f1b,
}

export default ViewTeam