import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgents = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(args, options),
    method: 'get',
})

ListWhatsappAgents.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListWhatsappAgents.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgentsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents.form = ListWhatsappAgentsForm

export default ListWhatsappAgents