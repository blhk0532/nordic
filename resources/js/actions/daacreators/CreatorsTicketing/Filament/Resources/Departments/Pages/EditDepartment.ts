import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
const EditDepartment = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDepartment.url(args, options),
    method: 'get',
})

EditDepartment.definition = {
    methods: ["get","head"],
    url: '/nds/manager/departments/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
EditDepartment.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditDepartment.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
EditDepartment.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDepartment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
EditDepartment.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDepartment.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
const EditDepartmentForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDepartment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
EditDepartmentForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDepartment.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Departments\Pages\EditDepartment::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Departments/Pages/EditDepartment.php:7
* @route '/nds/manager/departments/{record}/edit'
*/
EditDepartmentForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDepartment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDepartment.form = EditDepartmentForm

export default EditDepartment