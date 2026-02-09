import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, options),
    method: 'get',
})

EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.definition = {
    methods: ["get","head"],
    url: '/nds/admin/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingd550271b9da7d647ec09d3553cf0871aForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingd550271b9da7d647ec09d3553cf0871aForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingd550271b9da7d647ec09d3553cf0871aForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a.form = EditOutcomeSettingd550271b9da7d647ec09d3553cf0871aForm
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting71183bdef82d450c12650cbe23a7199d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
const EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/{record}/edit'
*/
EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSetting71183bdef82d450c12650cbe23a7199d.form = EditOutcomeSetting71183bdef82d450c12650cbe23a7199dForm

const EditOutcomeSetting = {
    '/nds/admin/outcome-settings/{record}/edit': EditOutcomeSettingd550271b9da7d647ec09d3553cf0871a,
    '/nds/super/outcome-settings/{record}/edit': EditOutcomeSetting71183bdef82d450c12650cbe23a7199d,
}

export default EditOutcomeSetting