import Tenancy from './Tenancy'
import Dashboard from './Dashboard'
import ArbetslistaDashboard from './ArbetslistaDashboard'
import InertiaCalendar from './InertiaCalendar'
import ManuSettings from './ManuSettings'
import SendTestMessage from './SendTestMessage'
import Settings from './Settings'
import TeamInvitationAccept from './TeamInvitationAccept'
import UserNotesSettings from './UserNotesSettings'
import AppDashboard from './AppDashboard'
import AppDataHistory from './AppDataHistory'

const Pages = {
    Tenancy: Object.assign(Tenancy, Tenancy),
    Dashboard: Object.assign(Dashboard, Dashboard),
    ArbetslistaDashboard: Object.assign(ArbetslistaDashboard, ArbetslistaDashboard),
    InertiaCalendar: Object.assign(InertiaCalendar, InertiaCalendar),
    ManuSettings: Object.assign(ManuSettings, ManuSettings),
    SendTestMessage: Object.assign(SendTestMessage, SendTestMessage),
    Settings: Object.assign(Settings, Settings),
    TeamInvitationAccept: Object.assign(TeamInvitationAccept, TeamInvitationAccept),
    UserNotesSettings: Object.assign(UserNotesSettings, UserNotesSettings),
    AppDashboard: Object.assign(AppDashboard, AppDashboard),
    AppDataHistory: Object.assign(AppDataHistory, AppDataHistory),
}

export default Pages