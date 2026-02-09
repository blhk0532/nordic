import ListTicketStatuses from './ListTicketStatuses'
import CreateTicketStatus from './CreateTicketStatus'
import EditTicketStatus from './EditTicketStatus'

const Pages = {
    ListTicketStatuses: Object.assign(ListTicketStatuses, ListTicketStatuses),
    CreateTicketStatus: Object.assign(CreateTicketStatus, CreateTicketStatus),
    EditTicketStatus: Object.assign(EditTicketStatus, EditTicketStatus),
}

export default Pages