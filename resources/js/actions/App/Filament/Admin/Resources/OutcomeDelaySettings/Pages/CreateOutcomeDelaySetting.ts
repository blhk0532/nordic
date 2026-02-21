import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
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
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
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
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/tenant/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
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
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.form = CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form

const CreateOutcomeDelaySetting = {
    '/admin/tenant/{tenant}/outcome-delay-settings/create': CreateOutcomeDelaySettingd36900dfb386a4980ac6c767d2c83b99,
    '/nds/super/outcome-delay-settings/create': CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966,
}

export default CreateOutcomeDelaySetting