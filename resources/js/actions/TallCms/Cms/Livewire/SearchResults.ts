import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
const SearchResults = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchResults.url(options),
    method: 'get',
})

SearchResults.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
SearchResults.url = (options?: RouteQueryOptions) => {
    return SearchResults.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
SearchResults.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchResults.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
SearchResults.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SearchResults.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
const SearchResultsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchResults.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
SearchResultsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchResults.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/search'
*/
SearchResultsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchResults.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SearchResults.form = SearchResultsForm

export default SearchResults