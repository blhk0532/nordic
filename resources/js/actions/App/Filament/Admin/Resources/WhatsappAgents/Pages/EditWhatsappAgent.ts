import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, options),
    method: 'get',
})

EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1.form = EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1Form
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, options),
    method: 'get',
})

EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-agents/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c.form = EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0cForm
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, options),
    method: 'get',
})

EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
const EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/EditWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/{record}/edit'
*/
EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973.form = EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973Form

const EditWhatsappAgent = {
    '/admin/tenant/{tenant}/whatsapp-agents/{record}/edit': EditWhatsappAgentf962327c9297bee18faaef55a52ae6e1,
    '/nds/adm/whatsapp-agents/{record}/edit': EditWhatsappAgent69b71f25b1aa990d5cfeb3bc057f6f0c,
    '/nds/super/whatsapp-agents/{record}/edit': EditWhatsappAgent98c5d4fc231a88024e62f03f1fcd4973,
}

export default EditWhatsappAgent