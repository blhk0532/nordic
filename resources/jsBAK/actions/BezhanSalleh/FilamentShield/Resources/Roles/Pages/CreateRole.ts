import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
const CreateRole2dc8b84baaaef3bae51d8a32bcf1431f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, options),
    method: 'get',
})

CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
const CreateRole2dc8b84baaaef3bae51d8a32bcf1431fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
CreateRole2dc8b84baaaef3bae51d8a32bcf1431fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/admin/tenant/{tenant}/shield/roles/create'
*/
CreateRole2dc8b84baaaef3bae51d8a32bcf1431fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRole2dc8b84baaaef3bae51d8a32bcf1431f.form = CreateRole2dc8b84baaaef3bae51d8a32bcf1431fForm
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.url = (options?: RouteQueryOptions) => {
    return CreateRole11e055d7abeddef45d22dea3c46b678f.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see plugins/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.form = CreateRole11e055d7abeddef45d22dea3c46b678fForm

const CreateRole = {
    '/admin/tenant/{tenant}/shield/roles/create': CreateRole2dc8b84baaaef3bae51d8a32bcf1431f,
    '/nds/super/shield/roles/create': CreateRole11e055d7abeddef45d22dea3c46b678f,
}

export default CreateRole