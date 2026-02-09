import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const FileSystem3a24dc17319b4f0f6f9a7023be495e6c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url(options),
    method: 'get',
})

FileSystem3a24dc17319b4f0f6f9a7023be495e6c.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url = (options?: RouteQueryOptions) => {
    return FileSystem3a24dc17319b4f0f6f9a7023be495e6c.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem3a24dc17319b4f0f6f9a7023be495e6c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem3a24dc17319b4f0f6f9a7023be495e6c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
const FileSystem3a24dc17319b4f0f6f9a7023be495e6cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem3a24dc17319b4f0f6f9a7023be495e6cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/files/file-system'
*/
FileSystem3a24dc17319b4f0f6f9a7023be495e6cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystem3a24dc17319b4f0f6f9a7023be495e6c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileSystem3a24dc17319b4f0f6f9a7023be495e6c.form = FileSystem3a24dc17319b4f0f6f9a7023be495e6cForm
/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
const FileSystemc803442799684ede8e781901dd1ab77b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystemc803442799684ede8e781901dd1ab77b.url(options),
    method: 'get',
})

FileSystemc803442799684ede8e781901dd1ab77b.definition = {
    methods: ["get","head"],
    url: '/nds/super/file-system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
FileSystemc803442799684ede8e781901dd1ab77b.url = (options?: RouteQueryOptions) => {
    return FileSystemc803442799684ede8e781901dd1ab77b.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
FileSystemc803442799684ede8e781901dd1ab77b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileSystemc803442799684ede8e781901dd1ab77b.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
FileSystemc803442799684ede8e781901dd1ab77b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileSystemc803442799684ede8e781901dd1ab77b.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
const FileSystemc803442799684ede8e781901dd1ab77bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystemc803442799684ede8e781901dd1ab77b.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
FileSystemc803442799684ede8e781901dd1ab77bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystemc803442799684ede8e781901dd1ab77b.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\FileSystem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/FileSystem.php:7
* @route '/nds/super/file-system'
*/
FileSystemc803442799684ede8e781901dd1ab77bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileSystemc803442799684ede8e781901dd1ab77b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileSystemc803442799684ede8e781901dd1ab77b.form = FileSystemc803442799684ede8e781901dd1ab77bForm

const FileSystem = {
    '/nds/files/file-system': FileSystem3a24dc17319b4f0f6f9a7023be495e6c,
    '/nds/super/file-system': FileSystemc803442799684ede8e781901dd1ab77b,
}

export default FileSystem