import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
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
* @route '/admin/send-whatsapp'
*/
export const sendWhatsapp = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(options),
    method: 'get',
})

sendWhatsapp.definition = {
    methods: ["get","head"],
    url: '/admin/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
sendWhatsapp.url = (options?: RouteQueryOptions) => {
    return sendWhatsapp.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
sendWhatsapp.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
sendWhatsapp.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sendWhatsapp.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
const sendWhatsappForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
sendWhatsappForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
sendWhatsappForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sendWhatsapp.form = sendWhatsappForm

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
    chatDashboard: Object.assign(chatDashboard, chatDashboard),
}

export default pages