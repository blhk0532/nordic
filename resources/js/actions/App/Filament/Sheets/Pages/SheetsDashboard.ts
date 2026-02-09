import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
const SheetsDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SheetsDashboard.url(options),
    method: 'get',
})

SheetsDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/sheets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
SheetsDashboard.url = (options?: RouteQueryOptions) => {
    return SheetsDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
SheetsDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SheetsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
SheetsDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SheetsDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
const SheetsDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SheetsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
SheetsDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SheetsDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Sheets\Pages\SheetsDashboard::__invoke
* @see app/Filament/Sheets/Pages/SheetsDashboard.php:7
* @route '/nds/sheets'
*/
SheetsDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SheetsDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SheetsDashboard.form = SheetsDashboardForm

export default SheetsDashboard