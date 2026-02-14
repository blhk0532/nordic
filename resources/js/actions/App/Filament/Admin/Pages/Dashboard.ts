import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
const Dashboardd6575f4ce605686fc287d1070165f2f0 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, options),
    method: 'get',
})

Dashboardd6575f4ce605686fc287d1070165f2f0.definition = {
    methods: ["get","head"],
    url: '/admin/tenant/{tenant}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
Dashboardd6575f4ce605686fc287d1070165f2f0.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return Dashboardd6575f4ce605686fc287d1070165f2f0.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
Dashboardd6575f4ce605686fc287d1070165f2f0.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
Dashboardd6575f4ce605686fc287d1070165f2f0.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
const Dashboardd6575f4ce605686fc287d1070165f2f0Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
Dashboardd6575f4ce605686fc287d1070165f2f0Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin/tenant/{tenant}/dashboard'
*/
Dashboardd6575f4ce605686fc287d1070165f2f0Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboardd6575f4ce605686fc287d1070165f2f0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboardd6575f4ce605686fc287d1070165f2f0.form = Dashboardd6575f4ce605686fc287d1070165f2f0Form
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
const Dashboard0fb53622ed04c15da365e2e459ab03a7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard0fb53622ed04c15da365e2e459ab03a7.url(options),
    method: 'get',
})

Dashboard0fb53622ed04c15da365e2e459ab03a7.definition = {
    methods: ["get","head"],
    url: '/nds/adm/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
Dashboard0fb53622ed04c15da365e2e459ab03a7.url = (options?: RouteQueryOptions) => {
    return Dashboard0fb53622ed04c15da365e2e459ab03a7.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
Dashboard0fb53622ed04c15da365e2e459ab03a7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard0fb53622ed04c15da365e2e459ab03a7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
Dashboard0fb53622ed04c15da365e2e459ab03a7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard0fb53622ed04c15da365e2e459ab03a7.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
const Dashboard0fb53622ed04c15da365e2e459ab03a7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0fb53622ed04c15da365e2e459ab03a7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
Dashboard0fb53622ed04c15da365e2e459ab03a7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0fb53622ed04c15da365e2e459ab03a7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm/dashboard'
*/
Dashboard0fb53622ed04c15da365e2e459ab03a7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0fb53622ed04c15da365e2e459ab03a7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboard0fb53622ed04c15da365e2e459ab03a7.form = Dashboard0fb53622ed04c15da365e2e459ab03a7Form

const Dashboard = {
    '/admin/tenant/{tenant}/dashboard': Dashboardd6575f4ce605686fc287d1070165f2f0,
    '/nds/adm/dashboard': Dashboard0fb53622ed04c15da365e2e459ab03a7,
}

export default Dashboard