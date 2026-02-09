import bookingDataLeads from './booking-data-leads'
import Bokningar from './Bokningar'
import outcomeDelaySettings from './outcome-delay-settings'
import nummer from './nummer'
import ringa from './ringa'
import teamUsers from './team-users'
import users from './users'

const resources = {
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    Bokningar: Object.assign(Bokningar, Bokningar),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    nummer: Object.assign(nummer, nummer),
    ringa: Object.assign(ringa, ringa),
    teamUsers: Object.assign(teamUsers, teamUsers),
    users: Object.assign(users, users),
}

export default resources