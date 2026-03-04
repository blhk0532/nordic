import ViewUser from './ViewUser'
import ListUsers from './ListUsers'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

const Pages = {
    ViewUser: Object.assign(ViewUser, ViewUser),
    ListUsers: Object.assign(ListUsers, ListUsers),
    CreateUser: Object.assign(CreateUser, CreateUser),
    EditUser: Object.assign(EditUser, EditUser),
}

export default Pages