import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
const DialerDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DialerDashboard.url(options),
    method: 'get',
})

DialerDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/dialer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
DialerDashboard.url = (options?: RouteQueryOptions) => {
    return DialerDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
DialerDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DialerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
DialerDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DialerDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
const DialerDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DialerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
DialerDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DialerDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Dialer\Pages\DialerDashboard::__invoke
* @see app/Filament/Dialer/Pages/DialerDashboard.php:7
* @route '/nds/dialer'
*/
DialerDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DialerDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DialerDashboard.form = DialerDashboardForm

export default DialerDashboard