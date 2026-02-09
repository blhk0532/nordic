import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting.url(args, options),
    method: 'get',
})

EditOutcomeDelaySetting.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySetting.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySetting.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySettingForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettingForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySetting.form = EditOutcomeDelaySettingForm

export default EditOutcomeDelaySetting