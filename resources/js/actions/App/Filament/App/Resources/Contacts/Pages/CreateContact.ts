import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
const CreateContact5cf5277fd4775b3932a9a5f581f3576c = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, options),
    method: 'get',
})

CreateContact5cf5277fd4775b3932a9a5f581f3576c.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/contacts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
CreateContact5cf5277fd4775b3932a9a5f581f3576c.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateContact5cf5277fd4775b3932a9a5f581f3576c.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
CreateContact5cf5277fd4775b3932a9a5f581f3576c.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
CreateContact5cf5277fd4775b3932a9a5f581f3576c.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
const CreateContact5cf5277fd4775b3932a9a5f581f3576cForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
CreateContact5cf5277fd4775b3932a9a5f581f3576cForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/admin/tenant/{tenant}/contacts/create'
*/
CreateContact5cf5277fd4775b3932a9a5f581f3576cForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact5cf5277fd4775b3932a9a5f581f3576c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateContact5cf5277fd4775b3932a9a5f581f3576c.form = CreateContact5cf5277fd4775b3932a9a5f581f3576cForm
/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
const CreateContactb9f0756484a0be48c6cdcc5210542d2a = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, options),
    method: 'get',
})

CreateContactb9f0756484a0be48c6cdcc5210542d2a.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactb9f0756484a0be48c6cdcc5210542d2a.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateContactb9f0756484a0be48c6cdcc5210542d2a.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactb9f0756484a0be48c6cdcc5210542d2a.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactb9f0756484a0be48c6cdcc5210542d2a.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
const CreateContactb9f0756484a0be48c6cdcc5210542d2aForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactb9f0756484a0be48c6cdcc5210542d2aForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactb9f0756484a0be48c6cdcc5210542d2aForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContactb9f0756484a0be48c6cdcc5210542d2a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateContactb9f0756484a0be48c6cdcc5210542d2a.form = CreateContactb9f0756484a0be48c6cdcc5210542d2aForm

const CreateContact = {
    '/admin/tenant/{tenant}/contacts/create': CreateContact5cf5277fd4775b3932a9a5f581f3576c,
    '/nds/app/team/{tenant}/contacts/create': CreateContactb9f0756484a0be48c6cdcc5210542d2a,
}

export default CreateContact