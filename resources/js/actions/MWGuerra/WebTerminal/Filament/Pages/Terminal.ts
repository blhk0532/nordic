import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
const Terminal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminal.url(options),
    method: 'get',
})

Terminal.definition = {
    methods: ["get","head"],
    url: '/nds/queue/terminal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.url = (options?: RouteQueryOptions) => {
    return Terminal.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
Terminal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Terminal.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
const TerminalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
TerminalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\WebTerminal\Filament\Pages\Terminal::__invoke
* @see vendor/mwguerra/web-terminal/src/Filament/Pages/Terminal.php:7
* @route '/nds/queue/terminal'
*/
TerminalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Terminal.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Terminal.form = TerminalForm

export default Terminal