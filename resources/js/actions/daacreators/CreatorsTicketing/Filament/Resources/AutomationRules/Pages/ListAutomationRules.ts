import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
const ListAutomationRules = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAutomationRules.url(options),
    method: 'get',
})

ListAutomationRules.definition = {
    methods: ["get","head"],
    url: '/nds/manager/automation-rules',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
ListAutomationRules.url = (options?: RouteQueryOptions) => {
    return ListAutomationRules.definition.url + queryParams(options)
}

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
ListAutomationRules.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAutomationRules.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
ListAutomationRules.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAutomationRules.url(options),
    method: 'head',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
const ListAutomationRulesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAutomationRules.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
ListAutomationRulesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAutomationRules.url(options),
    method: 'get',
})

/**
* @see \daacreators\CreatorsTicketing\Filament\Resources\AutomationRules\Pages\ListAutomationRules::__invoke
* @see plugins/daacreators/creators-ticketing/src/Filament/Resources/AutomationRules/Pages/ListAutomationRules.php:7
* @route '/nds/manager/automation-rules'
*/
ListAutomationRulesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListAutomationRules.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListAutomationRules.form = ListAutomationRulesForm

export default ListAutomationRules