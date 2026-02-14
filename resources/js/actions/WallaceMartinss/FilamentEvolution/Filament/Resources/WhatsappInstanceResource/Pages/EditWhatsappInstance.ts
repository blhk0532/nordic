import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance345bc1c1db76c694027e476abedb4be0 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, options),
    method: 'get',
})

EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstance345bc1c1db76c694027e476abedb4be0Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance345bc1c1db76c694027e476abedb4be0Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstance345bc1c1db76c694027e476abedb4be0Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappInstance345bc1c1db76c694027e476abedb4be0.form = EditWhatsappInstance345bc1c1db76c694027e476abedb4be0Form
/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, options),
    method: 'get',
})

EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-instances/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, options),
    method: 'head',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
const EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, options),
    method: 'get',
})

/**
* @see \WallaceMartinss\FilamentEvolution\Filament\Resources\WhatsappInstanceResource\Pages\EditWhatsappInstance::__invoke
* @see plugins/wallacemartinss/filament-whatsapp-conector/src/Filament/Resources/WhatsappInstanceResource/Pages/EditWhatsappInstance.php:7
* @route '/nds/adm/whatsapp-instances/{record}/edit'
*/
EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8.form = EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8Form
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
    '/admin/tenant/{tenant}/whatsapp-instances/{record}/edit': EditWhatsappInstance345bc1c1db76c694027e476abedb4be0,
    '/nds/adm/whatsapp-instances/{record}/edit': EditWhatsappInstanced8fda1a81c44f11fdf11861271fc13e8,
    '/nds/notify/whatsapp-instances/{record}/edit': EditWhatsappInstance312e99f64f8417cd9747f582528c8b1e,
    '/nds/super/whatsapp-instances/{record}/edit': EditWhatsappInstance3cb69ed598bdb98bb4e7cbd0f510c288,
}

export default EditWhatsappInstance