import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/partner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
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