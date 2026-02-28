import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.form = CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form
/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, options),
    method: 'get',
})

CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/App/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/app/team/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289.form = CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289Form

const CreateOutcomeDelaySetting = {
    '/admin/tenant/{tenant}/outcome-delay-settings/create': CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99,
    '/nds/app/team/{tenant}/outcome-delay-settings/create': CreateOutcomeDelaySettingdf0c47b2963a15dd6b877392bbe81289,
}

export default CreateOutcomeDelaySetting