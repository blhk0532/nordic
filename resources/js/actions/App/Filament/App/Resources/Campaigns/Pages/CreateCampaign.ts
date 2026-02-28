import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
const CreateCampaign20b24e1a420ca1a3208abf722a0c15d8 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, options),
    method: 'get',
})

CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
const CreateCampaign20b24e1a420ca1a3208abf722a0c15d8Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
CreateCampaign20b24e1a420ca1a3208abf722a0c15d8Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/admin/tenant/{tenant}/campaigns/create'
*/
CreateCampaign20b24e1a420ca1a3208abf722a0c15d8Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCampaign20b24e1a420ca1a3208abf722a0c15d8.form = CreateCampaign20b24e1a420ca1a3208abf722a0c15d8Form
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
const CreateCampaignf81f5abce8b198f96dba6a20478ec246 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, options),
    method: 'get',
})

CreateCampaignf81f5abce8b198f96dba6a20478ec246.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignf81f5abce8b198f96dba6a20478ec246.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCampaignf81f5abce8b198f96dba6a20478ec246.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignf81f5abce8b198f96dba6a20478ec246.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignf81f5abce8b198f96dba6a20478ec246.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
const CreateCampaignf81f5abce8b198f96dba6a20478ec246Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignf81f5abce8b198f96dba6a20478ec246Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignf81f5abce8b198f96dba6a20478ec246Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaignf81f5abce8b198f96dba6a20478ec246.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCampaignf81f5abce8b198f96dba6a20478ec246.form = CreateCampaignf81f5abce8b198f96dba6a20478ec246Form

const CreateCampaign = {
    '/admin/tenant/{tenant}/campaigns/create': CreateCampaign20b24e1a420ca1a3208abf722a0c15d8,
    '/nds/app/team/{tenant}/campaigns/create': CreateCampaignf81f5abce8b198f96dba6a20478ec246,
}

export default CreateCampaign