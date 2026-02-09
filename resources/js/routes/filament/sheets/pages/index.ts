import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/sheets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
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

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
}

export default pages