import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\ListForms::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/ListForms.php:7
* @route '/nds/manager/forms'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\CreateForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/CreateForm.php:7
* @route '/nds/manager/forms/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/manager/forms/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\Forms\Pages\EditForm::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/Forms/Pages/EditForm.php:7
* @route '/nds/manager/forms/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const forms = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default forms