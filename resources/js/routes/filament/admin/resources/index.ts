import admins from './admins'
import outcomeDelaySettings from './outcome-delay-settings'
import outcomeSettings from './outcome-settings'
import teamInvitations from './team-invitations'
import teams from './teams'
import users from './users'
import whatsappInstances from './whatsapp-instances'

const resources = {
    admins: Object.assign(admins, admins),
    outcomeDelaySettings: Object.assign(outcomeDelaySettings, outcomeDelaySettings),
    outcomeSettings: Object.assign(outcomeSettings, outcomeSettings),
    teamInvitations: Object.assign(teamInvitations, teamInvitations),
    teams: Object.assign(teams, teams),
    users: Object.assign(users, users),
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
}

export default resources