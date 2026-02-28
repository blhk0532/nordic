import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
export const view = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/notes/{note}/{uuid}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
view.url = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
view.get = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
view.head = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
const viewForm = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
viewForm.get = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \TomatoPHP\FilamentNotes\Http\Controllers\NotesController::view
* @see plugins/tomatophp/filament-notes/src/Http/Controllers/NotesController.php:10
* @route '/notes/{note}/{uuid}'
*/
viewForm.head = (args: { note: number | { id: number }, uuid: string | number } | [note: number | { id: number }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const notes = {
    view: Object.assign(view, view),
}

export default notes