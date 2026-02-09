import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
const FileManagerc20e835f8e8c0221ba902e149e89103d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerc20e835f8e8c0221ba902e149e89103d.url(options),
    method: 'get',
})

FileManagerc20e835f8e8c0221ba902e149e89103d.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
FileManagerc20e835f8e8c0221ba902e149e89103d.url = (options?: RouteQueryOptions) => {
    return FileManagerc20e835f8e8c0221ba902e149e89103d.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
FileManagerc20e835f8e8c0221ba902e149e89103d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerc20e835f8e8c0221ba902e149e89103d.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
FileManagerc20e835f8e8c0221ba902e149e89103d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileManagerc20e835f8e8c0221ba902e149e89103d.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
const FileManagerc20e835f8e8c0221ba902e149e89103dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerc20e835f8e8c0221ba902e149e89103d.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
FileManagerc20e835f8e8c0221ba902e149e89103dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerc20e835f8e8c0221ba902e149e89103d.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/files/file-manager'
*/
FileManagerc20e835f8e8c0221ba902e149e89103dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerc20e835f8e8c0221ba902e149e89103d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileManagerc20e835f8e8c0221ba902e149e89103d.form = FileManagerc20e835f8e8c0221ba902e149e89103dForm
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
const FileManager96d46bc2394ed7dc77f759a1eff160e1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManager96d46bc2394ed7dc77f759a1eff160e1.url(options),
    method: 'get',
})

FileManager96d46bc2394ed7dc77f759a1eff160e1.definition = {
    methods: ["get","head"],
    url: '/nds/super/file-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
FileManager96d46bc2394ed7dc77f759a1eff160e1.url = (options?: RouteQueryOptions) => {
    return FileManager96d46bc2394ed7dc77f759a1eff160e1.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
FileManager96d46bc2394ed7dc77f759a1eff160e1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManager96d46bc2394ed7dc77f759a1eff160e1.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
FileManager96d46bc2394ed7dc77f759a1eff160e1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileManager96d46bc2394ed7dc77f759a1eff160e1.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
const FileManager96d46bc2394ed7dc77f759a1eff160e1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManager96d46bc2394ed7dc77f759a1eff160e1.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
FileManager96d46bc2394ed7dc77f759a1eff160e1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManager96d46bc2394ed7dc77f759a1eff160e1.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileManager::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileManager.php:7
* @route '/nds/super/file-manager'
*/
FileManager96d46bc2394ed7dc77f759a1eff160e1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManager96d46bc2394ed7dc77f759a1eff160e1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileManager96d46bc2394ed7dc77f759a1eff160e1.form = FileManager96d46bc2394ed7dc77f759a1eff160e1Form

const FileManager = {
    '/nds/files/file-manager': FileManagerc20e835f8e8c0221ba902e149e89103d,
    '/nds/super/file-manager': FileManager96d46bc2394ed7dc77f759a1eff160e1,
}

export default FileManager