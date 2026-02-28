import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
const CreateRingaData6325933c63483d00ed9c431bd61b20d9 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, options),
    method: 'get',
})

CreateRingaData6325933c63483d00ed9c431bd61b20d9.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/nummer/lista/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
CreateRingaData6325933c63483d00ed9c431bd61b20d9.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaData6325933c63483d00ed9c431bd61b20d9.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
CreateRingaData6325933c63483d00ed9c431bd61b20d9.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
CreateRingaData6325933c63483d00ed9c431bd61b20d9.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
const CreateRingaData6325933c63483d00ed9c431bd61b20d9Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
CreateRingaData6325933c63483d00ed9c431bd61b20d9Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/admin/tenant/{tenant}/nummer/lista/create'
*/
CreateRingaData6325933c63483d00ed9c431bd61b20d9Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData6325933c63483d00ed9c431bd61b20d9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaData6325933c63483d00ed9c431bd61b20d9.form = CreateRingaData6325933c63483d00ed9c431bd61b20d9Form
/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
const CreateRingaDataf16e80f767b4c5145fea3df487c991b2 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, options),
    method: 'get',
})

CreateRingaDataf16e80f767b4c5145fea3df487c991b2.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/nummer/lista/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaDataf16e80f767b4c5145fea3df487c991b2.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
CreateRingaDataf16e80f767b4c5145fea3df487c991b2.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
CreateRingaDataf16e80f767b4c5145fea3df487c991b2.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
const CreateRingaDataf16e80f767b4c5145fea3df487c991b2Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
CreateRingaDataf16e80f767b4c5145fea3df487c991b2Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista/create'
*/
CreateRingaDataf16e80f767b4c5145fea3df487c991b2Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaDataf16e80f767b4c5145fea3df487c991b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaDataf16e80f767b4c5145fea3df487c991b2.form = CreateRingaDataf16e80f767b4c5145fea3df487c991b2Form

const CreateRingaData = {
    '/admin/tenant/{tenant}/nummer/lista/create': CreateRingaData6325933c63483d00ed9c431bd61b20d9,
    '/nds/app/team/{tenant}/nummer/lista/create': CreateRingaDataf16e80f767b4c5145fea3df487c991b2,
}

export default CreateRingaData