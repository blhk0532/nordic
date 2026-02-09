import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
const CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url(options),
    method: 'get',
})

CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.definition = {
    methods: ["get","head"],
    url: '/nds/admin/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
const CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/create'
*/
CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034.form = CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
const CreateWhatsappInstancef7b543919563566c182d668cc91f9c28 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
const CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/create'
*/
CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstancef7b543919563566c182d668cc91f9c28.form = CreateWhatsappInstancef7b543919563566c182d668cc91f9c28Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
const CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
const CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/create'
*/
CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68.form = CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68Form

const CreateWhatsappInstance = {
    '/nds/admin/whatsapp-instances/create': CreateWhatsappInstance8c4c29b32cc0c14eb9f598a333f20034,
    '/nds/notify/whatsapp-instances/create': CreateWhatsappInstancef7b543919563566c182d668cc91f9c28,
    '/nds/super/whatsapp-instances/create': CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68,
}

export default CreateWhatsappInstance