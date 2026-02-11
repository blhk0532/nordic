import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, options),
    method: 'get',
})

EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.definition = {
    methods: ["get","head"],
    url: '/admin/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/admin/outcome-settings/{record}/edit'
*/
EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b.form = EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679bForm
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, options),
    method: 'get',
})

EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
const EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/EditOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/{record}/edit'
*/
EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b.form = EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05bForm
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
    '/admin/outcome-settings/{record}/edit': EditOutcomeSettingbdedf3c0d025cc36d1efbfcc889d679b,
    '/nds/adm/outcome-settings/{record}/edit': EditOutcomeSettingf7f9a32cdb92ee736388507f9176e05b,
    '/nds/super/outcome-settings/{record}/edit': EditOutcomeSetting71183bdef82d450c12650cbe23a7199d,
}

export default EditOutcomeSetting