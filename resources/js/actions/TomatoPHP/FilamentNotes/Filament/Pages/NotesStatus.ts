import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
const NotesStatus = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotesStatus.url(args, options),
    method: 'get',
})

NotesStatus.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/notes-status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
NotesStatus.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return NotesStatus.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
NotesStatus.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotesStatus.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
NotesStatus.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotesStatus.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
const NotesStatusForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesStatus.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
NotesStatusForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesStatus.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesStatus::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesStatus.php:7
* @route '/nds/app/team/{tenant}/notes-status'
*/
NotesStatusForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotesStatus.form = NotesStatusForm

export default NotesStatus