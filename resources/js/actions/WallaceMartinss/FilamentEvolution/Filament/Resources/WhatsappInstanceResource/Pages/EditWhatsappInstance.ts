import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, options),
    method: 'get',
})

EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.definition = {
    methods: ["get","head"],
    url: '/nds/admin/whatsapp-instances/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dceForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dceForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/admin/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dceForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce.form = EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dceForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, options),
    method: 'get',
})

EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.definition = {
    methods: ["get","head"],
    url: '/nds/notify/whatsapp-instances/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance312e99f64f8417cd9747f582528c8b1eForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance312e99f64f8417cd9747f582528c8b1eForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/notify/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance312e99f64f8417cd9747f582528c8b1eForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e.form = EditWhatsappInstance312e99f64f8417cd9747f582528c8b1eForm
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, options),
    method: 'get',
})

EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-instances/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/super/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288.form = EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288Form

const EditWhatsappInstance = {
    '/nds/admin/whatsapp-instances/{record}/edit': EditWhatsappInstance4f5ca9ad876a3608cf67faa799786dce,
    '/nds/notify/whatsapp-instances/{record}/edit': EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e,
    '/nds/super/whatsapp-instances/{record}/edit': EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288,
}

export default EditWhatsappInstance