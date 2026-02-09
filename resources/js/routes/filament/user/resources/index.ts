import admins from './admins'
import teams from './teams'
import users from './users'
import searches from './searches'
import booking from './booking'
import clients from './clients'
import tokens from './tokens'
import passportScopeResources from './passport-scope-resources'
import passportScopeActions from './passport-scope-actions'

const resources = {
    admins: Object.assign(admins, admins),
    teams: Object.assign(teams, teams),
    users: Object.assign(users, users),
    searches: Object.assign(searches, searches),
    booking: Object.assign(booking, booking),
    clients: Object.assign(clients, clients),
    tokens: Object.assign(tokens, tokens),
    passportScopeResources: Object.assign(passportScopeResources, passportScopeResources),
    passportScopeActions: Object.assign(passportScopeActions, passportScopeActions),
}

export default resources