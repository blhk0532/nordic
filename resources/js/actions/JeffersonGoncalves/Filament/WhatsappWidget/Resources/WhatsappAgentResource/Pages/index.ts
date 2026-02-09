import ListWhatsappAgents from './ListWhatsappAgents'
import CreateWhatsappAgent from './CreateWhatsappAgent'
import ViewWhatsappAgent from './ViewWhatsappAgent'
import EditWhatsappAgent from './EditWhatsappAgent'

const Pages = {
    ListWhatsappAgents: Object.assign(ListWhatsappAgents, ListWhatsappAgents),
    CreateWhatsappAgent: Object.assign(CreateWhatsappAgent, CreateWhatsappAgent),
    ViewWhatsappAgent: Object.assign(ViewWhatsappAgent, ViewWhatsappAgent),
    EditWhatsappAgent: Object.assign(EditWhatsappAgent, EditWhatsappAgent),
}

export default Pages