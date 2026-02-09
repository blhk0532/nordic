import ListClients from './ListClients'
import EditClient from './EditClient'
import CreateClient from './CreateClient'
import ViewClient from './ViewClient'

const Pages = {
    ListClients: Object.assign(ListClients, ListClients),
    EditClient: Object.assign(EditClient, EditClient),
    CreateClient: Object.assign(CreateClient, CreateClient),
    ViewClient: Object.assign(ViewClient, ViewClient),
}

export default Pages