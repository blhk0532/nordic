import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
const PartnerDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PartnerDashboard.url(options),
    method: 'get',
})

PartnerDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/partner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
PartnerDashboard.url = (options?: RouteQueryOptions) => {
    return PartnerDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
PartnerDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PartnerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
PartnerDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PartnerDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
const PartnerDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PartnerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
PartnerDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PartnerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Partner\Pages\PartnerDashboard::__invoke
* @see app/Filament/Partner/Pages/PartnerDashboard.php:7
* @route '/nds/partner'
*/
PartnerDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PartnerDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PartnerDashboard.form = PartnerDashboardForm

export default PartnerDashboard