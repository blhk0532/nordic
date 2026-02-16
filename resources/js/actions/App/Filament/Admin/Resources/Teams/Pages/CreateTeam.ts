import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
const CreateTeam7f60a6076bede60c62760049f5f3eb9f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, options),
    method: 'get',
})

CreateTeam7f60a6076bede60c62760049f5f3eb9f.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
CreateTeam7f60a6076bede60c62760049f5f3eb9f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateTeam7f60a6076bede60c62760049f5f3eb9f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
CreateTeam7f60a6076bede60c62760049f5f3eb9f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
CreateTeam7f60a6076bede60c62760049f5f3eb9f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
const CreateTeam7f60a6076bede60c62760049f5f3eb9fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
CreateTeam7f60a6076bede60c62760049f5f3eb9fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/admin/tenant/{tenant}/teams/create'
*/
CreateTeam7f60a6076bede60c62760049f5f3eb9fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam7f60a6076bede60c62760049f5f3eb9f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam7f60a6076bede60c62760049f5f3eb9f.form = CreateTeam7f60a6076bede60c62760049f5f3eb9fForm
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
const CreateTeamdd5fce126bb8ab97a884241d64bad7e4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

CreateTeamdd5fce126bb8ab97a884241d64bad7e4.definition = {
    methods: ["get","head"],
    url: '/nds/adm/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url = (options?: RouteQueryOptions) => {
    return CreateTeamdd5fce126bb8ab97a884241d64bad7e4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
const CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/adm/teams/create'
*/
CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeamdd5fce126bb8ab97a884241d64bad7e4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeamdd5fce126bb8ab97a884241d64bad7e4.form = CreateTeamdd5fce126bb8ab97a884241d64bad7e4Form
/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.definition = {
    methods: ["get","head"],
    url: '/nds/super/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.url = (options?: RouteQueryOptions) => {
    return CreateTeam438b874aed1800c0be75ebcb9601be12.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
const CreateTeam438b874aed1800c0be75ebcb9601be12Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Teams\Pages\CreateTeam::__invoke
* @see app/Filament/Admin/Resources/Teams/Pages/CreateTeam.php:7
* @route '/nds/super/teams/create'
*/
CreateTeam438b874aed1800c0be75ebcb9601be12Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTeam438b874aed1800c0be75ebcb9601be12.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTeam438b874aed1800c0be75ebcb9601be12.form = CreateTeam438b874aed1800c0be75ebcb9601be12Form

const CreateTeam = {
    '/admin/tenant/{tenant}/teams/create': CreateTeam7f60a6076bede60c62760049f5f3eb9f,
    '/nds/adm/teams/create': CreateTeamdd5fce126bb8ab97a884241d64bad7e4,
    '/nds/super/teams/create': CreateTeam438b874aed1800c0be75ebcb9601be12,
}

export default CreateTeam