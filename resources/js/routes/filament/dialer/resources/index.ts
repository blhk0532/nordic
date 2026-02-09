import bookingDataLeads from './booking-data-leads'
import bookingOutcallQueues from './booking-outcall-queues'
import searches from './searches'

const resources = {
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    bookingOutcallQueues: Object.assign(bookingOutcallQueues, bookingOutcallQueues),
    searches: Object.assign(searches, searches),
}

export default resources