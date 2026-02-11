import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance6afe85c7b48dd87915445428de7de633 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, options),
    method: 'get',
})

ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.definition = {
    methods: ["get","head"],
    url: '/admin/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance6afe85c7b48dd87915445428de7de633Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstance6afe85c7b48dd87915445428de7de633Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstance6afe85c7b48dd87915445428de7de633Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance6afe85c7b48dd87915445428de7de633.form = ViewWhatsappInstance6afe85c7b48dd87915445428de7de633Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, options),
    method: 'get',
})

ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccbForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccbForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}'
*/
ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccbForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb.form = ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccbForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance4000635695f943fbf9995296ee29c986 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

ViewWhatsappInstance4000635695f943fbf9995296ee29c986.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewWhatsappInstance4000635695f943fbf9995296ee29c986.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}'
*/
ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance4000635695f943fbf9995296ee29c986.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance4000635695f943fbf9995296ee29c986.form = ViewWhatsappInstance4000635695f943fbf9995296ee29c986Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance3cfb53917855120c5220569eb407f49e = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
const ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}'
*/
ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstance3cfb53917855120c5220569eb407f49e.form = ViewWhatsappInstance3cfb53917855120c5220569eb407f49eForm

const ViewWhatsappInstance = {
    '/admin/whatsapp-instances/{record}': ViewWhatsappInstance6afe85c7b48dd87915445428de7de633,
    '/nds/adm/whatsapp-instances/{record}': ViewWhatsappInstance2fab7987434fb5d2e614ecd91fc45ccb,
    '/nds/notify/whatsapp-instances/{record}': ViewWhatsappInstance4000635695f943fbf9995296ee29c986,
    '/nds/super/whatsapp-instances/{record}': ViewWhatsappInstance3cfb53917855120c5220569eb407f49e,
}

export default ViewWhatsappInstance