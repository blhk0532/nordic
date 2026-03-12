import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs.url(options),
    method: 'get',
})

ListTerminalLogs.definition = {
    methods: ["get","head"],
    url: '/nds/super/terminal-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs.url = (options?: RouteQueryOptions) => {
    return ListTerminalLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTerminalLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
const ListTerminalLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\TerminalLogResource\Pages\ListTerminalLogs::__invoke
* @see app/Filament/Admin/Resources/TerminalLogResource/Pages/ListTerminalLogs.php:7
* @route '/nds/super/terminal-logs'
*/
ListTerminalLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTerminalLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTerminalLogs.form = ListTerminalLogsForm

export default ListTerminalLogs