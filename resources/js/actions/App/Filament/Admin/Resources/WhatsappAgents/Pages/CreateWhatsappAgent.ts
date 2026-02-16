import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
const CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, options),
    method: 'get',
})

CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
const CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents/create'
*/
CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5.form = CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5Form
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
const CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url(options),
    method: 'get',
})

CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
const CreateWhatsappAgent94fe8071a974082605a9a742d0a2563bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
CreateWhatsappAgent94fe8071a974082605a9a742d0a2563bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/adm/whatsapp-agents/create'
*/
CreateWhatsappAgent94fe8071a974082605a9a742d0a2563bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b.form = CreateWhatsappAgent94fe8071a974082605a9a742d0a2563bForm
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url = (options?: RouteQueryOptions) => {
    return CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
const CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/CreateWhatsappAgent.php:7
* @route '/nds/super/whatsapp-agents/create'
*/
CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f.form = CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4fForm

const CreateWhatsappAgent = {
    '/admin/tenant/{tenant}/whatsapp-agents/create': CreateWhatsappAgent8c80b2ead95feeffb60f45de599057f5,
    '/nds/adm/whatsapp-agents/create': CreateWhatsappAgent94fe8071a974082605a9a742d0a2563b,
    '/nds/super/whatsapp-agents/create': CreateWhatsappAgent5bb0bf238232d773dbcfed17a8461f4f,
}

export default CreateWhatsappAgent