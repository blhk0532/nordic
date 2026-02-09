import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
const CalendarSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'get',
})

CalendarSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/super/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage.url = (options?: RouteQueryOptions) => {
    return CalendarSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
const CalendarSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
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