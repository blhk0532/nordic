import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
const SendWhatsapp = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp.url(options),
    method: 'get',
})

SendWhatsapp.definition = {
    methods: ["get","head"],
    url: '/nds/adm/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp.url = (options?: RouteQueryOptions) => {
    return SendWhatsapp.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsapp.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SendWhatsapp.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
const SendWhatsappForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsappForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
SendWhatsappForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SendWhatsapp.form = SendWhatsappForm

export default SendWhatsapp