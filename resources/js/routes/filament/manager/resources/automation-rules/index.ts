import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const automationRules = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default automationRules