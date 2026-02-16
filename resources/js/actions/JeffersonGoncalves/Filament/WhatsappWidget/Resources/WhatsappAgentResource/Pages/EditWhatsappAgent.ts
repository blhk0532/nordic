import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
const EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933 = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, options),
    method: 'get',
})

EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
const EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933Form = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933Form.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933Form.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933.form = EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933Form
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
const EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, options),
    method: 'get',
})

EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp/whatsapp-agent/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
const EditWhatsappAgentb14991d9533536feb78c0f1712b77e2cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgentb14991d9533536feb78c0f1712b77e2cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/nds/adm/whatsapp/whatsapp-agent/{record}/edit'
*/
EditWhatsappAgentb14991d9533536feb78c0f1712b77e2cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c.form = EditWhatsappAgentb14991d9533536feb78c0f1712b77e2cForm

const EditWhatsappAgent = {
    '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit': EditWhatsappAgent5b6a93dd27df37542d9799da69c7f933,
    '/nds/adm/whatsapp/whatsapp-agent/{record}/edit': EditWhatsappAgentb14991d9533536feb78c0f1712b77e2c,
}

export default EditWhatsappAgent