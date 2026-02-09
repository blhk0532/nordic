import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
const LocaleDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LocaleDashboard.url(options),
    method: 'get',
})

LocaleDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/locale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
LocaleDashboard.url = (options?: RouteQueryOptions) => {
    return LocaleDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
LocaleDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LocaleDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
LocaleDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LocaleDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
const LocaleDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LocaleDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
LocaleDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LocaleDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
LocaleDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LocaleDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LocaleDashboard.form = LocaleDashboardForm

export default LocaleDashboard