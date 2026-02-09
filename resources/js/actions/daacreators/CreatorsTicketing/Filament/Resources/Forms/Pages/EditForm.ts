import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
const EditForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditForm.url(args, options),
    method: 'get',
})

EditForm.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
EditForm.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditForm.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
EditForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditForm.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
EditForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditForm.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
const EditFormForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditForm.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
EditFormForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditForm.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
EditFormForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditForm.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditForm.form = EditFormForm

export default EditForm