import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
const ServerDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerDashboard.url(options),
    method: 'get',
})

ServerDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/server',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
ServerDashboard.url = (options?: RouteQueryOptions) => {
    return ServerDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
ServerDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
ServerDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ServerDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
const ServerDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
ServerDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Server\Pages\ServerDashboard::__invoke
* @see app/Filament/Server/Pages/ServerDashboard.php:7
* @route '/nds/server'
*/
ServerDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ServerDashboard.form = ServerDashboardForm

export default ServerDashboard