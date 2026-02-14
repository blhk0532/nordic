import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
const SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, options),
    method: 'get',
})

SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
const SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5dForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5dForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/admin/tenant/{tenant}/send-whatsapp'
*/
SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5dForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d.form = SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5dForm
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
    '/admin/tenant/{tenant}/send-whatsapp': SendWhatsapp76e0b2a3d9bb811560763a68cfdb1d5d,
    '/nds/adm/send-whatsapp': SendWhatsapp27c371f84f31584adafa9bfab5cf3d0e,
}

export default SendWhatsapp