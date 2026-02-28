import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
const CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, options),
    method: 'get',
})

CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/ringa/data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
const CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/ringa/data/create'
*/
CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83.form = CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83Form
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
const CreateRingaData9c7c43063420481eb0d9b21c6591b14d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, options),
    method: 'get',
})

CreateRingaData9c7c43063420481eb0d9b21c6591b14d.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaData9c7c43063420481eb0d9b21c6591b14d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData9c7c43063420481eb0d9b21c6591b14d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData9c7c43063420481eb0d9b21c6591b14d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
const CreateRingaData9c7c43063420481eb0d9b21c6591b14dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData9c7c43063420481eb0d9b21c6591b14dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData9c7c43063420481eb0d9b21c6591b14dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData9c7c43063420481eb0d9b21c6591b14d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaData9c7c43063420481eb0d9b21c6591b14d.form = CreateRingaData9c7c43063420481eb0d9b21c6591b14dForm

const CreateRingaData = {
    '/admin/tenant/{tenant}/ringa/data/create': CreateRingaDataf7e4e0baa50d3c3429109dfe7cd7ea83,
    '/nds/app/team/{tenant}/ringa/data/create': CreateRingaData9c7c43063420481eb0d9b21c6591b14d,
}

export default CreateRingaData