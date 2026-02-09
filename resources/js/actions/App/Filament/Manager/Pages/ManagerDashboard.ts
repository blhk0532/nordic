import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
const ManagerDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManagerDashboard.url(options),
    method: 'get',
})

ManagerDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
ManagerDashboard.url = (options?: RouteQueryOptions) => {
    return ManagerDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
ManagerDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManagerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
ManagerDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManagerDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
const ManagerDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
ManagerDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Manager\Pages\ManagerDashboard::__invoke
* @see app/Filament/Manager/Pages/ManagerDashboard.php:7
* @route '/nds/manager'
*/
ManagerDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManagerDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManagerDashboard.form = ManagerDashboardForm

export default ManagerDashboard