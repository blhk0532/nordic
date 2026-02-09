import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
const PaymentSchedule = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentSchedule.url(options),
    method: 'get',
})

PaymentSchedule.definition = {
    methods: ["get","head"],
    url: '/nds/finance/payment-schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
PaymentSchedule.url = (options?: RouteQueryOptions) => {
    return PaymentSchedule.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
PaymentSchedule.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
PaymentSchedule.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentSchedule.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
const PaymentScheduleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
PaymentScheduleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSchedule.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Finance\Pages\PaymentSchedule::__invoke
* @see app/Filament/Finance/Pages/PaymentSchedule.php:7
* @route '/nds/finance/payment-schedule'
*/
PaymentScheduleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSchedule.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentSchedule.form = PaymentScheduleForm

export default PaymentSchedule