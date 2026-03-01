import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
const ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, options),
    method: 'get',
})

ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
const ChatsPagea6095bd0232f9f3cb977aa3c93abfbbbForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
ChatsPagea6095bd0232f9f3cb977aa3c93abfbbbForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/admin/tenant/{tenant}/chats'
*/
ChatsPagea6095bd0232f9f3cb977aa3c93abfbbbForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb.form = ChatsPagea6095bd0232f9f3cb977aa3c93abfbbbForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
const ChatsPage98523f837743d7c9ea380affdbe41ce8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPage98523f837743d7c9ea380affdbe41ce8.url(options),
    method: 'get',
})

ChatsPage98523f837743d7c9ea380affdbe41ce8.definition = {
    methods: ["get","head"],
    url: '/nds/notify/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
ChatsPage98523f837743d7c9ea380affdbe41ce8.url = (options?: RouteQueryOptions) => {
    return ChatsPage98523f837743d7c9ea380affdbe41ce8.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
ChatsPage98523f837743d7c9ea380affdbe41ce8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPage98523f837743d7c9ea380affdbe41ce8.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
ChatsPage98523f837743d7c9ea380affdbe41ce8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatsPage98523f837743d7c9ea380affdbe41ce8.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
const ChatsPage98523f837743d7c9ea380affdbe41ce8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage98523f837743d7c9ea380affdbe41ce8.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
ChatsPage98523f837743d7c9ea380affdbe41ce8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage98523f837743d7c9ea380affdbe41ce8.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/notify/chats'
*/
ChatsPage98523f837743d7c9ea380affdbe41ce8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage98523f837743d7c9ea380affdbe41ce8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatsPage98523f837743d7c9ea380affdbe41ce8.form = ChatsPage98523f837743d7c9ea380affdbe41ce8Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
const ChatsPage4add964372ca5bb4beca1bce22fc0af0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url(options),
    method: 'get',
})

ChatsPage4add964372ca5bb4beca1bce22fc0af0.definition = {
    methods: ["get","head"],
    url: '/nds/super/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
ChatsPage4add964372ca5bb4beca1bce22fc0af0.url = (options?: RouteQueryOptions) => {
    return ChatsPage4add964372ca5bb4beca1bce22fc0af0.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
ChatsPage4add964372ca5bb4beca1bce22fc0af0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
ChatsPage4add964372ca5bb4beca1bce22fc0af0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
const ChatsPage4add964372ca5bb4beca1bce22fc0af0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
ChatsPage4add964372ca5bb4beca1bce22fc0af0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
ChatsPage4add964372ca5bb4beca1bce22fc0af0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatsPage4add964372ca5bb4beca1bce22fc0af0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatsPage4add964372ca5bb4beca1bce22fc0af0.form = ChatsPage4add964372ca5bb4beca1bce22fc0af0Form

const ChatsPage = {
    '/admin/tenant/{tenant}/chats': ChatsPagea6095bd0232f9f3cb977aa3c93abfbbb,
    '/nds/notify/chats': ChatsPage98523f837743d7c9ea380affdbe41ce8,
    '/nds/super/chats': ChatsPage4add964372ca5bb4beca1bce22fc0af0,
}

export default ChatsPage