import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
const ListTerminalLogsa5808cccd286d054c81d672b0f192ae6 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, options),
    method: 'get',
})

ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
const ListTerminalLogsa5808cccd286d054c81d672b0f192ae6Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
ListTerminalLogsa5808cccd286d054c81d672b0f192ae6Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/admin/tenant/{tenant}/terminal-logs'
*/
ListTerminalLogsa5808cccd286d054c81d672b0f192ae6Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogsa5808cccd286d054c81d672b0f192ae6.form = ListTerminalLogsa5808cccd286d054c81d672b0f192ae6Form
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.definition = {
    methods: ["get","head"],
    url: '/nds/super/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url = (options?: RouteQueryOptions) => {
    return ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2.form = ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2Form

const ListTerminalLogs = {
    '/admin/tenant/{tenant}/terminal-logs': ListTerminalLogsa5808cccd286d054c81d672b0f192ae6,
    '/nds/super/terminal-logs': ListTerminalLogs3656eea49b7e0974688636ec1cab5fe2,
}

export default ListTerminalLogs