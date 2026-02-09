import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
    '/nds/notify/full-width-chat/{conversation}': FullWidthChatPage302022a363091dcd94b4d0237f5b81e7,
    '/nds/super/full-width-chat/{conversation}': FullWidthChatPage289e47a3e009ffb0d2ba9035545975d0,
}

export default FullWidthChatPage