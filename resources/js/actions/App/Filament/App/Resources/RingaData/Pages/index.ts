import ListRingaData from './ListRingaData'
import CreateRingaData from './CreateRingaData'
import QueueRingaData from './QueueRingaData'
import EditRingaData from './EditRingaData'

const Pages = {
    ListRingaData: Object.assign(ListRingaData, ListRingaData),
    CreateRingaData: Object.assign(CreateRingaData, CreateRingaData),
    QueueRingaData: Object.assign(QueueRingaData, QueueRingaData),
    EditRingaData: Object.assign(EditRingaData, EditRingaData),
}

export default Pages