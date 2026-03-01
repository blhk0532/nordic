import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
const ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, options),
    method: 'get',
})

ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/terminal-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
const ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0fForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0fForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/admin/tenant/{tenant}/terminal-logs/{record}'
*/
ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0fForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f.form = ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0fForm
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
const ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.definition = {
    methods: ["get","head"],
    url: '/nds/super/terminal-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
const ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ViewTerminalLog::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ViewTerminalLog.php:7
* @route '/nds/super/terminal-logs/{record}'
*/
ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c.form = ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6cForm

const ViewTerminalLog = {
    '/admin/tenant/{tenant}/terminal-logs/{record}': ViewTerminalLog9dc89ba82a8d0c240fd56ed5a1389b0f,
    '/nds/super/terminal-logs/{record}': ViewTerminalLogdfc16677eaa33547d4e5fbee43655d6c,
}

export default ViewTerminalLog