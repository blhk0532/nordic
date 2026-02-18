import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgent = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(args, options),
    method: 'get',
})

CreateWhatsappAgent.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateWhatsappAgent.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgentForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent.form = CreateWhatsappAgentForm

export default CreateWhatsappAgent