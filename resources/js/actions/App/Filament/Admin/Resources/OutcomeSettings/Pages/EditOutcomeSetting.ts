import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting.url(args, options),
    method: 'get',
})

EditOutcomeSetting.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSetting.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSetting.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSetting.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSetting.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSetting.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSetting.form = EditOutcomeSettingForm

export default EditOutcomeSetting