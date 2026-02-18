import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgent = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgent.url(args, options),
    method: 'get',
})

ViewWhatsappAgent.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewWhatsappAgent.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappAgent.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgentForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappAgent.form = ViewWhatsappAgentForm

export default ViewWhatsappAgent