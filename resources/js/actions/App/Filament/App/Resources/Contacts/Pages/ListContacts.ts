import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
const ListContacts7fb9462c87fdf12a452e846e4278494a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, options),
    method: 'get',
})

ListContacts7fb9462c87fdf12a452e846e4278494a.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
ListContacts7fb9462c87fdf12a452e846e4278494a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListContacts7fb9462c87fdf12a452e846e4278494a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
ListContacts7fb9462c87fdf12a452e846e4278494a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
ListContacts7fb9462c87fdf12a452e846e4278494a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
const ListContacts7fb9462c87fdf12a452e846e4278494aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
ListContacts7fb9462c87fdf12a452e846e4278494aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/admin/tenant/{tenant}/contacts'
*/
ListContacts7fb9462c87fdf12a452e846e4278494aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts7fb9462c87fdf12a452e846e4278494a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListContacts7fb9462c87fdf12a452e846e4278494a.form = ListContacts7fb9462c87fdf12a452e846e4278494aForm
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
const ListContactsb6b209d745d8b85e0be2aeae8524c31c = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, options),
    method: 'get',
})

ListContactsb6b209d745d8b85e0be2aeae8524c31c.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsb6b209d745d8b85e0be2aeae8524c31c.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListContactsb6b209d745d8b85e0be2aeae8524c31c.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsb6b209d745d8b85e0be2aeae8524c31c.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsb6b209d745d8b85e0be2aeae8524c31c.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
const ListContactsb6b209d745d8b85e0be2aeae8524c31cForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsb6b209d745d8b85e0be2aeae8524c31cForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsb6b209d745d8b85e0be2aeae8524c31cForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContactsb6b209d745d8b85e0be2aeae8524c31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListContactsb6b209d745d8b85e0be2aeae8524c31c.form = ListContactsb6b209d745d8b85e0be2aeae8524c31cForm

const ListContacts = {
    '/admin/tenant/{tenant}/contacts': ListContacts7fb9462c87fdf12a452e846e4278494a,
    '/nds/app/team/{tenant}/contacts': ListContactsb6b209d745d8b85e0be2aeae8524c31c,
}

export default ListContacts