import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/admin/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Calendar::__invoke
* @see app/Filament/Pages/Calendar.php:7
* @route '/admin/calendar'
*/
calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendar.form = calendarForm

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
export const calendarSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

calendarSettingsPage.definition = {
    methods: ["get","head"],
    url: '/admin/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
calendarSettingsPage.url = (options?: RouteQueryOptions) => {
    return calendarSettingsPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
calendarSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
calendarSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarSettingsPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
const calendarSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
calendarSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\CalendarSettingsPage::__invoke
* @see app/Filament/Pages/CalendarSettingsPage.php:7
* @route '/admin/calendar-settings-page'
*/
calendarSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarSettingsPage.form = calendarSettingsPageForm

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
export const pulseDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pulseDashboard.url(options),
    method: 'get',
})

pulseDashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
pulseDashboard.url = (options?: RouteQueryOptions) => {
    return pulseDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
pulseDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
pulseDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pulseDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
const pulseDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
pulseDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulseDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\PulseDashboard::__invoke
* @see app/Filament/Pages/PulseDashboard.php:7
* @route '/admin/dashboard'
*/
pulseDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pulseDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pulseDashboard.form = pulseDashboardForm

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
export const schedulesCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedulesCalendar.url(options),
    method: 'get',
})

schedulesCalendar.definition = {
    methods: ["get","head"],
    url: '/admin/schedules-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
schedulesCalendar.url = (options?: RouteQueryOptions) => {
    return schedulesCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
schedulesCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
schedulesCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schedulesCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
const schedulesCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
schedulesCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedulesCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\SchedulesCalendar::__invoke
* @see app/Filament/Pages/SchedulesCalendar.php:7
* @route '/admin/schedules-calendar'
*/
schedulesCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedulesCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schedulesCalendar.form = schedulesCalendarForm

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
export const taskBoard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(options),
    method: 'get',
})

taskBoard.definition = {
    methods: ["get","head"],
    url: '/admin/task-board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
taskBoard.url = (options?: RouteQueryOptions) => {
    return taskBoard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
taskBoard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: taskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
taskBoard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: taskBoard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
const taskBoardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
taskBoardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\TaskBoard::__invoke
* @see app/Filament/Pages/TaskBoard.php:7
* @route '/admin/task-board'
*/
taskBoardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: taskBoard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

taskBoard.form = taskBoardForm

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
export const chatDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

chatDashboard.definition = {
    methods: ["get","head"],
    url: '/filament/admin/chat-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.url = (options?: RouteQueryOptions) => {
    return chatDashboard.definition.url + queryParams(options)
}

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chatDashboard.url(options),
    method: 'head',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
const chatDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/filament/admin/chat-dashboard'
*/
chatDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chatDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chatDashboard.form = chatDashboardForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    calendar: Object.assign(calendar, calendar),
    calendarSettingsPage: Object.assign(calendarSettingsPage, calendarSettingsPage),
    pulseDashboard: Object.assign(pulseDashboard, pulseDashboard),
    schedulesCalendar: Object.assign(schedulesCalendar, schedulesCalendar),
    taskBoard: Object.assign(taskBoard, taskBoard),
    chatDashboard: Object.assign(chatDashboard, chatDashboard),
}

export default pages