import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ListWhatsappAgents::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
create.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\CreateWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/CreateWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/create'
*/
createForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
export const view = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
view.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
view.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
view.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
const viewForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
viewForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\ViewWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/ViewWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}'
*/
viewForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
edit.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \JeffersonGoncalves\Filament\WhatsappWidget\Resources\WhatsappAgentResource\Pages\EditWhatsappAgent::__invoke
* @see plugins/jeffersongoncalves/filament-whatsapp-widget/src/Resources/WhatsappAgentResource/Pages/EditWhatsappAgent.php:7
* @route '/admin/tenant/{tenant}/whatsapp/whatsapp-agent/{record}/edit'
*/
editForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const whatsappAgent = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default whatsappAgent