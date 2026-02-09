import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
const TranslationManagerPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TranslationManagerPage.url(options),
    method: 'get',
})

TranslationManagerPage.definition = {
    methods: ["get","head"],
    url: '/nds/locale/translation-manager-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
TranslationManagerPage.url = (options?: RouteQueryOptions) => {
    return TranslationManagerPage.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
TranslationManagerPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TranslationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
TranslationManagerPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TranslationManagerPage.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
const TranslationManagerPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TranslationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
TranslationManagerPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TranslationManagerPage.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentTranslationManager\Pages\TranslationManagerPage::__invoke
* @see vendor/statikbe/laravel-filament-chained-translation-manager/src/Pages/TranslationManagerPage.php:7
* @route '/nds/locale/translation-manager-page'
*/
TranslationManagerPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TranslationManagerPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TranslationManagerPage.form = TranslationManagerPageForm

export default TranslationManagerPage