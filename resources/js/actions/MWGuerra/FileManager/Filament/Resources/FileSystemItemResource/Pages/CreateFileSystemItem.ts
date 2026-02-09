import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
const CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url(options),
    method: 'get',
})

CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url = (options?: RouteQueryOptions) => {
    return CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
const CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/files/file-system-items/create'
*/
CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a.form = CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681aForm
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
const CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url(options),
    method: 'get',
})

CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.definition = {
    methods: ["get","head"],
    url: '/nds/super/file-system-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url = (options?: RouteQueryOptions) => {
    return CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
const CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\CreateFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/CreateFileSystemItem.php:7
* @route '/nds/super/file-system-items/create'
*/
CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f.form = CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55fForm

const CreateFileSystemItem = {
    '/nds/files/file-system-items/create': CreateFileSystemItem48b907d654edc5ddc4faa6baa3c9681a,
    '/nds/super/file-system-items/create': CreateFileSystemItem03cc4946dd197cb6f4cc09cc0966a55f,
}

export default CreateFileSystemItem