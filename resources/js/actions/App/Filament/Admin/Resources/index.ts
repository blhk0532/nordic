import Admins from './Admins'
import OutcomeDelaySettings from './OutcomeDelaySettings'
import OutcomeSettings from './OutcomeSettings'
import TeamInvitations from './TeamInvitations'
import Teams from './Teams'
import Users from './Users'

const Resources = {
    Admins: Object.assign(Admins, Admins),
    OutcomeDelaySettings: Object.assign(OutcomeDelaySettings, OutcomeDelaySettings),
    OutcomeSettings: Object.assign(OutcomeSettings, OutcomeSettings),
    TeamInvitations: Object.assign(TeamInvitations, TeamInvitations),
    Teams: Object.assign(Teams, Teams),
    Users: Object.assign(Users, Users),
}

export default Resources