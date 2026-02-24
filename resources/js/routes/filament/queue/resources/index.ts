import bookingDataLeads from './booking-data-leads'
import bookingOutcallQueues from './booking-outcall-queues'
import searches from './searches'
import bookingCalendars from './booking-calendars'
import failedJobs from './failed-jobs'

const resources = {
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    bookingOutcallQueues: Object.assign(bookingOutcallQueues, bookingOutcallQueues),
    searches: Object.assign(searches, searches),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
    failedJobs: Object.assign(failedJobs, failedJobs),
}

export default resources