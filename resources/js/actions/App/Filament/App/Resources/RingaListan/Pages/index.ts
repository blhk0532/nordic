import ListRingaData from './ListRingaData'
import CreateRingaData from './CreateRingaData'
import QueueRingaData from './QueueRingaData'
import ViewRingaData from './ViewRingaData'
import EditRingaData from './EditRingaData'

const Pages = {
    ListRingaData: Object.assign(ListRingaData, ListRingaData),
    CreateRingaData: Object.assign(CreateRingaData, CreateRingaData),
    QueueRingaData: Object.assign(QueueRingaData, QueueRingaData),
    ViewRingaData: Object.assign(ViewRingaData, ViewRingaData),
    EditRingaData: Object.assign(EditRingaData, EditRingaData),
}

export default Pages