import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
const SendWhatsapp66310a4621e0330f9a7ad3649a445e0d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url(options),
    method: 'get',
})

SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.definition = {
    methods: ["get","head"],
    url: '/admin/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url = (options?: RouteQueryOptions) => {
    return SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
const SendWhatsapp66310a4621e0330f9a7ad3649a445e0dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
SendWhatsapp66310a4621e0330f9a7ad3649a445e0dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/send-whatsapp'
*/
SendWhatsapp66310a4621e0330f9a7ad3649a445e0dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SendWhatsapp66310a4621e0330f9a7ad3649a445e0d.form = SendWhatsapp66310a4621e0330f9a7ad3649a445e0dForm
/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
const SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url(options),
    method: 'get',
})

SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.definition = {
    methods: ["get","head"],
    url: '/nds/adm/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url = (options?: RouteQueryOptions) => {
    return SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
const SendWhatsapp27c371f84f31584adafa9bfab5cf3d0eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp27c371f84f31584adafa9bfab5cf3d0eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp27c371f84f31584adafa9bfab5cf3d0eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e.form = SendWhatsapp27c371f84f31584adafa9bfab5cf3d0eForm

const SendWhatsapp = {
    '/admin/send-whatsapp': SendWhatsapp66310a4621e0330f9a7ad3649a445e0d,
    '/nds/adm/send-whatsapp': SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e,
}

export default SendWhatsapp