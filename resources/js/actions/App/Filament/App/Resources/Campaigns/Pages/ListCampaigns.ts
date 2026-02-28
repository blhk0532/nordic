import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
const ListCampaigns821151ea754d1eb525d714d959377a7d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, options),
    method: 'get',
})

ListCampaigns821151ea754d1eb525d714d959377a7d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
ListCampaigns821151ea754d1eb525d714d959377a7d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCampaigns821151ea754d1eb525d714d959377a7d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
ListCampaigns821151ea754d1eb525d714d959377a7d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
ListCampaigns821151ea754d1eb525d714d959377a7d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
const ListCampaigns821151ea754d1eb525d714d959377a7dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
ListCampaigns821151ea754d1eb525d714d959377a7dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/admin/tenant/{tenant}/campaigns'
*/
ListCampaigns821151ea754d1eb525d714d959377a7dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns821151ea754d1eb525d714d959377a7d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCampaigns821151ea754d1eb525d714d959377a7d.form = ListCampaigns821151ea754d1eb525d714d959377a7dForm
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
const ListCampaignsfe51704d4516c68e2b685470d2926b76 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, options),
    method: 'get',
})

ListCampaignsfe51704d4516c68e2b685470d2926b76.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsfe51704d4516c68e2b685470d2926b76.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCampaignsfe51704d4516c68e2b685470d2926b76.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsfe51704d4516c68e2b685470d2926b76.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsfe51704d4516c68e2b685470d2926b76.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
const ListCampaignsfe51704d4516c68e2b685470d2926b76Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsfe51704d4516c68e2b685470d2926b76Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsfe51704d4516c68e2b685470d2926b76Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaignsfe51704d4516c68e2b685470d2926b76.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCampaignsfe51704d4516c68e2b685470d2926b76.form = ListCampaignsfe51704d4516c68e2b685470d2926b76Form

const ListCampaigns = {
    '/admin/tenant/{tenant}/campaigns': ListCampaigns821151ea754d1eb525d714d959377a7d,
    '/nds/app/team/{tenant}/campaigns': ListCampaignsfe51704d4516c68e2b685470d2926b76,
}

export default ListCampaigns