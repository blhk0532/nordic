import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/locale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Locale\Pages\LocaleDashboard::__invoke
* @see app/Filament/Locale/Pages/LocaleDashboard.php:7
* @route '/nds/locale'
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
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
export const translationManagerPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: translationManagerPage.url(options),
    method: 'get',
})

translationManagerPage.definition = {
    methods: ["get","head"],
    url: '/nds/locale/translation-manager-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
translationManagerPage.url = (options?: RouteQueryOptions) => {
    return translationManagerPage.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
translationManagerPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: translationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
translationManagerPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: translationManagerPage.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
const translationManagerPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: translationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
translationManagerPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: translationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
translationManagerPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: translationManagerPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

translationManagerPage.form = translationManagerPageForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    translationManagerPage: Object.assign(translationManagerPage, translationManagerPage),
}

export default pages