import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
const ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url(options),
    method: 'get',
})

ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.definition = {
    methods: ["get","head"],
    url: '/nds/admin/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url = (options?: RouteQueryOptions) => {
    return ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
const ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/admin/whatsapp-instances'
*/
ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02.form = ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
const ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url(options),
    method: 'get',
})

ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url = (options?: RouteQueryOptions) => {
    return ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
const ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/notify/whatsapp-instances'
*/
ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006.form = ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
const ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url(options),
    method: 'get',
})

ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url = (options?: RouteQueryOptions) => {
    return ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
const ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/super/whatsapp-instances'
*/
ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6.form = ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6Form

const ListWhatsappInstances = {
    '/nds/admin/whatsapp-instances': ListWhatsappInstancesb1a37173f89868cae87de22f53aeab02,
    '/nds/notify/whatsapp-instances': ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006,
    '/nds/super/whatsapp-instances': ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6,
}

export default ListWhatsappInstances