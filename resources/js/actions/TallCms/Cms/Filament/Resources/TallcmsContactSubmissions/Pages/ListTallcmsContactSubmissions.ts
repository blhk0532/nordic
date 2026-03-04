import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
const ListTallcmsContactSubmissions = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsContactSubmissions.url(args, options),
    method: 'get',
})

ListTallcmsContactSubmissions.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/tallcms-contact-submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListTallcmsContactSubmissions.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsContactSubmissions.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTallcmsContactSubmissions.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
const ListTallcmsContactSubmissionsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissionsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/admin/tenant/{tenant}/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissionsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTallcmsContactSubmissions.form = ListTallcmsContactSubmissionsForm

export default ListTallcmsContactSubmissions