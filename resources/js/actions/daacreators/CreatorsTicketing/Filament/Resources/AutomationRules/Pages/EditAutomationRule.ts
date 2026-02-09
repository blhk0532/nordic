import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
const EditAutomationRule = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAutomationRule.url(args, options),
    method: 'get',
})

EditAutomationRule.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
EditAutomationRule.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditAutomationRule.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
EditAutomationRule.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditAutomationRule.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
EditAutomationRule.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditAutomationRule.url(args, options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
const EditAutomationRuleForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAutomationRule.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
EditAutomationRuleForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAutomationRule.url(args, options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\EditAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/EditAutomationRule.php:7
* @route '/nds/manager/automation-rules/{record}/edit'
*/
EditAutomationRuleForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditAutomationRule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditAutomationRule.form = EditAutomationRuleForm

export default EditAutomationRule