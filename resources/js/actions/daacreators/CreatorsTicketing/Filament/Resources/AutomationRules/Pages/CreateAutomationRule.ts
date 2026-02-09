import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
const CreateAutomationRule = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAutomationRule.url(options),
    method: 'get',
})

CreateAutomationRule.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
CreateAutomationRule.url = (options?: RouteQueryOptions) => {
    return CreateAutomationRule.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
CreateAutomationRule.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateAutomationRule.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
CreateAutomationRule.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateAutomationRule.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
const CreateAutomationRuleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAutomationRule.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
CreateAutomationRuleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAutomationRule.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\CreateAutomationRule::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/CreateAutomationRule.php:7
* @route '/nds/manager/automation-rules/create'
*/
CreateAutomationRuleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateAutomationRule.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateAutomationRule.form = CreateAutomationRuleForm

export default CreateAutomationRule