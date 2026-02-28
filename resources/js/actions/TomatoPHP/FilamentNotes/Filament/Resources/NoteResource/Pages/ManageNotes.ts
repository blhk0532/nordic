import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
const ManageNotes = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageNotes.url(args, options),
    method: 'get',
})

ManageNotes.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/notes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
ManageNotes.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ManageNotes.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
ManageNotes.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ManageNotes.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
ManageNotes.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ManageNotes.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
const ManageNotesForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageNotes.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
ManageNotesForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageNotes.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
ManageNotesForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ManageNotes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ManageNotes.form = ManageNotesForm

export default ManageNotes