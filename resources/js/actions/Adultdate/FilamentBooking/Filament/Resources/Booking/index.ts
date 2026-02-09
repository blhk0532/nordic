import BookingOutcallQueues from './BookingOutcallQueues'
import Customers from './Customers'
import DailyLocations from './DailyLocations'
import Orders from './Orders'
import ServicePeriods from './ServicePeriods'
import Users from './Users'

const Booking = {
    BookingOutcallQueues: Object.assign(BookingOutcallQueues, BookingOutcallQueues),
    Customers: Object.assign(Customers, Customers),
    DailyLocations: Object.assign(DailyLocations, DailyLocations),
    Orders: Object.assign(Orders, Orders),
    ServicePeriods: Object.assign(ServicePeriods, ServicePeriods),
    Users: Object.assign(Users, Users),
}

export default Booking