import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
const ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, options),
    method: 'get',
})

ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
const ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/admin/tenant/{tenant}/whatsapp-agents'
*/
ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92.form = ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92Form
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
const ListWhatsappAgents8d51c8e48b11269da86942fd787e872a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url(options),
    method: 'get',
})

ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.definition = {
    methods: ["get","head"],
    url: '/nds/adm/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
const ListWhatsappAgents8d51c8e48b11269da86942fd787e872aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
ListWhatsappAgents8d51c8e48b11269da86942fd787e872aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/adm/whatsapp-agents'
*/
ListWhatsappAgents8d51c8e48b11269da86942fd787e872aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents8d51c8e48b11269da86942fd787e872a.form = ListWhatsappAgents8d51c8e48b11269da86942fd787e872aForm
/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.definition = {
    methods: ["get","head"],
    url: '/nds/super/whatsapp-agents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url = (options?: RouteQueryOptions) => {
    return ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
const ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents::__invoke
* @see app/Filament/Admin/Resources/WhatsappAgents/Pages/ListWhatsappAgents.php:7
* @route '/nds/super/whatsapp-agents'
*/
ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4.form = ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4Form

const ListWhatsappAgents = {
    '/admin/tenant/{tenant}/whatsapp-agents': ListWhatsappAgentsb9cbc8d8460b7da3a160bb2d7f0e6b92,
    '/nds/adm/whatsapp-agents': ListWhatsappAgents8d51c8e48b11269da86942fd787e872a,
    '/nds/super/whatsapp-agents': ListWhatsappAgents9115b66387d393fe2c21cdf6fb7938c4,
}

export default ListWhatsappAgents