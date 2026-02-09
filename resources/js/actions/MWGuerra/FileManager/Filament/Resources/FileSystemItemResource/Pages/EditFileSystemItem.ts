import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
const EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, options),
    method: 'get',
})

EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.definition = {
    methods: ["get","head"],
    url: '/nds/files/file-system-items/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
const EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/files/file-system-items/{record}/edit'
*/
EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671.form = EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671Form
/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
const EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, options),
    method: 'get',
})

EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.definition = {
    methods: ["get","head"],
    url: '/nds/super/file-system-items/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
const EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages\EditFileSystemItem::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Resources/FileSystemItemResource/Pages/EditFileSystemItem.php:7
* @route '/nds/super/file-system-items/{record}/edit'
*/
EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b.form = EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316bForm

const EditFileSystemItem = {
    '/nds/files/file-system-items/{record}/edit': EditFileSystemItem7e1eb3e7be02450ded7ad816669d9671,
    '/nds/super/file-system-items/{record}/edit': EditFileSystemItemaed2a6ac2d88f622eec3c38a1d6f316b,
}

export default EditFileSystemItem