import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
const SystemDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SystemDashboard.url(options),
    method: 'get',
})

SystemDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
SystemDashboard.url = (options?: RouteQueryOptions) => {
    return SystemDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
SystemDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SystemDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
SystemDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SystemDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
const SystemDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SystemDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
SystemDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SystemDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\System\Pages\SystemDashboard::__invoke
* @see app/Filament/System/Pages/SystemDashboard.php:7
* @route '/nds/system'
*/
SystemDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SystemDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SystemDashboard.form = SystemDashboardForm

export default SystemDashboard