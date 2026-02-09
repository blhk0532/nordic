import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
const TaskBoard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TaskBoard.url(options),
    method: 'get',
})

TaskBoard.definition = {
    methods: ["get","head"],
    url: '/admin/task-board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
TaskBoard.url = (options?: RouteQueryOptions) => {
    return TaskBoard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
TaskBoard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TaskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
TaskBoard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TaskBoard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
const TaskBoardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
TaskBoardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
TaskBoardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TaskBoard.form = TaskBoardForm

export default TaskBoard