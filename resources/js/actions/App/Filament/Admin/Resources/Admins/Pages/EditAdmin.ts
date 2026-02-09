import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
const EditAdmine6b5f2a57172869c5d1fc300fc9457f5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, options),
    method: 'get',
})

EditAdmine6b5f2a57172869c5d1fc300fc9457f5.definition = {
    methods: ["get","head"],
    url: '/nds/admin/admins/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAdmine6b5f2a57172869c5d1fc300fc9457f5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
EditAdmine6b5f2a57172869c5d1fc300fc9457f5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
EditAdmine6b5f2a57172869c5d1fc300fc9457f5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
const EditAdmine6b5f2a57172869c5d1fc300fc9457f5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
EditAdmine6b5f2a57172869c5d1fc300fc9457f5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\Admins\Pages\EditAdmin::__invoke
* @see app/Filament/Admin/Resources/Admins/Pages/EditAdmin.php:7
* @route '/nds/admin/admins/{record}/edit'
*/
EditAdmine6b5f2a57172869c5d1fc300fc9457f5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAdmine6b5f2a57172869c5d1fc300fc9457f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAdmine6b5f2a57172869c5d1fc300fc9457f5.form = EditAdmine6b5f2a57172869c5d1fc300fc9457f5Form
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
    '/nds/admin/admins/{record}/edit': EditAdmine6b5f2a57172869c5d1fc300fc9457f5,
    '/nds/super/admins/{record}/edit': EditAdminbc44f1a7ea2e4ab0b107f34b05743064,
}

export default EditAdmin