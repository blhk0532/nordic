import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
const ListForms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListForms.url(options),
    method: 'get',
})

ListForms.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
ListForms.url = (options?: RouteQueryOptions) => {
    return ListForms.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
ListForms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListForms.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
ListForms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListForms.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
const ListFormsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListForms.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
ListFormsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListForms.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
ListFormsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListForms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListForms.form = ListFormsForm

export default ListForms