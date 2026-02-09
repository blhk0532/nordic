import Calendar from './Calendar'
import CalendarSettingsPage from './CalendarSettingsPage'
import PulseDashboard from './PulseDashboard'
import SchedulesCalendar from './SchedulesCalendar'
import TaskBoard from './TaskBoard'

const Pages = {
    Calendar: Object.assign(Calendar, Calendar),
    CalendarSettingsPage: Object.assign(CalendarSettingsPage, CalendarSettingsPage),
    PulseDashboard: Object.assign(PulseDashboard, PulseDashboard),
    SchedulesCalendar: Object.assign(SchedulesCalendar, SchedulesCalendar),
    TaskBoard: Object.assign(TaskBoard, TaskBoard),
}

export default Pages