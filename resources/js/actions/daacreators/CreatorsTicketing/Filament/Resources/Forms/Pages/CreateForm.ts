import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
const CreateForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateForm.url(options),
    method: 'get',
})

CreateForm.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
CreateForm.url = (options?: RouteQueryOptions) => {
    return CreateForm.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
CreateForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateForm.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
CreateForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateForm.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
const CreateFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateForm.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
CreateFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateForm.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
CreateFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateForm.form = CreateFormForm

export default CreateForm