import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
const ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, options),
    method: 'get',
})

ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.definition = {
    methods: ["get","head"],
    url: '/nds/admin/whatsapp-instances/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
const ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\ViewWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/ViewWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}'
*/
ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f.form = ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266fForm
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
    '/nds/admin/whatsapp-instances/{record}': ViewWhatsappInstancede683b6bf1edea984bb5299bcb66266f,
    '/nds/notify/whatsapp-instances/{record}': ViewWhatsappInstance4000635695f943fbf9995296ee29c986,
    '/nds/super/whatsapp-instances/{record}': ViewWhatsappInstance3cfb53917855120c5220569eb407f49e,
}

export default ViewWhatsappInstance