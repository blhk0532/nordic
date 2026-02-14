import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
const CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, options),
    method: 'get',
})

CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
const CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/create'
*/
CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a.form = CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6aForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
const CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url(options),
    method: 'get',
})

CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.definition.url + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url(options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
const CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url(options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\CreateWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/CreateWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/create'
*/
CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0.form = CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0Form
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
    '/admin/tenant/{tenant}/whatsapp-instances/create': CreateWhatsappInstancedbd0aa862153921708a34c2b4adaeb6a,
    '/nds/adm/whatsapp-instances/create': CreateWhatsappInstancebcc824a13b3751e7465d7fcaf059b5b0,
    '/nds/notify/whatsapp-instances/create': CreateWhatsappInstancef7b543919563566c182d668cc91f9c28,
    '/nds/super/whatsapp-instances/create': CreateWhatsappInstance5ee55f9afa8e7bf7672b0694ae8a5c68,
}

export default CreateWhatsappInstance