import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgents5baa8d664f0331d3394f482dfac11038 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, options),
    method: 'get',
})

ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgents5baa8d664f0331d3394f482dfac11038Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents5baa8d664f0331d3394f482dfac11038Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents5baa8d664f0331d3394f482dfac11038Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents5baa8d664f0331d3394f482dfac11038.form = ListWhatsappAgents5baa8d664f0331d3394f482dfac11038Form
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url(options),
    method: 'get',
})

ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp/whatsapp-agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.definition.url + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url(options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150.form = ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150Form

const ListWhatsappAgents = {
    '/admin/tenant/{tenant}/whatsapp/whatsapp-agent': ListWhatsappAgents5baa8d664f0331d3394f482dfac11038,
    '/nds/adm/whatsapp/whatsapp-agent': ListWhatsappAgentse307cc3e739a3c45456d57c527ddd150,
}

export default ListWhatsappAgents