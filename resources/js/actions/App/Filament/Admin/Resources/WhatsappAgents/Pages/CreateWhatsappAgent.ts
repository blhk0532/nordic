import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'get',
})

CreateWhatsappAgent.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgent.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
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