import Admins from './Admins'
import OutcomeSettings from './OutcomeSettings'
import TeamInvitations from './TeamInvitations'
import Teams from './Teams'
import TerminalLogResource from './TerminalLogResource'
import WhatsappAgents from './WhatsappAgents'
import OutcomeDelaySettings from './OutcomeDelaySettings'
import RingaDataOutcomes from './RingaDataOutcomes'
import Users from './Users'

const Resources = {
    Admins: Object.assign(Admins, Admins),
    OutcomeSettings: Object.assign(OutcomeSettings, OutcomeSettings),
    TeamInvitations: Object.assign(TeamInvitations, TeamInvitations),
    Teams: Object.assign(Teams, Teams),
    TerminalLogResource: Object.assign(TerminalLogResource, TerminalLogResource),
    WhatsappAgents: Object.assign(WhatsappAgents, WhatsappAgents),
    OutcomeDelaySettings: Object.assign(OutcomeDelaySettings, OutcomeDelaySettings),
    RingaDataOutcomes: Object.assign(RingaDataOutcomes, RingaDataOutcomes),
    Users: Object.assign(Users, Users),
}

export default Resources