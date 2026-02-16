import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
const CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, options),
    method: 'get',
})

CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
const CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/tenant/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75.form = CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.definition = {
    methods: ["get","head"],
    url: '/nds/adm/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
const CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/adm/outcome-settings/create'
*/
CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3.form = CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.form = CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form

const CreateOutcomeSetting = {
    '/admin/tenant/{tenant}/outcome-settings/create': CreateOutcomeSettingd0a96997dfa6278ac765e10523621b75,
    '/nds/adm/outcome-settings/create': CreateOutcomeSettingc73f679b3b962b658bb25266c5694dc3,
    '/nds/super/outcome-settings/create': CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18,
}

export default CreateOutcomeSetting