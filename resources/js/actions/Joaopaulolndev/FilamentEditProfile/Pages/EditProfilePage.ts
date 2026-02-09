import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
const EditProfilePage31d707720a4387e9ae060220f41aaf2b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url(options),
    method: 'get',
})

EditProfilePage31d707720a4387e9ae060220f41aaf2b.definition = {
    methods: ["get","head"],
    url: '/nds/adm/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
EditProfilePage31d707720a4387e9ae060220f41aaf2b.url = (options?: RouteQueryOptions) => {
    return EditProfilePage31d707720a4387e9ae060220f41aaf2b.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
EditProfilePage31d707720a4387e9ae060220f41aaf2b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
EditProfilePage31d707720a4387e9ae060220f41aaf2b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
const EditProfilePage31d707720a4387e9ae060220f41aaf2bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
EditProfilePage31d707720a4387e9ae060220f41aaf2bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
EditProfilePage31d707720a4387e9ae060220f41aaf2bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage31d707720a4387e9ae060220f41aaf2b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditProfilePage31d707720a4387e9ae060220f41aaf2b.form = EditProfilePage31d707720a4387e9ae060220f41aaf2bForm
/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
const EditProfilePage643d3a0198086a525b91c42ce911c3aa = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, options),
    method: 'get',
})

EditProfilePage643d3a0198086a525b91c42ce911c3aa.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
EditProfilePage643d3a0198086a525b91c42ce911c3aa.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return EditProfilePage643d3a0198086a525b91c42ce911c3aa.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
EditProfilePage643d3a0198086a525b91c42ce911c3aa.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
EditProfilePage643d3a0198086a525b91c42ce911c3aa.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
const EditProfilePage643d3a0198086a525b91c42ce911c3aaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
EditProfilePage643d3a0198086a525b91c42ce911c3aaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/app/team/{tenant}/my-profile'
*/
EditProfilePage643d3a0198086a525b91c42ce911c3aaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage643d3a0198086a525b91c42ce911c3aa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditProfilePage643d3a0198086a525b91c42ce911c3aa.form = EditProfilePage643d3a0198086a525b91c42ce911c3aaForm
/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
const EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url(options),
    method: 'get',
})

EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.definition = {
    methods: ["get","head"],
    url: '/nds/super/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url = (options?: RouteQueryOptions) => {
    return EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
const EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e.form = EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358eForm

const EditProfilePage = {
    '/nds/adm/my-profile': EditProfilePage31d707720a4387e9ae060220f41aaf2b,
    '/nds/app/team/{tenant}/my-profile': EditProfilePage643d3a0198086a525b91c42ce911c3aa,
    '/nds/super/my-profile': EditProfilePage7e70e4ea88cd8ddbed4e7cbf5244358e,
}

export default EditProfilePage