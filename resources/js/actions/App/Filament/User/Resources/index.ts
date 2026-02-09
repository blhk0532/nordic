import Admins from './Admins'
import Teams from './Teams'
import Users from './Users'

const Resources = {
    Admins: Object.assign(Admins, Admins),
    Teams: Object.assign(Teams, Teams),
    Users: Object.assign(Users, Users),
}

export default Resources