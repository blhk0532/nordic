import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
const ListDepartments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDepartments.url(options),
    method: 'get',
})

ListDepartments.definition = {
    methods: ["get","head"],
    url: '/nds/manager/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
ListDepartments.url = (options?: RouteQueryOptions) => {
    return ListDepartments.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
ListDepartments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDepartments.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
ListDepartments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDepartments.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
const ListDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDepartments.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
ListDepartmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDepartments.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\ListDepartments::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/ListDepartments.php:7
* @route '/nds/manager/departments'
*/
ListDepartmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDepartments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDepartments.form = ListDepartmentsForm

export default ListDepartments