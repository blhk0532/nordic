import forms from './forms'
import departments from './departments'
import tickets from './tickets'
import ticketStatuses from './ticket-statuses'
import automationRules from './automation-rules'
import searches from './searches'

const resources = {
    forms: Object.assign(forms, forms),
    departments: Object.assign(departments, departments),
    tickets: Object.assign(tickets, tickets),
    ticketStatuses: Object.assign(ticketStatuses, ticketStatuses),
    automationRules: Object.assign(automationRules, automationRules),
    searches: Object.assign(searches, searches),
}

export default resources