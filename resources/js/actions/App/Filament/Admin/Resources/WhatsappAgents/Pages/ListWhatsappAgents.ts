import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'get',
})

ListWhatsappAgents.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgents.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
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