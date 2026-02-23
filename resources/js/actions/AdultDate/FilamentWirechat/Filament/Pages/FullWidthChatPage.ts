import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
const FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, options),
    method: 'get',
})

FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/full-width-chat/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            conversation: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        conversation: args.conversation,
    }

    return FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.get = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.head = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
const FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423dForm = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423dForm.get = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/admin/tenant/{tenant}/full-width-chat/{conversation}'
*/
FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423dForm.head = (args: { tenant: string | number | { slug: string | number }, conversation: string | number } | [tenant: string | number | { slug: string | number }, conversation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d.form = FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423dForm
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
const FullWidthChatPage302022a363091dcd94b4d0237f5b81e7 = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, options),
    method: 'get',
})

FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.definition = {
    methods: ["get","head"],
    url: '/nds/notify/full-width-chat/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversation: args }
    }

    if (Array.isArray(args)) {
        args = {
            conversation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        conversation: args.conversation,
    }

    return FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
const FullWidthChatPage302022a363091dcd94b4d0237f5b81e7Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
FullWidthChatPage302022a363091dcd94b4d0237f5b81e7Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/notify/full-width-chat/{conversation}'
*/
FullWidthChatPage302022a363091dcd94b4d0237f5b81e7Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FullWidthChatPage302022a363091dcd94b4d0237f5b81e7.form = FullWidthChatPage302022a363091dcd94b4d0237f5b81e7Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
const FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0 = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, options),
    method: 'get',
})

FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.definition = {
    methods: ["get","head"],
    url: '/nds/super/full-width-chat/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversation: args }
    }

    if (Array.isArray(args)) {
        args = {
            conversation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        conversation: args.conversation,
    }

    return FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
const FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\FullWidthChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/FullWidthChatPage.php:7
* @route '/nds/super/full-width-chat/{conversation}'
*/
FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0.form = FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0Form

const FullWidthChatPage = {
    '/admin/tenant/{tenant}/full-width-chat/{conversation}': FullWidthChatPagef8ab29d8867cb1d1015d53331bf6423d,
    '/nds/notify/full-width-chat/{conversation}': FullWidthChatPage302022a363091dcd94b4d0237f5b81e7,
    '/nds/super/full-width-chat/{conversation}': FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0,
}

export default FullWidthChatPage