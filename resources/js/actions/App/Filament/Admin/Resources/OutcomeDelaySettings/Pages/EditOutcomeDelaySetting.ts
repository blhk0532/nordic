import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, options),
    method: 'get',
})

EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/adm/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9.form = EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9Form
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
const EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\EditOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/EditOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/{record}/edit'
*/
EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2.form = EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2Form

const EditOutcomeDelaySetting = {
    '/nds/adm/outcome-delay-settings/{record}/edit': EditOutcomeDelaySettinge6c60576d0f7ae0d3fc5edd6a6fc22e9,
    '/nds/super/outcome-delay-settings/{record}/edit': EditOutcomeDelaySetting431b448ad49c5a87d3d57ae4cc3e14b2,
}

export default EditOutcomeDelaySetting