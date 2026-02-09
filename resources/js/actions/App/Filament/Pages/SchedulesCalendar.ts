import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
const SchedulesCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchedulesCalendar.url(options),
    method: 'get',
})

SchedulesCalendar.definition = {
    methods: ["get","head"],
    url: '/admin/schedules-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
SchedulesCalendar.url = (options?: RouteQueryOptions) => {
    return SchedulesCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
SchedulesCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
SchedulesCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SchedulesCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
const SchedulesCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
SchedulesCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
SchedulesCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchedulesCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SchedulesCalendar.form = SchedulesCalendarForm

export default SchedulesCalendar