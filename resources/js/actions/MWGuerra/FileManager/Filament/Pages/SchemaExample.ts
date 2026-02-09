import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const SchemaExamplefa45a599768109d4eff46d6f6b158a79 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url(options),
    method: 'get',
})

SchemaExamplefa45a599768109d4eff46d6f6b158a79.definition = {
    methods: ["get","head"],
    url: '/nds/files/schema-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExamplefa45a599768109d4eff46d6f6b158a79.url = (options?: RouteQueryOptions) => {
    return SchemaExamplefa45a599768109d4eff46d6f6b158a79.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExamplefa45a599768109d4eff46d6f6b158a79.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExamplefa45a599768109d4eff46d6f6b158a79.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const SchemaExamplefa45a599768109d4eff46d6f6b158a79Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExamplefa45a599768109d4eff46d6f6b158a79Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExamplefa45a599768109d4eff46d6f6b158a79Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplefa45a599768109d4eff46d6f6b158a79.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SchemaExamplefa45a599768109d4eff46d6f6b158a79.form = SchemaExamplefa45a599768109d4eff46d6f6b158a79Form
/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
const SchemaExamplef0e299e753a4c0d5f9989a088a378685 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url(options),
    method: 'get',
})

SchemaExamplef0e299e753a4c0d5f9989a088a378685.definition = {
    methods: ["get","head"],
    url: '/nds/super/schema-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
SchemaExamplef0e299e753a4c0d5f9989a088a378685.url = (options?: RouteQueryOptions) => {
    return SchemaExamplef0e299e753a4c0d5f9989a088a378685.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
SchemaExamplef0e299e753a4c0d5f9989a088a378685.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
SchemaExamplef0e299e753a4c0d5f9989a088a378685.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
const SchemaExamplef0e299e753a4c0d5f9989a088a378685Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
SchemaExamplef0e299e753a4c0d5f9989a088a378685Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/super/schema-example'
*/
SchemaExamplef0e299e753a4c0d5f9989a088a378685Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExamplef0e299e753a4c0d5f9989a088a378685.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SchemaExamplef0e299e753a4c0d5f9989a088a378685.form = SchemaExamplef0e299e753a4c0d5f9989a088a378685Form

const SchemaExample = {
    '/nds/files/schema-example': SchemaExamplefa45a599768109d4eff46d6f6b158a79,
    '/nds/super/schema-example': SchemaExamplef0e299e753a4c0d5f9989a088a378685,
}

export default SchemaExample