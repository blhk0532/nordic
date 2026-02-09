import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
const ChatPage20cade8567144101cee5c752dbfda959 = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatPage20cade8567144101cee5c752dbfda959.url(args, options),
    method: 'get',
})

ChatPage20cade8567144101cee5c752dbfda959.definition = {
    methods: ["get","head"],
    url: '/nds/notify/chats/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
ChatPage20cade8567144101cee5c752dbfda959.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ChatPage20cade8567144101cee5c752dbfda959.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
ChatPage20cade8567144101cee5c752dbfda959.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatPage20cade8567144101cee5c752dbfda959.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
ChatPage20cade8567144101cee5c752dbfda959.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatPage20cade8567144101cee5c752dbfda959.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
const ChatPage20cade8567144101cee5c752dbfda959Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPage20cade8567144101cee5c752dbfda959.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
ChatPage20cade8567144101cee5c752dbfda959Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPage20cade8567144101cee5c752dbfda959.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/notify/chats/{conversation}'
*/
ChatPage20cade8567144101cee5c752dbfda959Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPage20cade8567144101cee5c752dbfda959.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatPage20cade8567144101cee5c752dbfda959.form = ChatPage20cade8567144101cee5c752dbfda959Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
const ChatPagedd30f01de0d9d1dfc342ac7a35f5e004 = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, options),
    method: 'get',
})

ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.definition = {
    methods: ["get","head"],
    url: '/nds/super/chats/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
const ChatPagedd30f01de0d9d1dfc342ac7a35f5e004Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
ChatPagedd30f01de0d9d1dfc342ac7a35f5e004Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatPage.php:7
* @route '/nds/super/chats/{conversation}'
*/
ChatPagedd30f01de0d9d1dfc342ac7a35f5e004Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatPagedd30f01de0d9d1dfc342ac7a35f5e004.form = ChatPagedd30f01de0d9d1dfc342ac7a35f5e004Form

const ChatPage = {
    '/nds/notify/chats/{conversation}': ChatPage20cade8567144101cee5c752dbfda959,
    '/nds/super/chats/{conversation}': ChatPagedd30f01de0d9d1dfc342ac7a35f5e004,
}

export default ChatPage