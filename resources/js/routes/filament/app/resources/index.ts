import bookingDataLeads from './booking-data-leads'
import minaBokningar from './mina-bokningar'
import campaigns from './campaigns'
import outcomeDelaySettings from './outcome-delay-settings'
import nummer from './nummer'
import ringaDataOutcomes from './ringa-data-outcomes'
import ringa from './ringa'
import teamUsers from './team-users'
import users from './users'

const resources = {
    bookingDataLeads: Object.assign(bookingDataLeads, bookingDataLeads),
    minaBokningar: Object.assign(minaBokningar, minaBokningar),
    campaigns: Object.assign(campaigns, campaigns),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    nummer: Object.assign(nummer, nummer),
    ringaDataOutcomes: Object.assign(ringaDataOutcomes, ringaDataOutcomes),
    ringa: Object.assign(ringa, ringa),
    teamUsers: Object.assign(teamUsers, teamUsers),
    users: Object.assign(users, users),
}

export default resources