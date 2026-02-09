import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
const CreateWhatsappInstance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance.url(options),
    method: 'get',
})

CreateWhatsappInstance.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstance.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstance.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstance.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
const CreateWhatsappInstanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstance.form = CreateWhatsappInstanceForm

export default CreateWhatsappInstance