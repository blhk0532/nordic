import bookingDataLeads from './booking-data-leads'
import bookingOutcallQueues from './booking-outcall-queues'
import searches from './searches'
import bookingCalendars from './booking-calendars'
import failedJobs from './failed-jobs'
import bulkActions from './bulk-actions'

const resources = {
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    bookingOutcallQueues: Object.assign(bookingOutcallQueues, bookingOutcallQueues),
    searches: Object.assign(searches, searches),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
    failedJobs: Object.assign(failedJobs, failedJobs),
    bulkActions: Object.assign(bulkActions, bulkActions),
}

export default resources