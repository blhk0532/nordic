import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
const PluginsDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginsDashboard.url(options),
    method: 'get',
})

PluginsDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/plugins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
PluginsDashboard.url = (options?: RouteQueryOptions) => {
    return PluginsDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
PluginsDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PluginsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
PluginsDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PluginsDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
const PluginsDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
PluginsDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Plugins\Pages\PluginsDashboard::__invoke
* @see app/Filament/Plugins/Pages/PluginsDashboard.php:7
* @route '/nds/plugins'
*/
PluginsDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PluginsDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PluginsDashboard.form = PluginsDashboardForm

export default PluginsDashboard