import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
const ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url(options),
    method: 'get',
})

ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url = (options?: RouteQueryOptions) => {
    return ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
const ListFileSystemItemsca4f73f5b08a8632d02a51174b23708eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsca4f73f5b08a8632d02a51174b23708eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/files/file-system-items'
*/
ListFileSystemItemsca4f73f5b08a8632d02a51174b23708eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e.form = ListFileSystemItemsca4f73f5b08a8632d02a51174b23708eForm
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
const ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url(options),
    method: 'get',
})

ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.definition = {
    methods: ["get","head"],
    url: '/nds/super/file-system-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url = (options?: RouteQueryOptions) => {
    return ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
const ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\ListFileSystemItems::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/ListFileSystemItems.php:7
* @route '/nds/super/file-system-items'
*/
ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3.form = ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3Form

const ListFileSystemItems = {
    '/nds/files/file-system-items': ListFileSystemItemsca4f73f5b08a8632d02a51174b23708e,
    '/nds/super/file-system-items': ListFileSystemItemsf52d18706430afae305ebdf9ad43f7f3,
}

export default ListFileSystemItems