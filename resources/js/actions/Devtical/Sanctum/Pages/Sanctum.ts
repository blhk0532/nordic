import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
const Sanctum2128f37f20a590b1ff0195c75ef6250f = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, options),
    method: 'get',
})

Sanctum2128f37f20a590b1ff0195c75ef6250f.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
Sanctum2128f37f20a590b1ff0195c75ef6250f.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return Sanctum2128f37f20a590b1ff0195c75ef6250f.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
Sanctum2128f37f20a590b1ff0195c75ef6250f.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
Sanctum2128f37f20a590b1ff0195c75ef6250f.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
const Sanctum2128f37f20a590b1ff0195c75ef6250fForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
Sanctum2128f37f20a590b1ff0195c75ef6250fForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/admin/tenant/{tenant}/sanctum'
*/
Sanctum2128f37f20a590b1ff0195c75ef6250fForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum2128f37f20a590b1ff0195c75ef6250f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctum2128f37f20a590b1ff0195c75ef6250f.form = Sanctum2128f37f20a590b1ff0195c75ef6250fForm
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
const Sanctum1806168d47e6de20391b196fb28191f9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum1806168d47e6de20391b196fb28191f9.url(options),
    method: 'get',
})

Sanctum1806168d47e6de20391b196fb28191f9.definition = {
    methods: ["get","head"],
    url: '/nds/adm/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum1806168d47e6de20391b196fb28191f9.url = (options?: RouteQueryOptions) => {
    return Sanctum1806168d47e6de20391b196fb28191f9.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum1806168d47e6de20391b196fb28191f9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum1806168d47e6de20391b196fb28191f9.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum1806168d47e6de20391b196fb28191f9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctum1806168d47e6de20391b196fb28191f9.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
const Sanctum1806168d47e6de20391b196fb28191f9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum1806168d47e6de20391b196fb28191f9.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum1806168d47e6de20391b196fb28191f9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum1806168d47e6de20391b196fb28191f9.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
Sanctum1806168d47e6de20391b196fb28191f9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum1806168d47e6de20391b196fb28191f9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctum1806168d47e6de20391b196fb28191f9.form = Sanctum1806168d47e6de20391b196fb28191f9Form
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
const Sanctume64f8eb57b38b4d674264fb743bee1bb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctume64f8eb57b38b4d674264fb743bee1bb.url(options),
    method: 'get',
})

Sanctume64f8eb57b38b4d674264fb743bee1bb.definition = {
    methods: ["get","head"],
    url: '/nds/chat/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
Sanctume64f8eb57b38b4d674264fb743bee1bb.url = (options?: RouteQueryOptions) => {
    return Sanctume64f8eb57b38b4d674264fb743bee1bb.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
Sanctume64f8eb57b38b4d674264fb743bee1bb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctume64f8eb57b38b4d674264fb743bee1bb.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
Sanctume64f8eb57b38b4d674264fb743bee1bb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctume64f8eb57b38b4d674264fb743bee1bb.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
const Sanctume64f8eb57b38b4d674264fb743bee1bbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctume64f8eb57b38b4d674264fb743bee1bb.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
Sanctume64f8eb57b38b4d674264fb743bee1bbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctume64f8eb57b38b4d674264fb743bee1bb.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/chat/sanctum'
*/
Sanctume64f8eb57b38b4d674264fb743bee1bbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctume64f8eb57b38b4d674264fb743bee1bb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctume64f8eb57b38b4d674264fb743bee1bb.form = Sanctume64f8eb57b38b4d674264fb743bee1bbForm
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
const Sanctum91c5726998c839de35750eea81c6063c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum91c5726998c839de35750eea81c6063c.url(options),
    method: 'get',
})

Sanctum91c5726998c839de35750eea81c6063c.definition = {
    methods: ["get","head"],
    url: '/nds/super/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
Sanctum91c5726998c839de35750eea81c6063c.url = (options?: RouteQueryOptions) => {
    return Sanctum91c5726998c839de35750eea81c6063c.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
Sanctum91c5726998c839de35750eea81c6063c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctum91c5726998c839de35750eea81c6063c.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
Sanctum91c5726998c839de35750eea81c6063c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctum91c5726998c839de35750eea81c6063c.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
const Sanctum91c5726998c839de35750eea81c6063cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum91c5726998c839de35750eea81c6063c.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
Sanctum91c5726998c839de35750eea81c6063cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum91c5726998c839de35750eea81c6063c.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
Sanctum91c5726998c839de35750eea81c6063cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctum91c5726998c839de35750eea81c6063c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctum91c5726998c839de35750eea81c6063c.form = Sanctum91c5726998c839de35750eea81c6063cForm
/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
const Sanctumd329e1ada52ea18773c534265725f03e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctumd329e1ada52ea18773c534265725f03e.url(options),
    method: 'get',
})

Sanctumd329e1ada52ea18773c534265725f03e.definition = {
    methods: ["get","head"],
    url: '/nds/booking/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
Sanctumd329e1ada52ea18773c534265725f03e.url = (options?: RouteQueryOptions) => {
    return Sanctumd329e1ada52ea18773c534265725f03e.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
Sanctumd329e1ada52ea18773c534265725f03e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Sanctumd329e1ada52ea18773c534265725f03e.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
Sanctumd329e1ada52ea18773c534265725f03e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Sanctumd329e1ada52ea18773c534265725f03e.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
const Sanctumd329e1ada52ea18773c534265725f03eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctumd329e1ada52ea18773c534265725f03e.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
Sanctumd329e1ada52ea18773c534265725f03eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctumd329e1ada52ea18773c534265725f03e.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
Sanctumd329e1ada52ea18773c534265725f03eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Sanctumd329e1ada52ea18773c534265725f03e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Sanctumd329e1ada52ea18773c534265725f03e.form = Sanctumd329e1ada52ea18773c534265725f03eForm

const Sanctum = {
    '/admin/tenant/{tenant}/sanctum': Sanctum2128f37f20a590b1ff0195c75ef6250f,
    '/nds/adm/sanctum': Sanctum1806168d47e6de20391b196fb28191f9,
    '/nds/chat/sanctum': Sanctume64f8eb57b38b4d674264fb743bee1bb,
    '/nds/super/sanctum': Sanctum91c5726998c839de35750eea81c6063c,
    '/nds/booking/sanctum': Sanctumd329e1ada52ea18773c534265725f03e,
}

export default Sanctum