import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
const CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, options),
    method: 'get',
})

CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/listor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
const CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/listor/create'
*/
CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245.form = CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245Form
/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
const CreateRingaData598f253a216b2cf3a6b3d1afa51bb320 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, options),
    method: 'get',
})

CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/listor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
const CreateRingaData598f253a216b2cf3a6b3d1afa51bb320Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
CreateRingaData598f253a216b2cf3a6b3d1afa51bb320Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaListan\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaListan/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/listor/create'
*/
CreateRingaData598f253a216b2cf3a6b3d1afa51bb320Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaData598f253a216b2cf3a6b3d1afa51bb320.form = CreateRingaData598f253a216b2cf3a6b3d1afa51bb320Form

const CreateRingaData = {
    '/admin/tenant/{tenant}/ringa/listor/create': CreateRingaDatae7e4b5b993bf658e88d4ce9a27332245,
    '/nds/app/team/{tenant}/ringa/listor/create': CreateRingaData598f253a216b2cf3a6b3d1afa51bb320,
}

export default CreateRingaData