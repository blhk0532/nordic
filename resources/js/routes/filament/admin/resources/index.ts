import admins from './admins'
import outcomeDelaySettings from './outcome-delay-settings'
import outcomeSettings from './outcome-settings'
import ringaDataOutcomes from './ringa-data-outcomes'
import teamInvitations from './team-invitations'
import teams from './teams'
import terminalLogs from './terminal-logs'
import users from './users'
import whatsappAgents from './whatsapp-agents'
import whatsappInstances from './whatsapp-instances'
import activityLogs from './activity-logs'
import shield from './shield'
import bookingCalendars from './booking-calendars'

const resources = {
    admins: Object.assign(admins, admins),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    outcomeSettings: Object.assign(outcomeSettings, outcomeSettings),
    ringaDataOutcomes: Object.assign(ringaDataOutcomes, ringaDataOutcomes),
    teamInvitations: Object.assign(teamInvitations, teamInvitations),
    teams: Object.assign(teams, teams),
    terminalLogs: Object.assign(terminalLogs, terminalLogs),
    users: Object.assign(users, users),
    whatsappAgents: Object.assign(whatsappAgents, whatsappAgents),
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
    activityLogs: Object.assign(activityLogs, activityLogs),
    shield: Object.assign(shield, shield),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
}

export default resources