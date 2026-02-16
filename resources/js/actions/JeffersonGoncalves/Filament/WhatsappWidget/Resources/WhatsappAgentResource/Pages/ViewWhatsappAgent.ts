import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, options),
    method: 'get',
})

ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723.form = ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723Form
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, options),
    method: 'get',
})

ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp/whatsapp-agent/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
const ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}'
*/
ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0.form = ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0Form

const ViewWhatsappAgent = {
    '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}': ViewWhatsappAgent651d95770d00e69dce1cd112e0d1c723,
    '/nds/adm/whatsapp/whatsapp-agent/{record}': ViewWhatsappAgentb39662f7486a9fb8f4e8876eaec345e0,
}

export default ViewWhatsappAgent