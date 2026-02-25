import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
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
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
export const terminal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terminal.url(options),
    method: 'get',
})

terminal.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
terminal.url = (options?: RouteQueryOptions) => {
    return terminal.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
terminal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
terminal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: terminal.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
const terminalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
terminalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
terminalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: terminal.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

terminal.form = terminalForm

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
export const logs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

logs.definition = {
    methods: ["get","head"],
    url: '/nds/queue/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
logs.url = (options?: RouteQueryOptions) => {
    return logs.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
logs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
logs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logs.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
const logsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
logsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/queue/logs'
*/
logsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logs.form = logsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    terminal: Object.assign(terminal, terminal),
    logs: Object.assign(logs, logs),
}

export default pages