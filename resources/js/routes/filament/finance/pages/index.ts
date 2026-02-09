import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/finance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\FinanceDashboard::__invoke
* @see app/Filament/Finance/Pages/FinanceDashboard.php:7
* @route '/nds/finance'
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

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
export const paymentSchedule = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentSchedule.url(options),
    method: 'get',
})

paymentSchedule.definition = {
    methods: ["get","head"],
    url: '/nds/finance/payment-schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
paymentSchedule.url = (options?: RouteQueryOptions) => {
    return paymentSchedule.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
paymentSchedule.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
paymentSchedule.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: paymentSchedule.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
const paymentScheduleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
paymentScheduleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
paymentScheduleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSchedule.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

paymentSchedule.form = paymentScheduleForm

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/nds/finance/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Profile::__invoke
* @see app/Filament/Finance/Pages/Profile.php:7
* @route '/nds/finance/profile'
*/
profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profile.form = profileForm

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
export const reports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

reports.definition = {
    methods: ["get","head"],
    url: '/nds/finance/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
reports.url = (options?: RouteQueryOptions) => {
    return reports.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
reports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
reports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reports.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
const reportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
reportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\Reports::__invoke
* @see app/Filament/Finance/Pages/Reports.php:7
* @route '/nds/finance/reports'
*/
reportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reports.form = reportsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    paymentSchedule: Object.assign(paymentSchedule, paymentSchedule),
    profile: Object.assign(profile, profile),
    reports: Object.assign(reports, reports),
}

export default pages