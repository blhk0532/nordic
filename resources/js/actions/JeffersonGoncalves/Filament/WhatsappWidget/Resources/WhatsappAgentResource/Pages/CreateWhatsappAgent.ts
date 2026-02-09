import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'get',
})

CreateWhatsappAgent.definition = {
    methods: ["get","head"],
    url: '/nds/admin/whatsapp/whatsapp-agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgent.definition.url + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
const CreateWhatsappAgentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/nds/admin/whatsapp/whatsapp-agent/create'
*/
CreateWhatsappAgentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent.form = CreateWhatsappAgentForm

export default CreateWhatsappAgent