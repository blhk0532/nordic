import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
const NotesGroups = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotesGroups.url(args, options),
    method: 'get',
})

NotesGroups.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/notes-groups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
NotesGroups.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return NotesGroups.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
NotesGroups.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotesGroups.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
NotesGroups.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotesGroups.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
const NotesGroupsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesGroups.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
NotesGroupsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesGroups.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Pages\NotesGroups::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Pages/NotesGroups.php:7
* @route '/nds/app/team/{tenant}/notes-groups'
*/
NotesGroupsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotesGroups.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotesGroups.form = NotesGroupsForm

export default NotesGroups