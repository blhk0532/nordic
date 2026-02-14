import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
const ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, options),
    method: 'get',
})

ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
const ListWhatsappInstancesac889784123f5142239cdd10ddd15b3bForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
ListWhatsappInstancesac889784123f5142239cdd10ddd15b3bForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances'
*/
ListWhatsappInstancesac889784123f5142239cdd10ddd15b3bForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b.form = ListWhatsappInstancesac889784123f5142239cdd10ddd15b3bForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
const ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url(options),
    method: 'get',
})

ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url = (options?: RouteQueryOptions) => {
    return ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
const ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ListWhatsappInstances::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ListWhatsappInstances.php:7
* @route '/nds/adm/whatsapp-instances'
*/
ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22.form = ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22Form
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
    '/admin/tenant/{tenant}/whatsapp-instances': ListWhatsappInstancesac889784123f5142239cdd10ddd15b3b,
    '/nds/adm/whatsapp-instances': ListWhatsappInstancesf8b5267465de2dc4ed72da9a5e493b22,
    '/nds/notify/whatsapp-instances': ListWhatsappInstancesf02fc72ff76f5432acd3a004138ed006,
    '/nds/super/whatsapp-instances': ListWhatsappInstances5d41258a8e1107841f9f539c3c12b6e6,
}

export default ListWhatsappInstances