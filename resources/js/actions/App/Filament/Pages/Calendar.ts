import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
const Calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Calendar.url(options),
    method: 'get',
})

Calendar.definition = {
    methods: ["get","head"],
    url: '/admin/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
Calendar.url = (options?: RouteQueryOptions) => {
    return Calendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
Calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
Calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Calendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
const CalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
CalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
CalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Calendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Calendar.form = CalendarForm

export default Calendar