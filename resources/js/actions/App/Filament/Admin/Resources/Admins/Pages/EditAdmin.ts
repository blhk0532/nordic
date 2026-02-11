import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
const EditAdmin26af92970ff5ea4aea21543860b9634d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, options),
    method: 'get',
})

EditAdmin26af92970ff5ea4aea21543860b9634d.definition = {
    methods: ["get","head"],
    url: '/admin/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
EditAdmin26af92970ff5ea4aea21543860b9634d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAdmin26af92970ff5ea4aea21543860b9634d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
EditAdmin26af92970ff5ea4aea21543860b9634d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
EditAdmin26af92970ff5ea4aea21543860b9634d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
const EditAdmin26af92970ff5ea4aea21543860b9634dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
EditAdmin26af92970ff5ea4aea21543860b9634dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/admin/admins/{record}/edit'
*/
EditAdmin26af92970ff5ea4aea21543860b9634dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin26af92970ff5ea4aea21543860b9634d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdmin26af92970ff5ea4aea21543860b9634d.form = EditAdmin26af92970ff5ea4aea21543860b9634dForm
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
const EditAdmin0b4783faba21792c99a193d3e711d163 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, options),
    method: 'get',
})

EditAdmin0b4783faba21792c99a193d3e711d163.definition = {
    methods: ["get","head"],
    url: '/nds/adm/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
EditAdmin0b4783faba21792c99a193d3e711d163.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAdmin0b4783faba21792c99a193d3e711d163.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
EditAdmin0b4783faba21792c99a193d3e711d163.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
EditAdmin0b4783faba21792c99a193d3e711d163.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
const EditAdmin0b4783faba21792c99a193d3e711d163Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
EditAdmin0b4783faba21792c99a193d3e711d163Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/adm/admins/{record}/edit'
*/
EditAdmin0b4783faba21792c99a193d3e711d163Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmin0b4783faba21792c99a193d3e711d163.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdmin0b4783faba21792c99a193d3e711d163.form = EditAdmin0b4783faba21792c99a193d3e711d163Form
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
const EditAdminbc44f1a7ea2e4ab0b107f34b05743064 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

EditAdminbc44f1a7ea2e4ab0b107f34b05743064.definition = {
    methods: ["get","head"],
    url: '/nds/super/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAdminbc44f1a7ea2e4ab0b107f34b05743064.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
const EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/super/admins/{record}/edit'
*/
EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdminbc44f1a7ea2e4ab0b107f34b05743064.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdminbc44f1a7ea2e4ab0b107f34b05743064.form = EditAdminbc44f1a7ea2e4ab0b107f34b05743064Form

const EditAdmin = {
    '/admin/admins/{record}/edit': EditAdmin26af92970ff5ea4aea21543860b9634d,
    '/nds/adm/admins/{record}/edit': EditAdmin0b4783faba21792c99a193d3e711d163,
    '/nds/super/admins/{record}/edit': EditAdminbc44f1a7ea2e4ab0b107f34b05743064,
}

export default EditAdmin