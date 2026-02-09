import admins from './admins'
import outcomeDelaySettings from './outcome-delay-settings'
import outcomeSettings from './outcome-settings'
import teamInvitations from './team-invitations'
import teams from './teams'
import users from './users'
import bookingCalendars from './booking-calendars'
import whatsapp from './whatsapp'
import whatsappInstances from './whatsapp-instances'
import activityLogs from './activity-logs'
import shield from './shield'

const resources = {
    admins: Object.assign(admins, admins),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    outcomeSettings: Object.assign(outcomeSettings, outcomeSettings),
    teamInvitations: Object.assign(teamInvitations, teamInvitations),
    teams: Object.assign(teams, teams),
    users: Object.assign(users, users),
    bookingCalendars: Object.assign(bookingCalendars, bookingCalendars),
    whatsapp: Object.assign(whatsapp, whatsapp),
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
    activityLogs: Object.assign(activityLogs, activityLogs),
    shield: Object.assign(shield, shield),
}

export default resources