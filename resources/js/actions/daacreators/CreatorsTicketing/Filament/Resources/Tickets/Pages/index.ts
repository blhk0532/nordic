import ListTickets from './ListTickets'
import CreateTicket from './CreateTicket'
import ViewTicket from './ViewTicket'

const Pages = {
    ListTickets: Object.assign(ListTickets, ListTickets),
    CreateTicket: Object.assign(CreateTicket, CreateTicket),
    ViewTicket: Object.assign(ViewTicket, ViewTicket),
}

export default Pages