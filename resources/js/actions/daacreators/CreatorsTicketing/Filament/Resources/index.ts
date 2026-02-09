import Forms from './Forms'
import Departments from './Departments'
import Tickets from './Tickets'
import TicketStatuses from './TicketStatuses'
import AutomationRules from './AutomationRules'

const Resources = {
    Forms: Object.assign(Forms, Forms),
    Departments: Object.assign(Departments, Departments),
    Tickets: Object.assign(Tickets, Tickets),
    TicketStatuses: Object.assign(TicketStatuses, TicketStatuses),
    AutomationRules: Object.assign(AutomationRules, AutomationRules),
}

export default Resources