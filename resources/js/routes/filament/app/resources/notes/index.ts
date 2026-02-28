import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/notes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Filament\Resources\NoteResource\Pages\ManageNotes::__invoke
* @see plugins/tomatophp/filament-notes/src/Filament/Resources/NoteResource/Pages/ManageNotes.php:7
* @route '/nds/app/team/{tenant}/notes'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const notes = {
    index: Object.assign(index, index),
}

export default notes