import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
const ListWhatsappInstances = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstances.url(options),
    method: 'get',
})

ListWhatsappInstances.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstances.url = (options?: RouteQueryOptions) => {
    return ListWhatsappInstances.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstances.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstances.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstances.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstances.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
const ListWhatsappInstancesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstances.form = ListWhatsappInstancesForm

export default ListWhatsappInstances