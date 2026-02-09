import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
const CalendarSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'get',
})

CalendarSettingsPage.definition = {
    methods: ["get","head"],
    url: '/admin/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
CalendarSettingsPage.url = (options?: RouteQueryOptions) => {
    return CalendarSettingsPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
CalendarSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
CalendarSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
const CalendarSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
CalendarSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
CalendarSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CalendarSettingsPage.form = CalendarSettingsPageForm

export default CalendarSettingsPage