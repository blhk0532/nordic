import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
const CreateTallcmsMedia = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMedia.url(args, options),
    method: 'get',
})

CreateTallcmsMedia.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/tallcms-media/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
CreateTallcmsMedia.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateTallcmsMedia.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
CreateTallcmsMedia.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
CreateTallcmsMedia.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTallcmsMedia.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
const CreateTallcmsMediaForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
CreateTallcmsMediaForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\CreateTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/CreateTallcmsMedia.php:7
* @route '/admin/tenant/{tenant}/tallcms-media/create'
*/
CreateTallcmsMediaForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTallcmsMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTallcmsMedia.form = CreateTallcmsMediaForm

export default CreateTallcmsMedia