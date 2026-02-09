import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Files\Pages\FilesDashboard::__invoke
* @see app/Filament/Files/Pages/FilesDashboard.php:7
* @route '/nds/files'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
export const fileManager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManager.url(options),
    method: 'get',
})

fileManager.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
fileManager.url = (options?: RouteQueryOptions) => {
    return fileManager.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
fileManager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileManager.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
fileManager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fileManager.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
const fileManagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
fileManagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
fileManagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileManager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fileManager.form = fileManagerForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
export const fileSystem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileSystem.url(options),
    method: 'get',
})

fileSystem.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.url = (options?: RouteQueryOptions) => {
    return fileSystem.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fileSystem.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const fileSystemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
fileSystemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fileSystem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fileSystem.form = fileSystemForm

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
export const schemaExample = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schemaExample.url(options),
    method: 'get',
})

schemaExample.definition = {
    methods: ["get","head"],
    url: '/nds/files/schema-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.url = (options?: RouteQueryOptions) => {
    return schemaExample.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExample.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schemaExample.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const schemaExampleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExampleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
schemaExampleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schemaExample.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schemaExample.form = schemaExampleForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    fileManager: Object.assign(fileManager, fileManager),
    fileSystem: Object.assign(fileSystem, fileSystem),
    schemaExample: Object.assign(schemaExample, schemaExample),
}

export default pages