import Booking from './Booking'
import BookingCalendars from './BookingCalendars'
import BookingDataLeads from './BookingDataLeads'

const Resources = {
    Booking: Object.assign(Booking, Booking),
    BookingCalendars: Object.assign(BookingCalendars, BookingCalendars),
    BookingDataLeads: Object.assign(BookingDataLeads, BookingDataLeads),
}

export default Resources