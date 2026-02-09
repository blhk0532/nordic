import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
const ContentDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContentDashboard.url(options),
    method: 'get',
})

ContentDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
ContentDashboard.url = (options?: RouteQueryOptions) => {
    return ContentDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
ContentDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContentDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
ContentDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ContentDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
const ContentDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContentDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
ContentDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContentDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Content\Pages\ContentDashboard::__invoke
* @see app/Filament/Content/Pages/ContentDashboard.php:7
* @route '/nds/content'
*/
ContentDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ContentDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ContentDashboard.form = ContentDashboardForm

export default ContentDashboard