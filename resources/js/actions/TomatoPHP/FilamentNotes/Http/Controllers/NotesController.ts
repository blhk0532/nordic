import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
export const index = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/notes/{note}/{uuid}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
index.url = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            note: args[0],
            uuid: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        note: typeof args.note === 'object'
        ? args.note.id
        : args.note,
        uuid: args.uuid,
    }

    return index.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
index.get = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
index.head = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
const indexForm = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
indexForm.get = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::index
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
indexForm.head = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const NotesController = { index }

export default NotesController