import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'get',
})

ListWhatsappAgents.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp/whatsapp-agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgents.definition.url + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
const ListWhatsappAgentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent'
*/
ListWhatsappAgentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents.form = ListWhatsappAgentsForm

export default ListWhatsappAgents