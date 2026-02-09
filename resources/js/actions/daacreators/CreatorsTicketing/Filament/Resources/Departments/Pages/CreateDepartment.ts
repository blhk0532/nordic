import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
const CreateDepartment = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDepartment.url(options),
    method: 'get',
})

CreateDepartment.definition = {
    methods: ["get","head"],
    url: '/nds/manager/departments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
CreateDepartment.url = (options?: RouteQueryOptions) => {
    return CreateDepartment.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
CreateDepartment.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDepartment.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
CreateDepartment.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDepartment.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
const CreateDepartmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDepartment.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
CreateDepartmentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDepartment.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\CreateDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/CreateDepartment.php:7
* @route '/nds/manager/departments/create'
*/
CreateDepartmentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDepartment.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDepartment.form = CreateDepartmentForm

export default CreateDepartment