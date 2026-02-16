import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, options),
    method: 'get',
})

CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58.form = CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58Form
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url(options),
    method: 'get',
})

CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp/whatsapp-agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.definition.url + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url(options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87.form = CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87Form

const CreateWhatsappAgent = {
    '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create': CreateWhatsappAgent360b0618e27f420f6d120589f9f3dc58,
    '/nds/adm/whatsapp/whatsapp-agent/create': CreateWhatsappAgentc257d0a98f261c41bfc34f5f763e0b87,
}

export default CreateWhatsappAgent