import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
export const dashboard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
dashboard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return dashboard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
dashboard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
dashboard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
const dashboardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
dashboardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
dashboardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
export const sendWhatsapp = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'get',
})

sendWhatsapp.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
sendWhatsapp.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return sendWhatsapp.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
sendWhatsapp.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
sendWhatsapp.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sendWhatsapp.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
const sendWhatsappForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
sendWhatsappForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
sendWhatsappForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sendWhatsapp.form = sendWhatsappForm

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
export const members = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: members.url(args, options),
    method: 'get',
})

members.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
members.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return members.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
members.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: members.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
members.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: members.url(args, options),
    method: 'head',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
const membersForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: members.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
membersForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: members.url(args, options),
    method: 'get',
})

/**
* @see \AlessandroNuunes\FilamentMember\Pages\TenantMembers::__invoke
* @see vendor/alessandronuunes/filament-member/src/Pages/TenantMembers.php:7
* @route '/admin/tenant/{tenant}/members'
*/
membersForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: members.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

members.form = membersForm

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
export const chatDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

chatDashboard.definition = {
    methods: ["get","head"],
    url: '/filament/admin/chat-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.url = (options?: RouteQueryOptions) => {
    return chatDashboard.definition.url + queryParams(options)
}

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chatDashboard.url(options),
    method: 'head',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
const chatDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chatDashboard.form = chatDashboardForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    sendWhatsapp: Object.assign(sendWhatsapp, sendWhatsapp),
    members: Object.assign(members, members),
    chatDashboard: Object.assign(chatDashboard, chatDashboard),
}

export default pages