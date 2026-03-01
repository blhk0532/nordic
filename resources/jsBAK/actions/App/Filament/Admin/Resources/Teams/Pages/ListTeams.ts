import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
const ListTeamse249517cc07a35736c2e38857942a4ea = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, options),
    method: 'get',
})

ListTeamse249517cc07a35736c2e38857942a4ea.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
ListTeamse249517cc07a35736c2e38857942a4ea.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return ListTeamse249517cc07a35736c2e38857942a4ea.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
ListTeamse249517cc07a35736c2e38857942a4ea.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
ListTeamse249517cc07a35736c2e38857942a4ea.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
const ListTeamse249517cc07a35736c2e38857942a4eaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
ListTeamse249517cc07a35736c2e38857942a4eaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/admin/tenant/{tenant}/teams'
*/
ListTeamse249517cc07a35736c2e38857942a4eaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamse249517cc07a35736c2e38857942a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeamse249517cc07a35736c2e38857942a4ea.form = ListTeamse249517cc07a35736c2e38857942a4eaForm
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.url = (options?: RouteQueryOptions) => {
    return ListTeamsd656303a01fc2a64489cd0bac6021617.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
const ListTeamsd656303a01fc2a64489cd0bac6021617Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\ListTeams::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/ListTeams.php:7
* @route '/nds/super/teams'
*/
ListTeamsd656303a01fc2a64489cd0bac6021617Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTeamsd656303a01fc2a64489cd0bac6021617.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTeamsd656303a01fc2a64489cd0bac6021617.form = ListTeamsd656303a01fc2a64489cd0bac6021617Form

const ListTeams = {
    '/admin/tenant/{tenant}/teams': ListTeamse249517cc07a35736c2e38857942a4ea,
    '/nds/super/teams': ListTeamsd656303a01fc2a64489cd0bac6021617,
}

export default ListTeams