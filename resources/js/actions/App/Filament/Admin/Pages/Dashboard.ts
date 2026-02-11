import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
const Dashboard35f58437d9250c39f332f5e8e70440b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

Dashboard35f58437d9250c39f332f5e8e70440b7.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
Dashboard35f58437d9250c39f332f5e8e70440b7.url = (options?: RouteQueryOptions) => {
    return Dashboard35f58437d9250c39f332f5e8e70440b7.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
Dashboard35f58437d9250c39f332f5e8e70440b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
Dashboard35f58437d9250c39f332f5e8e70440b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
const Dashboard35f58437d9250c39f332f5e8e70440b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
Dashboard35f58437d9250c39f332f5e8e70440b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/admin'
*/
Dashboard35f58437d9250c39f332f5e8e70440b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboard35f58437d9250c39f332f5e8e70440b7.form = Dashboard35f58437d9250c39f332f5e8e70440b7Form
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
const Dashboard0aadf6e031dee37bd5bbb3fe17382efe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

Dashboard0aadf6e031dee37bd5bbb3fe17382efe.definition = {
    methods: ["get","head"],
    url: '/nds/adm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url = (options?: RouteQueryOptions) => {
    return Dashboard0aadf6e031dee37bd5bbb3fe17382efe.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
Dashboard0aadf6e031dee37bd5bbb3fe17382efe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
Dashboard0aadf6e031dee37bd5bbb3fe17382efe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
const Dashboard0aadf6e031dee37bd5bbb3fe17382efeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
Dashboard0aadf6e031dee37bd5bbb3fe17382efeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
Dashboard0aadf6e031dee37bd5bbb3fe17382efeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Dashboard0aadf6e031dee37bd5bbb3fe17382efe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Dashboard0aadf6e031dee37bd5bbb3fe17382efe.form = Dashboard0aadf6e031dee37bd5bbb3fe17382efeForm

const Dashboard = {
    '/admin': Dashboard35f58437d9250c39f332f5e8e70440b7,
    '/nds/adm': Dashboard0aadf6e031dee37bd5bbb3fe17382efe,
}

export default Dashboard