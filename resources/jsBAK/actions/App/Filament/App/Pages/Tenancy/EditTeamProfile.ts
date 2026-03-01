import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
const EditTeamProfile = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamProfile.url(args, options),
    method: 'get',
})

EditTeamProfile.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
EditTeamProfile.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return EditTeamProfile.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
EditTeamProfile.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
EditTeamProfile.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamProfile.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
const EditTeamProfileForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
EditTeamProfileForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\EditTeamProfile::__invoke
* @see app/Filament/App/Pages/Tenancy/EditTeamProfile.php:7
* @route '/nds/app/team/{tenant}/profile'
*/
EditTeamProfileForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTeamProfile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTeamProfile.form = EditTeamProfileForm

export default EditTeamProfile